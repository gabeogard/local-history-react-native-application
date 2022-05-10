import {Text, View} from "../components/Themed";
import EditScreenInfo from "../components/EditScreenInfo";
import {StyleSheet, TextInput, Image, ImageRequireSource, SafeAreaView, StatusBar, TouchableOpacity} from "react-native";
import {useState} from "react";


export function LoginScreen() {
        const [userName, setUserName] = useState("");
        const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Image source={require('../res/images/ekorn.png')} style={{height: 150, width: 150, marginTop: 15}}/>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Brukernavn"
                    placeholderTextColor="#003f5c"
                    onChangeText={(username) => setUserName(username)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Passord."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.TextInput}>LOGIN</Text>
            </TouchableOpacity>


        </View>
    );
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
    image: {
        marginBottom: 40,
    },

    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#2c2b2b",
    },
});