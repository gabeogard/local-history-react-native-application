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
        width: "90%",
        height: "80%",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#FFCB2F",
        borderRadius: 10,
        borderColor: "#000000",
        borderWidth: 1,
        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 4,
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
        backgroundColor: "#e3eef0",
        marginTop: Platform.OS === "web" ? 5 : 4,
        borderWidth:1,
        borderRadius:6,
        margin: 5,
    },
    nextBtn: {
        backgroundColor: "#e3eef0",
        marginTop: Platform.OS === "web" ? 5 : 4,
        borderWidth:1,
        borderRadius:6,
        margin: 5,
        padding: 3
    },
    submitBtn: {
        backgroundColor: "#e3eef0",
        marginTop: Platform.OS === "web" ? 5 : 4,
        borderWidth:1,
        borderRadius:6,
        margin: 5,
    },
    answerBtnText: {
        fontSize: 18,
        color: "#000"
    },
    item: {
        flex: 1,
        backgroundColor: '#F2F0DF',
        padding: 6,
        marginVertical: 6,
        marginHorizontal: 6,
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    scoreText:{
        fontSize: 20
    },
    outsideFlexBox:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FBF4E6"
    },
    leaderBoardTitle:{
        fontSize: 30,
        fontWeight: "bold",
    },
    leaderBoardBoxHeader:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    refreshBtn: {
        height: "35%",
        width: "100%",
        alignItems: "flex-end"

    }
});
