import {TextInput} from "react-native";
import React from "react";

export const TextInputCustom = (props: any) => {
    const {value, onChange, name, secureTextEntry} = props;

    return (
        <TextInput style={{
            borderRadius: 10,
            backgroundColor: "#fff",
            borderWidth: 1,
            overflow: 'hidden',
            marginTop: "2%",
            padding: "1%",
            top: "40%",
            zIndex: 1
        }}
           placeholder={name}
           onChangeText={text => onChange(text)}
           value={value}
           returnKeyType={"done"}
           autoCapitalize="none"
           secureTextEntry={secureTextEntry}
        />
    );
}

