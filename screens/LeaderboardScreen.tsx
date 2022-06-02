import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../constants/styles'
import { useEffect, useState } from 'react'
import {
    collection,
    getDocs,
    query,
    where,
    orderBy,
} from 'firebase/firestore/lite'
import { db } from '../firebase'
import { FontAwesome } from '@expo/vector-icons'

export const LeaderboardScreen = () => {
    const [allPoints, setAllPoints] = useState<any[]>([])
    const [refresh, newRefresh] = useState(0)

    const usersRef = collection(db, 'users')
    const q = query(usersRef, where('score', '>', 0), orderBy('score', 'desc'))
    const fetchAllPoints = async () =>
        (await getDocs(q)).docs.map((value) => value.data())

    useEffect(() => {
        ;(async () => {
            setAllPoints(await fetchAllPoints())
        })()
    }, [refresh])

    const Item = ({ title, score }: { title: string; score: any }) => (
        <View style={styles.item}>
            <Text style={styles.scoreText}>{title}</Text>
            <Text style={styles.scoreText}>Score: {score}</Text>
        </View>
    )

    const renderPointItem = ({ item }: { item: any }) => (
        <Item title={item.username} score={item.score} />
    )
    return (
        <View style={styles.outsideFlexBox}>
            <View style={styles.leaderBoardBox}>
                <View style={{ height: '100%', width: '80%' }}>
                    <View
                        style={{
                            height: '20%',
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <View
                            style={{
                                width: '50%',
                                height: '40%',
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                numberOfLines={1}
                                adjustsFontSizeToFit
                                style={styles.leaderBoardTitle}
                            >
                                Poengtavle
                            </Text>
                        </View>

                        <TouchableOpacity
                            style={styles.refreshBtn}
                            onPress={() => newRefresh(refresh + 1)}
                        >
                            <FontAwesome
                                name="refresh"
                                size={24}
                                color="#28A5D9FF"
                            />
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            height: '80%',
                            width: '100%',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            borderWidth: 1,
                            borderBottomWidth: 0,
                            backgroundColor: 'white',
                        }}
                    >
                        <FlatList
                            style={{ flex: 1 }}
                            data={allPoints}
                            renderItem={renderPointItem}
                            keyExtractor={(item) => item.username}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}
