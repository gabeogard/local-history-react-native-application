import React, { createContext, useContext, useEffect, useState } from 'react'
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    User,
} from 'firebase/auth/'
import { auth, db } from '../firebase'
import { doc, setDoc } from 'firebase/firestore/lite'
import { Alert } from 'react-native'
import { ErrorHandler } from './ErrorHandler'

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
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (res) => {
            res ? setUser(res) : setUser(null)
            setError('')
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const registerUser = async (
        email: string,
        username: string,
        password: string
    ) => {
        setLoading(true)
        try {
            await createUserWithEmailAndPassword(auth, email, password).then(
                (userData) => {
                    const docRef = doc(db, 'users', userData.user.uid)
                    setDoc(docRef, {
                        username: username,
                        createdAt: new Date(),
                    })
                    console.log('user and username have been added')
                }
            )
        } catch (error) {
            if (error.message === "Firebase: Error (auth/invalid-email).") {
                Alert.alert("Ugyldig epost", "Prøv igjen");
            } else if (error.message === "Firebase: Error (auth/wrong-password).") {
                Alert.alert("Ugyldig password", "Prøv igjen");
            }else if (error.message === "Firebase: Error (auth/user-not-found).") {
                Alert.alert("Finner ikke bruker.", " Vennligst registrer deg.")
            } else if (error.message === "Firebase: Error (auth/missing-email).") {
                Alert.alert("Du mangler Epost.", "Skriv inn Epost")
            }else if (error.message === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
                Alert.alert("Du har valgt et svakt passord.", "Du må minimum ha 6 tegn.")
            }
            else {
                alert(error.message);
            }
        } finally {
            setLoading(false)
        }
    }

    const signInUser = async (email: string, password: string) => {
        setLoading(true)
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            ErrorHandler(error)
        } finally {
            setLoading(false)
        }
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
        try {
            await sendPasswordResetEmail(auth, email)
            Alert.alert(
                'Vellykket',
                'Du har fått en melding på din e-postadresse'
            )
        } catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
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
