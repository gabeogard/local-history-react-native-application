import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import { auth, db } from '../firebase'
import { collection, getDocs, query } from 'firebase/firestore/lite'
import React, { useEffect, useState } from 'react'
import { useUserContext } from '../functions/UserContext'
import { FontAwesome } from '@expo/vector-icons'

export const UserProfileScreen = ({ navigation }: { navigation: any }) => {
    const [username, setUsername] = useState({
        score: '',
        username: '',
        createdAt: ''
    })
    const { user } = useUserContext()
    const [isLoading, setLoading] = useState(false)

    const [text, setText] = useState('')

    const q = query(collection(db, 'users'))

    useEffect(() => {
        //refresh for getting updated score
        return navigation.addListener('focus', async () => {
            setLoading(true)
            try {
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    if (doc.id == auth.currentUser?.uid) {
                        setUsername(doc.data() as any)
                    }
                })
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        })
    }, [navigation])


    if (isLoading) {
        return (
            <View style={styles.loadingScreen}>
                <Text>Laster...</Text>
            </View>
        )
    }

    const getInfo = () => {
        Alert.prompt('Dyr', 'Hva er ditt favoritt dyr?', [
            {
                text: 'Avbryt',
                style: 'cancel',
            },
            {
                text: 'Lagre',
                onPress: (text) => setText(text!),
            },
        ])
    }

    return (
        <View style={styles.container}>
            <View style={[styles.profileHeader, styles.shadow]}>
                <View style={{ justifyContent: 'flex-end' }}>
                    <Image
                        style={{
                            width: 150,
                            height: 150,
                            tintColor: '#3F474C',
                        }}
                        source={require('../res/images/profile/icon-account.png')}
                    />
                </View>

                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text
                            style={{
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                color: '#3F474C',
                            }}
                        >
                            Info:{' '}
                        </Text>
                    </View>

                    <View
                        style={{
                            borderTopWidth: 1,
                            marginTop: 5,
                            marginBottom: 5,
                            borderColor: '#3F474C',
                        }}
                    ></View>

                    <View style={{ width: '97%' }}>
                        <Text
                            numberOfLines={1}
                            adjustsFontSizeToFit
                            style={styles.text}
                        >
                            {user?.email}
                        </Text>
                        <Text
                            numberOfLines={1}
                            adjustsFontSizeToFit
                            style={styles.text}
                        >
                            Bruker:{' '}
                            <Text style={styles.textUsername}>
                                {username.username}
                            </Text>
                        </Text>
                    </View>
                </View>
            </View>

            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    width: '100%',
                    marginTop: '10%',
                    marginBottom: '15%',
                }}
            >
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                    }}
                >
                    <View
                        style={{
                            backgroundColor: '#e3eef0',
                            width: '92%',
                            height: '15%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text>Status:</Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: '#e3eef0',
                            width: '92%',
                            height: '15%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text>Favoritt dyr:</Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: '#e3eef0',
                            width: '92%',
                            height: '15%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text>Quiz resultat:</Text>
                    </View>
                </View>

                <View
                    style={{
                        flex: 2,
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                    }}
                >
                    <View style={{ width: '95%', height: '15%' }}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: '#3F474C',
                                    width: '30%',
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Text style={styles.textFlex}>Online</Text>
                            </View>
                            <View
                                style={{
                                    backgroundColor: '#3F474C',
                                    width: '68%',
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Text
                                    numberOfLines={1}
                                    adjustsFontSizeToFit
                                    style={styles.textFlex}
                                >
                                    Opprettet: {username?.createdAt}
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View
                        style={{
                            backgroundColor: '#3F474C',
                            width: '95%',
                            height: '15%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingLeft: '6%',
                            paddingRight: '3%',
                        }}
                    >
                        <Text
                            numberOfLines={1}
                            adjustsFontSizeToFit
                            style={styles.textFlex}
                        >
                            {text ? text : 'skriv noe'}
                        </Text>

                        <FontAwesome
                            onPress={() => getInfo()}
                            style={{ fontSize: 30 }}
                            adjustsFontSizeToFit
                            name="edit"
                            color="#e3eef0"
                        />
                    </View>

                    <View style={{ width: '95%', height: '15%' }}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: '#3F474C',
                                    width: '70%',
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Text style={styles.textFlex}>
                                    Din score er
                                </Text>
                            </View>
                            <View
                                style={{
                                    backgroundColor: '#3F474C',
                                    width: '28%',
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                {/*må fixes med refresh*/}
                                {username.score ? (
                                    <Text style={styles.textFlex}>
                                        {username.score}
                                    </Text>
                                ) : (
                                    <Text style={styles.textFlex}>0</Text>
                                )}
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
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
        backgroundColor: '#FBF4E6',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileHeader: {
        backgroundColor: '#e3eef0',
        flexDirection: 'row',
        width: '100%',
        height: '40%',
        borderBottomEndRadius: 100,
    },
    text: {
        marginBottom: 2,
        color: '#3F474C',
    },
    textFlex: {
        color: 'white',
    },
    shadow: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
    },
    textUsername: {
        fontWeight: 'bold',
    },
})
