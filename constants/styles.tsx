import {Platform, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FBF4E6",
    },
    textBox: {
        width: 350,
        height: 450,
        resizeMode: "cover",
        backgroundColor: "#FFCB2F",
        borderRadius: 10,
        borderColor: "#000000",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },leaderBoardBox: {
        width: 350,
        height: 450,
        resizeMode: "cover",
        backgroundColor: "#FFCB2F",
        borderRadius: 10,
        borderColor: "#000000",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 4,
        marginTop: 55
    },
    modal: {
        width: 350,
        height: 600,
        marginTop: 100,
        resizeMode: "cover",
        backgroundColor: "#FFCB2F",
        borderRadius: 10,
        borderColor: "#000000",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        alignContent: "center",
        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 4,
        flexDirection: "column"
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
    answerBtn: {
        backgroundColor: "#F5BFB6",
        marginTop: Platform.OS === "web" ? 5 : 4,
        borderWidth:1,
        borderRadius:6,
        margin: 5,
    },
    nextBtn: {
        backgroundColor: "#9d6d65",
        marginTop: Platform.OS === "web" ? 5 : 4,
        borderWidth:1,
        borderRadius:6,
        margin: 5,
    },
    submitBtn: {
        backgroundColor: "#54a400",
        marginTop: Platform.OS === "web" ? 5 : 4,
        borderWidth:1,
        borderRadius:6,
        margin: 5,
    },
    answerBtnText: {
        fontSize: 20
    },
    item: {
        backgroundColor: '#F5BFB6',
        padding: 20,
        marginVertical: 2,
        marginHorizontal: 6,
        width: 300,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    scoreText:{
        fontSize: 20
    },
    outsideFlexBox:{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        alignItems: "center"
    },
    leaderBoardTitle:{
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 5
    },
    leaderBoardBoxHeader:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    refreshBtn: {
        alignSelf: "flex-end"
    }
});
