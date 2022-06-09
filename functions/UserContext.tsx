import React, { createContext, useContext, useEffect, useState } from 'react'
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    User,
} from 'firebase/auth/'
import { auth, db } from '../firebase'
import { doc, setDoc } from 'firebase/firestore/lite'
import { Alert } from 'react-native'
import { ErrorHandler } from './ErrorHandler'
import { useLoading } from '../hooks/useLoading'

const UserContext = createContext({})

export interface UserContextType {
    registerUser: (
        email: string,
        username: string,
        password: string
    ) => Promise<void>
    signInUser: (email: string, username: string) => Promise<void>
    logoutUser: () => Promise<void>
    forgotPassword: (email: string) => Promise<void>
    user: User | null
    isLoading: boolean
}

export const useUserContext = () => useContext(UserContext) as UserContextType

export const UserContextProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [user, setUser] = useState<User | null>(null)
    const [error, setError] = useState('')
    const [isLoading, withLoading] = useLoading()

    useEffect(() => {
        return onAuthStateChanged(auth, (res) => {
            res ? setUser(res) : setUser(null)
            setError('')
        })
    }, [])

    const registerUser = async (
        email: string,
        username: string,
        password: string
    ) => {
        await withLoading(async () => {
            try {
                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                ).then(({ user: { uid } }) => {
                    const docRef = doc(db, 'users', uid)
                    setDoc(docRef, { username: username })
                    console.log('user and username have been added')
                })
            } catch (error: any) {
                alert(error.message)
            }
        })
    }

    const signInUser = async (email: string, password: string) => {
        await withLoading(async () => {
            try {
                await signInWithEmailAndPassword(auth, email, password)
            } catch (error) {
                ErrorHandler(error)
            }
        })
    }

    const logoutUser = () => {
        try {
            signOut(auth).then(() => {
                Alert.alert('vellykket', 'Du er nå logget ut')
            })
        } catch (error) {
            console.log(error)
        }
    }

    const forgotPassword = async (email: string) => {
        await withLoading(async () => {
            try {
                await sendPasswordResetEmail(auth, email)
                Alert.alert(
                    'Vellykket',
                    'Du har fått en melding på din e-postadresse'
                )
            } catch (error: any) {
                alert(error.message)
            }
        })
    }

    const contextValue = {
        user,
        isLoading,
        error,
        registerUser,
        signInUser,
        logoutUser,
        forgotPassword,
    }

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}
