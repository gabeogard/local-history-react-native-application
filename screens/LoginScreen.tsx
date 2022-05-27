import React, {useState} from "react"
import {Alert, Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {TextInputCustom} from "../library/TextInputCustom";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import {useUserContext} from "../functions/UserContext";

export function LoginScreen({navigation}:{navigation: any}) {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const {signInUser, forgotPassword, isLoading}: any = useUserContext()

        const onPressLogin = () => {

            if (!password && !email) {
                Alert.alert("Ugyldig", "Skriv inn e-postadresse og password")
                return
            }
            signInUser(email, password, navigation)
        }

        const onPressResetPassword = async () => {
            Alert.prompt("Tilbakestille passord","Hvilken e-postadresse gjelder det?", email => {
                 forgotPassword(email).then(() => {
                 })
            })
        }

    if (isLoading){
        return (
            <View style={styles.loadingScreen}><Text>Logger inn...</Text></View>
        )
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
            <View>
            </View>


            <View style={styles.buttonFlex}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onPressResetPassword()}>
                    <Text>Glemt passord?</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonFlex}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("CreateAccrount")}>
                    <Text>Ny bruker? Trykk her</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>

    );
}

const styles = StyleSheet.create({
    loadingScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FBF4E6"
    },
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
