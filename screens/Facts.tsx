import React, { useEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { facts } from '../res/quiz/facts.json'
import { useState } from 'react'
import { db } from '../firebase'
import { collection, getDocs, query } from 'firebase/firestore/lite'
import { styleButton, styles } from '../constants/factsStyling'
import { useLoading } from '../hooks/useLoading'

const NextButton = ({ handleNext }: { handleNext: () => void }) => (
    <TouchableOpacity onPress={handleNext}>
        <Text numberOfLines={1} adjustsFontSizeToFit style={styleButton.button}>
            Neste
        </Text>
    </TouchableOpacity>
)

const BackButton = ({ handlePrev }: { handlePrev: () => void }) => (
    <TouchableOpacity onPress={handlePrev}>
        <Text numberOfLines={1} adjustsFontSizeToFit style={styleButton.button}>
            Tilbake
        </Text>
    </TouchableOpacity>
)

export const FactsScreen = ({ navigation }: { navigation: any }) => {
    const [curFact, setFact] = useState(0)
    const [username, setUsername] = useState([])
    const [isLoading, withLoading] = useLoading()

    useEffect(() => {
        withLoading(async () => {
            try {
                const q = query(collection(db, 'facts'))
                const querySnapshot = await getDocs(q)
                const item: any = []
                querySnapshot.forEach((doc) => {
                    item.push(doc.data())
                    setUsername(item)
                })
            } catch (error) {
                console.log(error)
            }
        })
    }, [])

    if (isLoading) {
        return (
            <View style={styles.loadingScreen}>
                <Text>Laster...</Text>
            </View>
        )
    }

    const Facts = () => (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    width: '100%',
                    height: '30%',
                    backgroundColor: '#FFCB2F',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    borderBottomColor: 'black',
                    borderBottomWidth: 2,
                }}
            >
                <Text style={{ fontSize: 30, marginTop: 10 }}>
                    {[curFact + 1]}
                </Text>
                <Text
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    style={{ fontSize: 50 }}
                >
                    {(username[curFact] as any)?.title}
                </Text>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    height: '70%',
                    width: '100%',
                    justifyContent: 'space-between',
                    backgroundColor: '#FFCB2F',
                }}
            >
                <View
                    style={{
                        width: '60%',
                        height: '100%',
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        numberOfLines={20}
                        adjustsFontSizeToFit
                        style={{ fontSize: 15, padding: 10 }}
                    >
                        {(username[curFact] as any)?.text}
                    </Text>
                </View>

                <View
                    style={{
                        backgroundColor: '#FFCB2F',
                        width: '40%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1,
                    }}
                >
                    <View
                        style={{
                            width: '90%',
                            height: '50%',
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            style={{
                                width: undefined,
                                height: undefined,
                                flex: 1,
                                borderWidth: 2,
                                borderRadius: 6,
                            }}
                            resizeMode={'stretch'}
                            source={{
                                uri: (username[curFact] as any)?.image,
                            }}
                        />
                    </View>
                </View>
            </View>
        </View>
    )

    const handleNext = () => {
        if (facts[curFact]?.Title !== 'Kvernhus') {
            setFact(curFact + 1)
        }
    }

    const handlePrev = () => {
        if (facts[curFact]?.Title !== 'Silkesagen') {
            setFact(curFact - 1)
        }
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#FBF4E6',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <View
                style={{
                    width: '90%',
                    height: '81%',
                    borderRadius: 6,
                    borderWidth: 1,
                    borderColor: '#000',
                }}
            >
                <Facts />

                <View
                    style={{
                        width: '100%',
                        height: '20%',
                        backgroundColor: '#FFCB2F',
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={{
                            width: '70%',
                            height: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                        }}
                    >
                        <View>
                            <BackButton handlePrev={handlePrev} />
                        </View>

                        <View>
                            <NextButton handleNext={handleNext} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
