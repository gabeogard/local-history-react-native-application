import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {styles} from "../constants/styles";
import {useEffect, useState} from "react";
import {collection, getDocs, query, where, orderBy} from "firebase/firestore/lite";
import {onSnapshot} from "firebase/firestore";
import {db} from "../firebase";
import {FontAwesome} from "@expo/vector-icons";


export const LeaderboardScreen = () => {
    const [allPoints, setAllPoints] = useState<any[]>([])
    const [refresh, newRefresh] = useState(0)

    const usersRef = collection(db, "users")
    const q = query(usersRef, where('score', '>', 0), orderBy("score", "desc"))
    const fetchAllPoints = async () =>
        (await getDocs(q)).docs.map(value => value.data())

    useEffect(() => {
        (async () => {
            setAllPoints(await fetchAllPoints())
        })();
   }, [refresh])

    console.log(allPoints)

    const Item = ({title, score}: {title: string, score: any}) => (
        <View style={styles.item}>
            <Text style={styles.scoreText}>{title}</Text>
            <Text style={styles.scoreText}>Score: {score}</Text>
        </View>
    )

    const renderPointItem = ({item}: {item: any }) => (
        <Item title={item.username} score={item.score}/>
        )
    return(
        <SafeAreaView style={styles.outsideFlexBox}>
            <View style={styles.leaderBoardBox}>
                <View style={styles.leaderBoardBoxHeader}>
                    <Text style={styles.leaderBoardTitle}>Poengtavle</Text>
                    <TouchableOpacity style={styles.refreshBtn} onPress={() => newRefresh(refresh + 1)}>
                        <FontAwesome name="refresh" size={24} color="#28A5D9FF" />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={allPoints}
                    renderItem={renderPointItem}
                    keyExtractor={item => item.username}
                            />
            </View>
        </SafeAreaView>
    );
}