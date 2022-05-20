import * as React from "react";
import {useState} from "react";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../firebase";
import {Text, View} from "react-native";

export function HeaderLoginInfo() {

    const [user, setUser] = useState<{} | null>({})

    const logout = async () => {
        await signOut(auth)
    }

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    const renderLogout = () => {
        return (
            <Text style={{
                backgroundColor: "#C7E6D5",
                borderWidth: 1,
                borderRadius: 6,
                padding: 3,
                overflow: "hidden",
                shadowColor: "#000000",
                shadowOffset: {width: 0, height: 4},
                shadowOpacity: 0.3,
                shadowRadius: 4,
            }} onPress={logout}>Logg ut</Text>)
    }
    return (
        <View>
            {(user as any)?.email ?
                <View>{renderLogout()}</View>
                :
                false}
        </View>
    )
}