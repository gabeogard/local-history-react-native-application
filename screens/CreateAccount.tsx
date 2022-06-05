/**
 * https://github.com/APSL/react-native-keyboard-aware-scroll-view
 */

import {
    LogBox,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TextInputCustom } from '../library/TextInputCustom'
import { useUserContext } from '../functions/UserContext'
// ignoring warnings that start in a string that matchs asyncStorage. issue have to be fixed on firebase side(next update)
LogBox.ignoreLogs(['AsyncStorage has'])

export const CreateAccount = ({ navigation }: { navigation: any }) => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const { registerUser, isLoading } = useUserContext()

    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert('Passordet stemmer ikke')
            return
        }

        registerUser(email, userName, password)
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
            style={styles.scrollDwnBackground}
        >
            <View style={styles.viewContainer}>
                <View style={styles.inputContainer}>
                    <View style={styles.input}>
                        <TextInputCustom
                            label="Brukernavn"
                            value={userName}
                            onChange={setUserName}
                            secureTextEntry={false}
                        />
                    </View>

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
                            label="Passord"
                            value={password}
                            onChange={setPassword}
                            secureTextEntry={true}
                        />
                    </View>

                    <View style={styles.input}>
                        <TextInputCustom
                            label="Bekreft passord"
                            value={confirmPassword}
                            onChange={setConfirmPassword}
                            secureTextEntry={true}
                        />
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <Pressable
                        style={styles.loginButton}
                        onPress={() => navigation.navigate('Third')}
                    >
                        <Text numberOfLines={1} adjustsFontSizeToFit>
                            Har du allerede en konto? Logg Inn
                        </Text>
                    </Pressable>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => onRegisterPress()}
                    >
                        <Text
                            numberOfLines={1}
                            adjustsFontSizeToFit
                            style={{ fontSize: 20 }}
                        >
                            Opprett konto
                        </Text>
                    </TouchableOpacity>
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
    scrollDwnBackground: {
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        height: '60%',
        justifyContent: 'space-between',
    },
    input: {
        width: '100%',
        height: '15%',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: '80%',
        height: '30%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    loginButton: {
        width: '100%',
        alignItems: 'flex-end',
    },
    button: {
        backgroundColor: '#e3eef0',
        width: '100%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        borderColor: '#000',
        borderWidth: 1,
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
