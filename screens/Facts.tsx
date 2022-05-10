import {Button, Image, StyleSheet, Text, View} from "react-native";
import {facts} from "../res/quiz/facts.json";
import {useState} from "react";

export function FactsScreen(){

    const [currentIndex, setIndex] = useState(0)

    return(
        <View style={styles.container}>
            <View style={styles.factBox}>
            <Text style={styles.title}>{facts[currentIndex].Title}</Text>
            <Text style={styles.factText}>{facts[currentIndex].Text}</Text>
        </View>
        </View>
    )

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A1A1A1FF'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    factBox: {
        alignItems: "center",
        width: '70%',
        height: '30%',
        backgroundColor: "#FFCB2F",
        borderRadius: '20%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#000'
    },
    factText: {
        width:'80%',
        height: '50%',
        paddingTop: '10%',
        backgroundColor: '#e4e8eb',
        borderRadius: '20%',
        borderStyle: 'solid',
        borderWidth: 2,

    }

});
