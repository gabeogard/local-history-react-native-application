import React from "react";
import {
    Button, Dimensions,
    Image,
    ImageBackground,
    Platform, Pressable,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {facts} from "../res/quiz/facts.json";
import {useState} from "react";


export function FactsScreen({navigation}:{navigation: any}){


    const [curFact, setFact] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showHomeButton, setShowHomeButton] = useState(false)
    const [showBackButton, setBackButton] = useState(false);



    const renderFacts = () => {
        return (
            <View style={styles.container}>
                <View style={styles.factBox}>
                    <Text style={styles.title}>{curFact+1}</Text>
                    <Text style={styles.title}>{facts[curFact]?.Title}</Text>
                    <Text style={styles.factText}>{facts[curFact]?.Text}</Text>
                    <Image source={require("../res/images/sun.png")} />
                </View>
            </View>


        )
    }

    /*
    * <Image source={require(facts[curFact]?.Image)}></Image>
    * */

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
                <Text style={styleButton.button}>Neste</Text>
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
                <Text style={styleButton.button}>Tilbake</Text>
            </TouchableOpacity>
        )
    }


    const renderHomeButton = () => {
        if (showHomeButton){
            return(
                <TouchableOpacity onPress={() => navigation.navigate("TabOne")}>
                        <Text style={styleButton.button}>Hjem</Text>
                </TouchableOpacity>
            )
        }
    }

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <ImageBackground style={styles.introBox} source={require("../res/images/landing-picture.png")}>
                    <Text style={styles.textOnBackground}>Byåa Kultursti</Text>
                </ImageBackground>
                {renderFacts()}
                <View style={styleButton.buttonFlex}>
                {renderBackButton()}
                {renderNextButton()}
                {renderHomeButton()}
                </View>
            </View>
        </SafeAreaView>
    )
}

const styleButton = StyleSheet.create({
    buttonFlex: {

        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        top: -30
},
button: {
    backgroundColor: "#F5BFB6",
        marginTop: Dimensions.get("window").width >= 400 ? 20: 5,
        //marginTop: 5,
        borderWidth:1,
        width: 55,
        height: 30,
        borderRadius:6,
        padding: 3,
        margin: 10,
        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 4,
        textAlign: "center",

}
})


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
        width: 400,
        height: 400,
        top: 120,
    },
    factText: {
        fontSize: 15,
        borderColor:'black',
        fontWeight:'normal',
        paddingBottom:'10%',
        paddingLeft:'10%',
        paddingTop: '5%',
        paddingRight:'40%',

    },
    buttonsNext: {
        backgroundColor: "#F5BFB6",
        //marginTop: 5,
        borderWidth:1,
        borderRadius:6,
        padding: 3,

        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    buttonsHome: {
        backgroundColor: "#F5BFB6",
        //marginTop: Platform.OS === "web" ? 5 : 4,
        borderWidth:1,
        borderRadius:6,
        fontWeight: 'bold',
    },
    buttonsBack: {
        backgroundColor: "#F5BFB6",
        //marginTop: Platform.OS === "web" ? 5 : 4,
        borderWidth:1,
        borderRadius:6,
        fontWeight: 'bold',
    },
    introBox: {
        //position: "absolute",
        width: 278,
        height: 90,
        top: 30,
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
