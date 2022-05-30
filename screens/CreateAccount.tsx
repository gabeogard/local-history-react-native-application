/**
* https://github.com/APSL/react-native-keyboard-aware-scroll-view
*/

import {ImageBackground, LogBox, Pressable, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import React, {useState} from "react";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {TextInputCustom} from "../library/TextInputCustom";
import {useUserContext} from "../functions/UserContext";
// ignoring warnings that start in a string that matchs asyncStorage. issue have to be fixed on firebase side(next update)
LogBox.ignoreLogs(["AsyncStorage has"]);

export function CreateAccount({navigation}:{navigation: any}) {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const {registerUser, isLoading}: any = useUserContext();


    const onRegisterPress = () => {

        if (password !== confirmPassword) {
            alert("Passordet stemmer ikke")
            return
        }

        registerUser(email, userName, password, navigation)
    }

    if (isLoading) {
        return (
            <View style={styles.loadingScreen}><Text>Logger inn...</Text></View>
        )
    }

    return (


        <KeyboardAwareScrollView extraHeight={120} contentContainerStyle={styles.container}>

            <View style={styles.viewContainer}>

                <View style={[styles.imageContainer, styles.shadow]}>
                    <ImageBackground source={require("../res/images/landing-picture.png")}
                                     style={[StyleSheet.absoluteFillObject, styles.imageTextFlex]}
                                     imageStyle={styles.image}>

                        <View style={styles.introTextContainer}>
                            <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.introText, styles.shadow]}>Byåa
                                Kultursti</Text>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.registerContainer}>

                    <View style={styles.registerWidth}>

                        <View style={{width: "100%", height: "15%", justifyContent: "center"}}>
                            <TextInputCustom label="Brukernavn" value={userName} onChange={setUserName}
                                             secureTextEntry={false}/>
                        </View>

                        <View style={{width: "100%", height: "15%", justifyContent: "center"}}>
                            <TextInputCustom label="Epost" value={email} onChange={setEmail} secureTextEntry={false}/>
                        </View>

                        <View style={{width: "100%", height: "15%", justifyContent: "center"}}>
                            <TextInputCustom label="Passord" value={password} onChange={setPassword}
                                             secureTextEntry={true}/>
                        </View>

                        <View style={{width: "100%", height: "15%", justifyContent: "center"}}>
                            <View style={{flex: 1}}>
                                <TextInputCustom label="Bekreft passord" value={confirmPassword}
                                                 onChange={setConfirmPassword} secureTextEntry={true}/>
                                <Pressable style={{alignItems: "flex-end", top: "2%"}}
                                           onPress={() => navigation.navigate("Third")}>
                                    <Text numberOfLines={1} adjustsFontSizeToFit>Har du allerede en konto? Logg
                                        Inn</Text>
                                </Pressable>
                            </View>
                        </View>


                        <TouchableOpacity style={styles.button}
                                          onPress={() => onRegisterPress()}>
                            <Text numberOfLines={1} adjustsFontSizeToFit style={{fontSize: 20}}>Opprett konto</Text>
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
        justifyContent: "space-between",
        alignItems: "center"
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
    registerContainer: {
        width: "100%",
        height: "75%",
        alignItems: "center"
    },
    registerWidth: {
        width: "80%",
        height: "100%",
        justifyContent: "space-between"
    },


    button: {
        backgroundColor: "#F5BFB6",
        width: "100%",
        height: "15%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
        top: "3%"
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


/*
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
    buttonFlex: {
        backgroundColor: "#FBF4E6",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        top: "35%",
        zIndex: -1,
    },
    button: {
        backgroundColor: "#F5BFB6",
        marginTop: Dimensions.get("window").width >= 400 ? 10: 5,
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
        top: "20%",
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
});*/
