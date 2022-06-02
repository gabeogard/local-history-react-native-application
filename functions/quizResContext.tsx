import { createContext, useContext, useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore/lite'
import firebase from 'firebase/compat'
import DocumentData = firebase.firestore.DocumentData

const QuizResContext = createContext({})

export const useQuizResContext = () => useContext(QuizResContext)

export const QuizResContextProvider = ({ children }: any) => {
    const [questions, setQuestions] = useState<DocumentData[]>([])
    const [facts, setFacts] = useState<DocumentData[]>([])
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const withLoading = <T extends unknown>(fn: () => T) => {
        setLoading(true)
        const result = fn()
        setLoading(false)
        return result
    }

    const fetchQuestions = async () =>
        withLoading(async () =>
            (await getDocs(collection(db, 'quiz'))).docs.map((value) =>
                value.data()
            )
        )

    const fetchFacts = async () =>
        withLoading(async () =>
            (await getDocs(collection(db, 'facts'))).docs.map((value) =>
                value.data()
            )
        )

    useEffect(() => {
        ;(async () => {
            setQuestions(await fetchQuestions())
            setFacts(await fetchFacts())
        })()
    }, [])

    const contextValue = {
        facts,
        questions,
        fetchFacts,
        fetchQuestions,
        isLoading,
    }

    return (
        <QuizResContext.Provider value={contextValue}>
            {children}
        </QuizResContext.Provider>
    )
}
