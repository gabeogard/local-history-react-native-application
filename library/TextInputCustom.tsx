import {StyleSheet, TextInput} from "react-native";
import React from "react";

export const TextInputCustom = (props: any) => {
    const {value, onChange, name, secureTextEntry} = props;

    return (
        <TextInput
           style={styles.input}
           placeholder={name}
           onChangeText={text => onChange(text)}
           value={value}
           returnKeyType={"done"}
           autoCapitalize="none"
           secureTextEntry={secureTextEntry}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 25,
        width: 120,
        borderRadius: 10,
        backgroundColor: "#fff",
        borderWidth: 1,
        overflow: 'hidden',
        marginTop: "2%",
        padding: "1%",
        top: "40%",
        zIndex: 1
    }
})

