import React from "react";
import {Dimensions, StyleSheet, Text} from "react-native";
import { TextInput } from 'react-native-paper';

export const TextInputCustom = (props: any) => {
    const {value, onChange, label, secureTextEntry} = props;

    return (

        <TextInput
                   //changing also outline size
           label={<Text style={styles.input}>{label}</Text>}
           onChangeText={(text: string) => onChange(text)}
           value={value}
           returnKeyType={"done"}
           autoCapitalize="none"
           secureTextEntry={secureTextEntry}
           underlineColorAndroid="transparent"
           mode="outlined"
           theme={theme}
           maxLength={50}
           numberOfLines={1}
           dense={Dimensions.get("window").width >= 350 ? false : true}
        />

    );
}

const styles = StyleSheet.create({
    input: {
        fontSize: 22,
    }
})

let theme = { colors: {
        placeholder: "#3F474C",
        text: "black", primary: "#888888",
        underlineColor:'transparent',
        background : "white",
    }};

