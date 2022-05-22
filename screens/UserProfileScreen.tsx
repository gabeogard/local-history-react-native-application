import {SafeAreaView, Text, View} from "react-native";
import {db} from "../firebase";
import {collection, getDocs} from "firebase/firestore/lite"
import {useEffect, useState} from "react";


export function UserProfileScreen() {

    const [users, setUsers] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    const usersCollectionRef = collection(db, "users")

    useEffect(() => {
        setIsLoading(true)
        const getUsers = async () => {

           try {
               let data = await getDocs((usersCollectionRef as any))
               setUsers(data.docs.map((doc) => ({...doc.data() as any, id: doc.id})) as any)
               console.log(data)
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

                {users.map((users, index) => {
                    return <Text key={index}>name: {(users as any)?.username}</Text>
                })}

                <Text>Du er logget in</Text>
            </View>
        </SafeAreaView>
    );

}