import {SafeAreaView, Text, View} from "react-native";
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
            <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff"}}><Text>Loading...</Text></View>
        )
    }

    return (

        <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}} >
            <View style={{flex: 1}} >
                <Text style={{top: "20%"}}>Du er logget på, brukerN: {Object.values(username)}</Text>
            </View>
        </SafeAreaView>
    );

}