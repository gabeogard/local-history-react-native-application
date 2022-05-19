import {Image, ImageBackground, StyleSheet, View} from "react-native";
import * as React from "react";

export function HeaderLogo() {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={StyleSheet.absoluteFillObject}

                source={require("../res/images/header.png")}
                imageStyle={styles.container}
            />
            <Image style={styles.sun} source={require("../res/images/sun.png")}/>

            <View style={styles.circleImageWrapper}>
                <Image style={styles.circle} source={require("../res/images/logo-circle.png")}/>
            </View>

            <Image style={styles.logo} source={require("../res/images/kommune-logo.png")}/>
        </View>
    );
}

const styles = StyleSheet.create({
        container: {
            backgroundColor: "#FBF4E6",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#000000",
            borderBottomWidth: 1,

            shadowColor: "#000000",
            shadowOffset: {width: 0, height: 4},
            shadowOpacity: 0.3,
            shadowRadius: 4,
        },
        backgroundImage: {
            height: 60,

        },
        circleImageWrapper: {
            height: 80,
            width: 90,
            top: 21,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,

            elevation: 11,
        },

        circle: {
            width: "100%",
            height: "100%",
            borderRadius: 100,
        },
        sun: {
            height: 40,
            width: 40,
            top: 40,
            left: 15
        },
        logo: {
            height: 25,
            width: 70,
            zIndex: 1,
            top: -35
        }
    }
)

