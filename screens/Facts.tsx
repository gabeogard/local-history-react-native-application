import React, {useEffect} from "react";
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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useState} from "react";
import {auth, db, storage} from "../firebase";
import {ref, listAll, getDownloadURL} from "firebase/storage"
import * as url from "url";
import {collection, getDocs, query} from "firebase/firestore/lite";
import flatten = StyleSheet.flatten;


export function FactsScreen({navigation}:{navigation: any}){


    const [curFact, setFact] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showHomeButton, setShowHomeButton] = useState(false)
    const [showBackButton, setBackButton] = useState(false);



    const [username, setUsername] = useState([])

    const [isLoading, setLoading] = useState(false)


    useEffect(() => {

        setLoading(true)

        const getUsers = async () => {

            try {
                const q = query(collection(db, "facts"));
                const querySnapshot = await getDocs(q);
                const item: any = []
                querySnapshot.forEach((doc) => {
                    item.push(doc.data())
                    setUsername(item)
                });

                setLoading(false)

            } catch (error){
                console.log(error)
            }
        }

        getUsers()

    }, [])

    if (isLoading){
        return (
            <View style={styles.loadingScreen}><Text>Laster...</Text></View>
        )
    }


    const renderFacts = () => {

        console.log(facts + " facts")

        console.log(username + " username")

        return (
            <View style={{flex: 1}}>

                <View style={{width: "100%", height: "20%" ,backgroundColor: "#FFCB2F", justifyContent: "center", alignItems: "center", borderBottomColor: 'black',
                    borderBottomWidth: 2}}>
                    <Text style={{fontSize: 30}}>{[curFact+1]}</Text>
                    <Text style={{fontSize: 50}}>{(username[curFact] as any)?.title}</Text>
                </View>

                <View style={{flexDirection: "row", height: "80%", width: "100%", justifyContent: "space-between", backgroundColor: "#FFCB2F"}}>

                    <View style={{width: "60%", height: "100%", justifyContent: "center" }}>
                        <Text numberOfLines={20} adjustsFontSizeToFit style={{fontSize: 80, padding: 10}}>{(username[curFact] as any)?.text}</Text>
                    </View>

                    <View  style={{backgroundColor: "#FFCB2F", width: "40%", height: "100%", justifyContent: "center", alignItems: "center", zIndex: 1}}>
                        <View style={{width: "100%", height: "50%", justifyContent: "center"}}>
                        <Image style={{width: "99%", height: "100%", borderWidth:1, borderRadius:6,   }} source={{uri: (username[curFact] as any)?.image}}/>
                        </View>
                    </View>

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
                <Text numberOfLines={1} adjustsFontSizeToFit style={styleButton.button}>Neste</Text>
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
                <Text numberOfLines={1} adjustsFontSizeToFit style={styleButton.button}>Tilbake</Text>
            </TouchableOpacity>
        )
    }

    return(

        <View style={{flex: 1, backgroundColor: "#FBF4E6", justifyContent: "center", alignItems: "center"}}>

            <View style={{width: "100%", height: "80%"}}>

                {renderFacts()}

                <View style={{width: "100%", height: "20%", backgroundColor: "#FFCB2F", alignItems: "center"}}>

                    <View style={{width: "70%", height: "100%", flexDirection: "row", justifyContent:"space-evenly"}}>
                    <View>
                        {renderBackButton()}
                    </View>

                    <View>
                        {renderNextButton()}
                    </View>
                    </View>
                </View>


            </View>

        </View>

        /*
        <SafeAreaView style={{flex: 1}}>
            {renderFacts()}
            <View style={styleButton.buttonFlex}>
                {renderBackButton()}
                {renderNextButton()}
            </View>
        </SafeAreaView>*/
    )
}

const styleButton = StyleSheet.create({
    buttonFlex: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",

    },
    button: {
        backgroundColor: "#F5BFB6",
        marginTop: Dimensions.get("window").width >= 400 ? 10: 5,
        borderWidth:1,
        borderRadius:6,
        padding: 3,
        margin: 10,
        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 4,
        width: 80,
        textAlign: "center",
        height: 40,
        overflow: "hidden",
        fontSize: 40,

    }
})


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FBF4E6",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        top: "25%",
    },

    title: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: "center",
    },
    factBoxFlex: {
        backgroundColor: "#FFCB2F",
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius:20,
        borderColor: '#000',
        width: "90%",
        height: "160%",


    },
    factText: {
        paddingLeft: "5%",
        paddingRight: "50%",
        fontSize:20,
        top: "23%"


    },
    buttonsNext: {
        backgroundColor: "#F5BFB6",
        //marginTop: 5,
        borderWidth:1,
        borderRadius:6,

        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    buttonsBack: {
        backgroundColor: "#F5BFB6",
        //marginTop: Platform.OS === "web" ? 5 : 4,
        borderWidth:1,
        borderRadius:6,
        fontWeight: 'bold',
    },
    introBox: {
        width: Dimensions.get("window").width >= 375 ? 350: 278,
        height: Dimensions.get("window").width >= 375 ? 115: 90,
        top: 40,
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
    image: {
        left: "55%",
        top: "50%",
        borderWidth: 2,
        borderRadius: 10,
        width: "40%",
        height: "200%",
        position: "absolute",
    },
    loadingScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FBF4E6"
    },





});