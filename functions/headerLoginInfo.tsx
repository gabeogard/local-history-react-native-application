import * as React from "react";
import {useState} from "react";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../firebase";
import {Dimensions, StyleSheet, Text, View, Alert} from "react-native";

export function HeaderLoginInfo() {

    const [user, setUser] = useState<{} | null>({})

    const logout = async () => {

        try {
            await signOut(auth).then(() =>{
                Alert.alert("vellykket", "Du er nå logget ut")
            })

        }catch (error){
            console.log(error)
        }

    }

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    const renderLogout = () => {
        return (
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.button} onPress={logout}>Logg ut</Text>)
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

const styles = StyleSheet.create({
        button: {
            backgroundColor: "#C7E6D5",
            borderWidth: 1,
            borderRadius: 6,
            padding: 3,
            overflow: "hidden",
            shadowColor: "#000000",
            shadowOffset: {width: 0, height: 4},
            shadowOpacity: 0.3,
            shadowRadius: 4,
            fontSize: Dimensions.get("window").width >= 375 ? 19 : 0
        }
    }
)