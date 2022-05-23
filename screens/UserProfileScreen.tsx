import {Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {auth, db} from "../firebase";
import {collection, getDocs, query} from "firebase/firestore/lite"
import {useEffect, useState} from "react";


export function UserProfileScreen() {

    const [username, setUsername] = useState({})

    const [isLoading, setIsLoading] = useState(false)

    const q = query(collection(db, "users"));


    useEffect(() => {
        setIsLoading(true)
        const getUsers = async () => {

           try {
               const querySnapshot = await getDocs(q);
               querySnapshot.forEach((doc) => {
                   // doc.data() is never undefined for query doc snapshots
                   if (doc.id == auth.currentUser?.uid){
                       setUsername(doc.data() as any)
                       console.log(doc.id, " => ", doc.data());
                   }
               });

               setIsLoading(false)

           } catch (error){
               console.log(error)
           }
        }

        getUsers()

    }, [])

    if (isLoading){
        return (
            <View style={styles.loadingScreen}><Text>Lasting...</Text></View>
        )
    }

    return (

        <View style={styles.container}>
            <View style={styles.profileHeader}>

                <View style={{justifyContent: "flex-end"}}>
                <Image style={{width: 150, height: 150, tintColor: "#3F474C" }}
                       source={require("../res/images/profile/icon-account.png")}/>
                </View>

                <View style={{justifyContent: "center"}}>
                    <View style={{alignItems: "center"}}>
                    <Text style={{justifyContent: "center"}}>Info: </Text>
                    </View>
                    <View style={{borderTopWidth: 1, marginTop: 5, marginBottom: 5}}></View>
                    <Text>{auth.currentUser?.email}</Text>
                    <Text>Bruker: {Object.values(username)}</Text>
                </View>

            </View>
                <View style={{flex: 1}} >
                <Text style={{top: "20%"}}>Du er logget på, brukerN: {Object.values(username)}</Text>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    loadingScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FBF4E6"
    },
    container: {
        backgroundColor: "#FBF4E6",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    profileHeader: {
        backgroundColor: "#8DC6C2",
        flexDirection: "row",
        width: "100%",
        height: "40%",
        borderBottomEndRadius: 100,

    }
})