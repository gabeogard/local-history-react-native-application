import {Button, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {facts} from "../res/quiz/facts.json";
import {useState} from "react";


function Quiz(){


    const [curQuestion, setQuestion] = useState(0)


    const renderOptions = () => {
        return (
            <View>
                {facts[curQuestion]?.Text}
            </View>
        )
    }

    const renderQuestions = () => {
        return (
            <View style={styles.factBox}>
                <View style={styles.title}>
                    <text>{curQuestion+1}</text>
                    <Text>{facts.length}</Text>
                </View>
                <Text>{facts[curQuestion]?.Title}</Text>
            </View>
        )
    }

    const handleNext = () => {
        if (curQuestion === facts.length+1){

        }else {
            setQuestion(curQuestion+1)
        }
    }

    const renderNextButton = () => {
        return(
            <TouchableOpacity onPress={handleNext}>
                <Text style={{color: "red"}}>Next</Text>
            </TouchableOpacity>
        )
    }

    return(
        <SafeAreaView style={{flex: 1}}>
            <StatusBar barStyle="light-content" backgroundColor={"red"} />
            <View style={styles.container}>
                {renderQuestions()}
                {renderOptions()}
                {renderNextButton()}
            </View>
        </SafeAreaView>
    )
}

export function FactsScreen(){
    return <Quiz />
}




export function FactsScree2(){


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
