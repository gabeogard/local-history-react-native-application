import React from "react";
import {Button, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {facts} from "../res/quiz/facts.json";
import {useState} from "react";


function Quiz(){


    const [curQuestion, setQuestion] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showHomeButton, setShowHomeButton] = useState(false)

    const renderFacts = () => {
        return (
            <View style={styles.factBox}>
                <View style={styles.title}>
                    <Text>{curQuestion+1}</Text>
                    <Text>{facts.length}</Text>
                </View>
                <Text>{facts[curQuestion]?.Title}</Text>
                <Text>{facts[curQuestion]?.Text}</Text>
            </View>
        )
    }

    const handleNext = () => {
        if (curQuestion === facts.length+1){
            setShowHomeButton(true)

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

    const handleHomeButton = () => {
        if (curQuestion === facts.length+1){
            setShowHomeButton(true)

        }else {
            setQuestion(curQuestion+1)
        }
    }

    const renderHomeButton = () => {
        if (showHomeButton){
            return(
                <TouchableOpacity onPress={handleHomeButton}>
                    <Text style={{color: "red"}}>Back to home!</Text>
                </TouchableOpacity>
            )
        }
    }

    return(
        <SafeAreaView style={{flex: 1}}>
            <StatusBar barStyle="light-content" backgroundColor={"red"} />
            <View style={styles.container}>
                {renderFacts()}
                {renderNextButton()}
                {renderHomeButton()}
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
