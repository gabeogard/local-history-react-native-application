import React from "react";
import {
    Button,
    Image,
    ImageBackground,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {facts} from "../res/quiz/facts.json";
import {useState} from "react";


function Facts(){


    const [curFact, setFact] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showHomeButton, setShowHomeButton] = useState(false)
    const [showBackButton, setBackButton] = useState(false);


    const renderFacts = () => {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.introBox} source={require("../res/images/landing-picture.png")}>
                    <Text style={styles.textOnBackground}>Byåa Kultursti</Text>
                </ImageBackground>

                <View style={styles.factBox}>
                        <Text style={styles.title}>{curFact+1}</Text>
                        <Text style={styles.title}>{facts[curFact]?.Title}</Text>
                        <Text style={styles.factText}>{facts[curFact]?.Text}</Text>
                </View>
            </View>

        )
    }

    const handleNext = () => {
        if (facts[curFact]?.Title === "Kvernhus"){
            setShowHomeButton(true)


        }else {
            setFact(curFact+1)
        }
    }


    const renderNextButton = () => {
        return(
            <TouchableOpacity onPress={handleNext}>
                <Text style={styles.buttonsNext}>Next</Text>
            </TouchableOpacity>
        )
    }

    const handlePrev  = () => {
        if (facts[curFact]?.Title === "Silkesagen"){
            setBackButton(true);


        }else {
            setFact(curFact-1)
        }
    }

    const renderBackButton = () => {
        return(
            <TouchableOpacity onPress={handlePrev}>
                <Text style={styles.buttonsBack}>Back</Text>
            </TouchableOpacity>
        )
    }


    const handleHomeButton = () => {
        if (curFact === facts.length+1){
            setShowHomeButton(true)

        }else {

        }
    }

    const renderHomeButton = () => {
        if (showHomeButton){
            return(
                <TouchableOpacity onPress={handleHomeButton}>
                    <Text style={styles.buttonsHome}>Back to home!</Text>
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
                {renderBackButton()}
                {renderHomeButton()}
            </View>
        </SafeAreaView>
    )
}

export function FactsScreen(){
    return <Facts />
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FBF4E6',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
       fontWeight: 'bold',
        fontSize: 30,
    },
    factBox: {
        alignItems: "center",
        backgroundColor: "#FFCB2F",
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius:20,
        borderColor: '#000',
        width:'60%',
        height:'50%',
    },
    factText: {
        paddingTop: '10%',
        fontSize: 15,
        borderColor:'black',
        fontWeight:'normal',
        paddingBottom:'10%',
        paddingLeft:'1%',
        paddingRight: '50%',

    },
    buttonsNext: {
        backgroundColor: "#F5BFB6",
        marginTop: 5,
        borderWidth:1,
        borderRadius:6,
        padding: 3,
        marginBottom: 20,

        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    buttonsHome: {
        backgroundColor: "#F5BFB6",
        marginTop: Platform.OS === "web" ? 5 : 4,
        borderWidth:1,
        borderRadius:6,
        fontWeight: 'bold',
    },
    buttonsBack: {
        backgroundColor: "#F5BFB6",
        marginTop: Platform.OS === "web" ? 5 : 4,
        borderWidth:1,
        borderRadius:6,
        fontWeight: 'bold',
    },
    introBox: {
        //position: "absolute",
        width: 278,
        height: 90,
        top: -40,
        display: "flex",
        alignContent: "center",
        justifyContent: "center",

        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    textOnBackground: {
        //fontFamily: 'Roboto-Regular',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 24,
        lineHeight: 28,
        paddingLeft: 32,
        paddingBottom: 33,

        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },




});
