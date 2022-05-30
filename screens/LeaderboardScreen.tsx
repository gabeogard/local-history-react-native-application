import {FlatList, SafeAreaView, Text, View} from "react-native";
import {styles} from "../constants/styles";
import {useEffect, useState} from "react";
import {collection, getDocs, query, where, orderBy} from "firebase/firestore/lite";
import {db} from "../firebase";


export const LeaderboardScreen = () => {
    const [allPoints, setAllPoints] = useState<any[]>([])

    const usersRef = collection(db, "users")
    const q = query(usersRef, where('score', '>', 0), orderBy("score", "desc"))
    const fetchAllPoints = async () =>
        (await getDocs(q)).docs.map(value => value.data())

    useEffect(() => {
        (async () => {
            setAllPoints(await fetchAllPoints())
        })();
    }, [])

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
                <Text style={styles.leaderBoardTitle}>Poengtavle</Text>
                <FlatList
                    data={allPoints}
                    renderItem={renderPointItem}
                    keyExtractor={item => item.username}
                            />
            </View>
        </SafeAreaView>
    );
}