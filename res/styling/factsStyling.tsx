import {Dimensions, StyleSheet} from "react-native";

 export const styleButton = StyleSheet.create({
    buttonFlex: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",

    },
    button: {
        backgroundColor: "#e3eef0",
        marginTop: Dimensions.get("window").width >= 400 ? 10: 5,
        borderWidth:2,
        borderRadius:6,
        padding: 3,
        margin: 10,
        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 4,
        width: 80,
        textAlign: "center",
        height: 40,
        overflow: "hidden",
        fontSize: 20,

    }
})


 export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FBF4E6",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        top: "25%",
    },

    title: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: "center",
    },
    factBoxFlex: {
        backgroundColor: "#FFCB2F",
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius:20,
        borderColor: '#000',
        width: "90%",
        height: "160%",
    },
    factText: {
        paddingLeft: "5%",
        paddingRight: "50%",
        fontSize: 20,
        top: "23%"
    },
    buttonsNext: {
        backgroundColor: "#F5BFB6",
        borderWidth:1,
        borderRadius:6,
        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    buttonsBack: {
        backgroundColor: "#F5BFB6",
        borderWidth:1,
        borderRadius:6,
        fontWeight: 'bold',
    },
    introBox: {
        width: Dimensions.get("window").width >= 375 ? 350: 278,
        height: Dimensions.get("window").width >= 375 ? 115: 90,
        top: 40,
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    textOnBackground: {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 24,
        lineHeight: 28,
        paddingLeft: 32,
        paddingBottom: 33,

        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    image: {
        left: "55%",
        top: "50%",
        borderWidth: 2,
        borderRadius: 10,
        width: "40%",
        height: "200%",
        position: "absolute",
    },
    loadingScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FBF4E6"
    },
});