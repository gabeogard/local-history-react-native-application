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


export function FactsScreen({navigation}:{navigation: any}){


    const [curFact, setFact] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showHomeButton, setShowHomeButton] = useState(false)
    const [showBackButton, setBackButton] = useState(false);

    const [imageList, setImageList] = useState([])


    const [username, setUsername] = useState([])

    const [isLoading, setIsLoading] = useState(false)



    useEffect(() => {


        const getUsers = async () => {

            try {
                const q = query(collection(db, "factTest"));
                const querySnapshot = await getDocs(q);
                const item: any = []
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    item.push(doc.data())
                        setUsername(item)
                });


            } catch (error){
                console.log(error)
            }
        }

        getUsers()

    }, [])




    const renderFacts = () => {

        console.log(facts + " facts")

        console.log(username + " username")

            return (
                    <View style={styles.factBox}>

                    <View>
                    <Text style={styles.title}>{curFact+1}</Text>
                    <Text style={styles.factText}>{(username[curFact] as any)?.title}</Text>
                    <Text style={styles.factText}>{(username[curFact] as any)?.text}</Text>
                    <Text style={styles.factText}>{(username[curFact] as any)?.image}</Text>
                    </View>

                    </View>

            )



    }

    /*
    <Image source={require(facts[curFact]?.Image)}></Image>

     */

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
                {renderFacts()}
                <View style={styleButton.buttonFlex}>
                    {renderBackButton()}
                    {renderNextButton()}
                </View>
        </SafeAreaView>
    )
}

const styleButton = StyleSheet.create({
    buttonFlex: {

        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        bottom: "12%",
        right: "4%",

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
        width: 70,
        textAlign: "center",
        height: 30,
        fontWeight: "bold",

}
})


const styles = StyleSheet.create({
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
        width: 365,
        height: 520,
        top:"10%",
        left: "5%",
    },
    factText: {
        fontSize: 18,
        borderColor:'black',
        fontWeight:'normal',
        paddingBottom:'15%',
        paddingLeft:'5%',
        paddingRight: '50%',
        paddingTop: '5%',

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
        top: "20%",
        position: "absolute",
        borderWidth: 2,
        borderRadius: 3,
        width: "40%",
        height: "60%",
    },





});
