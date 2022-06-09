import React, { useState } from 'react'
import {
    Alert,
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { TextInputCustom } from '../library/TextInputCustom'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useUserContext } from '../functions/UserContext'

export const LoginScreen = ({ navigation }: { navigation: any }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signInUser, forgotPassword, isLoading } = useUserContext()

    const onPressLogin = () => {
        if (!password || !email) {
            Alert.alert('Ugyldig', 'Skriv inn e-postadresse og password')
            return
        }
        signInUser(email, password).then(() => {
            navigation.navigate('Home')
        })
    }

    const onPressResetPassword = () => {
        Alert.prompt(
            'Tilbakestille passord',
            'Hvilken e-postadresse gjelder det?',
            [
                {
                    text: 'Avbryt',
                    style: 'cancel',
                },
                {
                    text: 'Send',
                    onPress: (email) => forgotPassword(email!).then(() => {}),
                },
            ]
        )
    }

    if (isLoading) {
        return (
            <View style={styles.loadingScreen}>
                <Text>Logger inn...</Text>
            </View>
        )
    }

    return (
        <KeyboardAwareScrollView
            extraHeight={120}
            contentContainerStyle={styles.container}
            style={{ backgroundColor: '#FBF4E6' }}
        >
            <View style={styles.viewContainer}>
                <View style={[styles.imageContainer, styles.shadow]}>
                    <ImageBackground
                        source={require('../res/images/landing-picture.png')}
                        style={[
                            StyleSheet.absoluteFillObject,
                            styles.imageTextFlex,
                        ]}
                        imageStyle={styles.image}
                    >
                        <View style={styles.introTextContainer}>
                            <Text
                                adjustsFontSizeToFit
                                numberOfLines={1}
                                style={[styles.introText, styles.shadow]}
                            >
                                Byåa Kultursti
                            </Text>
                        </View>
                    </ImageBackground>
                </View>

                <View style={[styles.loginContainer, styles.shadow]}>
                    <View style={styles.loginIntroCtr}>
                        <View style={styles.loginIntroTxtCtr}>
                            <Text
                                numberOfLines={1}
                                adjustsFontSizeToFit
                                style={styles.loginIntroText}
                            >
                                Logg inn
                            </Text>
                        </View>
                        <Pressable
                            style={styles.registerCtr}
                            onPress={() => navigation.navigate('createAccount')}
                        >
                            <Text
                                numberOfLines={1}
                                adjustsFontSizeToFit
                                style={styles.registerText}
                            >
                                Har du ikke en konto? Trykk her
                            </Text>
                        </Pressable>
                    </View>

                    <View style={styles.loginFunctionCtr}>
                        <View style={styles.input}>
                            <TextInputCustom
                                label="Epost"
                                value={email}
                                onChange={setEmail}
                                secureTextEntry={false}
                            />
                        </View>

                        <View style={styles.input}>
                            <TextInputCustom
                                label="Password"
                                value={password}
                                onChange={setPassword}
                                secureTextEntry={true}
                            />
                            <Pressable
                                style={styles.resetPassword}
                                onPress={() => onPressResetPassword()}
                            >
                                <Text numberOfLines={1} adjustsFontSizeToFit>
                                    Glemt passord?
                                </Text>
                            </Pressable>
                        </View>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => onPressLogin()}
                        >
                            <Text
                                numberOfLines={1}
                                adjustsFontSizeToFit
                                style={{ fontSize: 20 }}
                            >
                                Logg inn
                            </Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBF4E6',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBF4E6',
    },
    viewContainer: {
        width: '90%',
        height: '80%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageContainer: {
        width: '100%',
        height: '20%',
    },
    image: {
        borderRadius: 10,
        borderWidth: 1,
    },
    imageTextFlex: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    introTextContainer: {
        width: '50%',
        bottom: '16%',
        right: '6%',
    },
    introText: {
        fontWeight: 'bold',
        fontSize: 27,
    },
    loginContainer: {
        width: '100%',
        height: '75%',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
    },
    loginIntroCtr: {
        height: '25%',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#e3eef0',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    loginIntroTxtCtr: {
        height: '40%',
        width: '35%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginIntroText: {
        textAlign: 'center',
        fontSize: 40,
        color: '#000',
    },
    registerCtr: {
        height: '30%',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerText: {
        textAlign: 'center',
        fontSize: 23,
        color: '#3F474C',
    },
    loginFunctionCtr: {
        width: '80%',
        height: '75%',
        justifyContent: 'space-evenly',
    },
    input: {
        width: '100%',
        height: '15%',
        justifyContent: 'center',
    },
    resetPassword: {
        alignItems: 'flex-end',
        top: '10%',
    },
    button: {
        backgroundColor: '#e3eef0',
        width: '100%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
    },

    shadow: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.68,

        elevation: 5,
    },
})
