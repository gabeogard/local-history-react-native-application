import {Button, Image, StyleSheet, Text, View} from "react-native";
import {facts} from "../res/quiz/facts.json";
import {useState} from "react";


export function FactsScreen(){


    const [currentFact, setFact] = useState(0);


    return(
        <View style={styles.container}>
            <View style={styles.factBox}>
            <Text style={styles.title}>{facts[currentFact].Title}</Text>
            <Text style={styles.factText}>{facts[currentFact].Text}</Text>
            <Button  title={"Neste"}  color={"#000000"}  onPress={NextFact}/>
        </View>
        </View>
    )

}
function NextFact() {



    return (
        <Text>hei</Text>
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
    },


});
