import {createContext, useContext, useEffect, useState} from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail
} from "firebase/auth/"
import {auth, db} from "../firebase";
import {doc, setDoc} from "firebase/firestore/lite";
import {Alert} from "react-native";
import {ErrorHandler} from "./ErrorHandler";

const UserContext = createContext({})

export const useUserContext = () => {
    return useContext(UserContext)
}

export const UserContextProvider = ({children}: any) => {

    const [user, setUser] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, res => {
            res ? setUser(res as any) : setUser(null)
            setError("")
            setLoading(false)
        });
        return unsubscribe
    }, [])

    const registerUser = async (email: string, username: string, password: string, navigation: any) => {
        setLoading(true)

        try {
            await createUserWithEmailAndPassword(auth, email, password)
                .then((userData) => {
                    const docRef = doc(db, "users", userData.user.uid);
                    setDoc(docRef, {
                        username: username,
                    })
                    console.log("user and username have been added")
                })
            navigation.navigate("Home")
        }
        catch (error) {

        alert(error.message)
        }
        finally {
            setLoading(false)
        }
    }

    const signInUser = async (email: string, password: string, navigation: any) => {
        setLoading(true)
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigation.navigate("Home")
        }
        catch (error) {
            ErrorHandler(error);
        }
        finally {
            setLoading(false)
        }
    }

    const logoutUser = () => {
        try {
            signOut(auth).then(() =>{
                Alert.alert("vellykket", "Du er nå logget ut")
            })

        }catch (error){
            console.log(error)
        }
    }

    const forgotPassword = async (email: string) => {
        try {
           await sendPasswordResetEmail(auth, email)
            Alert.alert("Vellykket", "Du har fått en melding på din e-postadresse")
        }
        catch (error) {
            alert(error.message)
        }
        finally {
            setLoading(false)
        }
    }

    const contextValue = {user, isLoading, error, registerUser, signInUser, logoutUser, forgotPassword};

    return (
        <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
    );
}


