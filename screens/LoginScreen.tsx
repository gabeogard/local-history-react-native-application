import {Text, View} from "../components/Themed";
import EditScreenInfo from "../components/EditScreenInfo";
import {StyleSheet, TextInput} from "react-native";
import {useState} from "react";

export function LoginScreen() {
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign in here</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
           <Text>Didrik du er tjukk</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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
});