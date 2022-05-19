import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";

const stylesTab = StyleSheet.create({
        container: {
            backgroundColor: "#FBF4E6",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

        },
        backgroundImage: {
            height: 60,
        },
        shadow: {
            shadowColor: "#000000",
            shadowOffset: {
                width: 0,
                height: 10,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            //for andriod
            elevation: 5
        },
        TabBarBackground: {
            flex: 1,
            width: 600,
            backgroundColor: "#F5BFB6",
            borderTopWidth: 1.3,
        }
    }
)

export function TabBarBackground() {
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        }}>
            <View style={stylesTab.TabBarBackground}></View>
        </View>
    )
}

export function TabBarIconCustom(props: any) {
    return (
        <View style={{alignItems: "center", justifyContent: "center"}}>
            <Image source={props.image} resizeMode="contain"
                   style={{
                       width: props.iconSize ? 40 : 50,
                       height: props.iconSize ? 40 : 50,
                       opacity: props.focused ? 0.4 : 1,
                       marginBottom: props.iconSize ? 9 : 0,
                       top: Dimensions.get("window").width >= 375 ? 0 : 2 ? props.iconSize ? 2 : 0 : 0,
                       marginTop: Dimensions.get("window").width >= 375 ? props.iconSize ? 14 : 11 : 0,
                       //top: props.iconSize ? 2:  0,
                       margin: Dimensions.get("window").width >= 375 ? 0 : 0
                   }}/>
            <Text style={{
                opacity: props.focused ? 0.4 : 1,
                fontSize: 12,
                top: Dimensions.get("window").width >= 375 ? -9 : -10
            }}>{props.text}</Text>
        </View>
    )
}

export const CustomTabBarHomeButton = (props: any) => (
    <TouchableOpacity
        style={{
            top: Dimensions.get("window").width >= 375 ? -30 : -30,
            justifyContent: "center",
            alignItems: "center", ...stylesTab.shadow
        }}
        onPress={props.onPress}
    >
        <View
            style={{
                backgroundColor: "#FBF4E6",
                width: 65,
                height: 65,
                borderRadius: 35,
                borderRightWidth: 1.3,
                borderLeftWidth: 1.3,

            }}>{props.children}</View>
    </TouchableOpacity>
)