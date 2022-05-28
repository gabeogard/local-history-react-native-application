import React, {useState} from "react"
import {Alert, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {TextInputCustom} from "../library/TextInputCustom";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import {useUserContext} from "../functions/UserContext";

export function LoginScreen({navigation}:{navigation: any}) {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const {signInUser, forgotPassword, isLoading}: any = useUserContext()

        const onPressLogin = () => {
            if (!password || !email) {
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
        <KeyboardAwareScrollView extraHeight={120} contentContainerStyle={styles.container}>

            <View style={{width: "90%", height: "80%", justifyContent: "space-between", alignItems: "center",}}>

                <View style={[styles.imageContainer, styles.shadow]}>
                    <ImageBackground source={require("../res/images/landing-picture.png")} style={[StyleSheet.absoluteFillObject, styles.imageTextFlex]}
                                     imageStyle={styles.image}>

                        <View style={styles.introTextContainer}>
                            <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.introText, styles.shadow]}>Byåa Kultursti</Text>
                        </View>
                    </ImageBackground>
                </View>

                <View style={[{width: "100%", height: "75%", backgroundColor: "white", alignItems: "center", borderRadius: 10}, styles.shadow]}>

                    <View style={{height: "25%", width: "100%", backgroundColor: "#45B4EB", alignItems: "center", justifyContent: "space-evenly", borderRadius: 10 }}>
                        <View style={{height: "40%", width: "35%", justifyContent:"center", alignItems: "center"}}>
                        <Text numberOfLines={1} adjustsFontSizeToFit style={{textAlign: "center", fontSize: 40, color: "white"}}>Logg inn</Text>
                        </View>
                        <View style={{height: "30%", width: "60%", justifyContent:"center", alignItems: "center"}}>
                        <Text numberOfLines={1} adjustsFontSizeToFit style={{textAlign: "center" ,fontSize: 23, color: "#3F474C"}}>Har du ikke en konto?? Trykk her</Text>
                        </View>

                    </View>

                    <View style={{width: "80%", height: "75%", justifyContent: "space-evenly"}}>

                        <View style={{width: "100%", height: "15%", justifyContent: "center"}}>
                            <TextInputCustom label="Epost" value={email} onChange={setEmail} secureTextEntry={false} />
                        </View>

                        <View style={{width: "100%", height: "15%", justifyContent: "center"}}>
                            <TextInputCustom label="Password" value={password} onChange={setPassword} secureTextEntry={true} />
                            <Pressable style={{alignItems: "flex-end", top: "10%"}} onPress={ () => onPressResetPassword()}>
                                <Text numberOfLines={1} adjustsFontSizeToFit>Glemt passord?</Text>
                            </Pressable>
                        </View>

                        <TouchableOpacity style={{backgroundColor: "#F5BFB6", width: "100%", height: "15%", justifyContent: "center", alignItems: "center"}}
                            onPress={() => onPressLogin()}>
                            <Text>Logg inn</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
        </KeyboardAwareScrollView>
    )

}

const styles = StyleSheet.create({
    loadingScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FBF4E6"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FBF4E6"
    },
    viewContainer: {
        width: "90%",
        height: "80%",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    imageContainer: {
        width: "100%",
        height: "20%"
    },
    image: {
        borderRadius: 10,
        borderWidth: 1,


    },
    imageTextFlex: {
        justifyContent: "center",
        alignItems: "center"
    },
    introTextContainer: {
        width: "50%",
        bottom: "16%",
        right: "6%"
    },
    introText: {
        fontWeight: "bold",
        fontSize: 27
    },


    shadow: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.68,

        elevation: 5,
    }
});
