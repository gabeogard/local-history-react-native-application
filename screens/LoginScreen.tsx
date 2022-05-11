import {Text, View} from "../components/Themed";
import EditScreenInfo from "../components/EditScreenInfo";
import {
    StyleSheet,
    TextInput,
    Image,
    ImageRequireSource,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    Platform
} from "react-native";
import {useState} from "react";


export function LoginScreen() {
        const [userName, setUserName] = useState("");
        const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Image style={styles.image}  source={require("../res/images/landing-picture.png")} />
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
        backgroundColor: '#FBF4E6',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        marginTop: Platform.OS === "web" ? 0 : 8,
        height: Platform.OS === "web" ? 115 :  89,
        width: Platform.OS === "web" ? 350 : 278,
    },
    inputView: {
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
    },
    loginBtn: {
        backgroundColor: "#F5BFB6",
        marginTop: Platform.OS === "web" ? 5 : 4,
        borderWidth:1,
        borderRadius:6,
    },
});