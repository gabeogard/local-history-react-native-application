import React, {useEffect, useState} from "react"
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView, Dimensions, ImageBackground
} from "react-native";
import {auth} from "../firebase.js";
import {signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";

export function LoginScreen({navigation}:{navigation: any}) {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        //bruk denne
        useEffect(() => {
            const unsubscribe = auth
                .onAuthStateChanged((user: any) => {
                if (user) {
                    navigation.navigate("userProfile")
                }
            })

            return unsubscribe
        }, [])

        const onPressLogin = async () => {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                console.log(userCredential )

            } catch (error) {
                alert(error.message)
            }
        }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={"padding"}>

            <ImageBackground style={styles.introBox} source={require("../res/images/landing-picture.png")}>
                <Text style={styles.textOnBackground}>Byåa Kultursti</Text>
            </ImageBackground>

            <Text></Text>

            <View style={styles.inputContainer}>
                <TextInput
                style={styles.input}
                placeholder={"Epost"}
                value={email}
                onChangeText={text => setEmail(text)}
                returnKeyType={ "done" }
                autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder={"Passord"}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    returnKeyType={ "done" }
                    secureTextEntry
                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => {onPressLogin()}}
                        style={styles.button}
                    >
                        <Text style={styles.text}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { }}
                        style={styles.button}
                    >
                        <Text style={styles.text}>Ny bruker?</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBF4E6",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    introBox: {
        width: Dimensions.get("window").width >= 375 ? 350: 278,
        height: Dimensions.get("window").width >= 375 ? 115: 90,
        top: -50,
        display: "flex",
        alignContent: "center",
        justifyContent: "center",

        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    textOnBackground: {
        //fontFamily: 'Roboto-Regular',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 24,
        lineHeight: 28,
        paddingLeft: 32,
        paddingBottom: 33,

        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    inputContainer: {
        backgroundColor: "#FBF4E6",
        top: -20,
    },
    input: {
        height: 35,
        width: 200,
        borderRadius: 12,
        backgroundColor: "#fff",
        borderWidth:1,
        marginTop: 12,
        padding: 9,
        top: -20
    },
    buttonContainer:{
        backgroundColor: "#FBF4E6",
        top: Dimensions.get("window").width >= 375 ? 5: 0,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    button: {
        backgroundColor: "#F5BFB6",
        marginTop: Dimensions.get("window").width >= 375 ? 10: 5,
        borderWidth:1,
        borderRadius:6,
        padding: 3,
        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    text: {
        fontSize: 14,
    }
})
