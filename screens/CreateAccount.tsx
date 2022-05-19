/**
* https://github.com/APSL/react-native-keyboard-aware-scroll-view
*/

import {
    Button,
    Dimensions,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, {useState} from "react";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";


export function CreateAccount() {

    const [userName, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passordet stemmer ikke")
            return
        }
    }

    return (
            <KeyboardAwareScrollView extraHeight={120} style={styles.container}>

                <View style={{
                    justifyContent: "center",
                    alignItems: "center",}}>
                <ImageBackground style={styles.introBox} source={require("../res/images/landing-picture.png")}>
                    <Text style={styles.textOnBackground}>Byåa Kultursti</Text>
                </ImageBackground>

                <Text style={styles.text}>Register deg</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Brukernavn"
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(username) => setUsername(username)}
                        value={userName}
                        returnKeyType={ 'done' }
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Epost"
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(email) => setEmail(email)}
                        value={email}
                        returnKeyType={ 'done' }
                    />
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        placeholder='Passord'
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(password) => setPassword(password)}
                        value={password}
                        returnKeyType={ 'done' }
                    />
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        placeholder='Bekreft passord'
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(conPassword) => setConfirmPassword(conPassword)}
                        value={confirmPassword}
                        returnKeyType={ 'done' }
                    />
                </View>
                    <View style={styles.buttonFlex}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => onRegisterPress()}>
                            <Text>Register bruker</Text>
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
    buttonFlex: {
        backgroundColor: "#FBF4E6",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        top: Dimensions.get("window").width >= 400 ? 60: 50,
        //top: 10,
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
        top: 10,
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
        top: 20,
        fontSize: 20
    },
    input: {
        height: 25,
        width: 120,
        borderRadius: 10,
        backgroundColor: "#fff",
        borderWidth:1,
        overflow: 'hidden',
        marginTop: 12,
        padding: 5,
        top: 30
    },
});
