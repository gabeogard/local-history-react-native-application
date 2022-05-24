import React, {useEffect, useRef, useState} from "react"
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions, ImageBackground, Alert
} from "react-native";
import {auth} from "../firebase.js";
import {signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import {TextInputCustom} from "../library/TextInputCustom";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

export function LoginScreen({navigation}:{navigation: any}) {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [isLoading, setLoading] = useState(true)

    const mounted = useRef(true);
        //ikke bruk denne / dette er bare for test
        useEffect(() => {
            mounted.current = false;
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
                setLoading(true);
                const userCredential = await signInWithEmailAndPassword(auth, email, password)
                Alert.alert("vellykket", "Du er nå logget på")
                navigation.navigate("Home")
                console.log(userCredential )

            } catch (error) {
                alert(error.message)
                if (mounted.current) {
                    alert("Failed to Log In");
                }
            }
            if (mounted.current) {
                setLoading(false);
            }
        }

    return (

        <KeyboardAwareScrollView extraHeight={120} style={styles.container}>

            <View style={{justifyContent: "center", alignItems: "center",}}>
                <ImageBackground style={styles.introBox} source={require("../res/images/landing-picture.png")}>
                    <Text style={styles.textOnBackground}>Byåa Kultursti</Text>
                </ImageBackground>


                <View style={styles.inputContainer}>

                    <Text style={styles.text}>Logg deg inn</Text>

                    <TextInputCustom name="Epost" value={email} onChange={setEmail} secureTextEntry={false} />

                    <TextInputCustom name="Password" value={password} onChange={setPassword} secureTextEntry={true} />

                </View>
                <View style={styles.buttonFlex}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => onPressLogin()}>
                        <Text>Logg deg inn</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAwareScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FBF4E6",
        flex: 1,
        paddingHorizontal: 20,
    },
    inputContainer: {
        flex: 1,
        top: "20%"
    },
    buttonFlex: {
        backgroundColor: "#FBF4E6",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        top: "50%",
        zIndex: -1,
    },
    button: {
        backgroundColor: "#F5BFB6",
        borderWidth:1,
        borderRadius:6,
        padding: 3,

        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    introBox: {
        width: Dimensions.get("window").width >= 400 ? 350: 278,
        height: Dimensions.get("window").width >= 400 ? 115: 90,
        top: "27%",
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
    text: {
        top: "40%",
        fontSize: 20
    },
});
