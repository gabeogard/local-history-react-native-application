import {Image, ImageBackground, StyleSheet, View} from "react-native";
import * as React from "react";

export function HeaderLogo() {

   return (

        <View style={styles.container}>
            <ImageBackground
                style={StyleSheet.absoluteFillObject}
                source={require("../res/images/header.png")}
            />

            <View style={styles.headerContainer}>

                <View style={styles.emptyView}></View>

                <View style={styles.centerView}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.logoCircle} source={require("../res/images/logo-circle.png")}/>
                        <Image style={styles.municipalityLogo} source={require("../res/images/kommune-logo.png")}/>
                    </View>
                </View>


                <View style={styles.rightContainer}>
                    <Image style={styles.sun} source={require("../res/images/sun.png")}/>
                </View>


            </View>

        </View>

    )

/*
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
    );*/
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#000000",
        borderBottomWidth: 1,

        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "100%"
    },
    emptyView: {
        height: "100%",
        width: "33.3%"
    },
    centerView: {
        height: "100%",
        width: "33.3%"
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        top: "67%",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    logoCircle: {
        width: "80%",
        height: "120%",
        //make circle more round
        borderRadius: 100
    },
    municipalityLogo: {
        alignSelf: "center",
        width: "60%",
        height: "35%",
        bottom: "80%"
    },
    rightContainer: {
        height: "100%",
        width: "33.3%",
        alignItems: "flex-start",
        justifyContent: "flex-end"
    },
    sun: {
        height: "50%",
        width: "40%"
    }
})


/*
const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FBF4E6",
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
            width: 90,
            height: 80,
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
)*/
