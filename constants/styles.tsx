import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FBF4E6',
    },
    textBox: {
        width: '85%',
        height: '70%',
        backgroundColor: '#FFCB2F',
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    leaderBoardBox: {
        width: '90%',
        height: '80%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#FFCB2F',
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 1,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)',
    },
    modal: {
        backgroundColor: '#FFCB2F',
        width: '85%',
        height: '55%',
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 1,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        flexDirection: 'column',
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
        backgroundColor: '#e3eef0',
        marginTop: Platform.OS === 'web' ? 5 : 4,
        borderWidth: 1,
        borderRadius: 6,
        margin: 5,
    },
    nextBtn: {
        height: '50%',
        width: '30%',
    },
    submitBtn: {
        height: '50%',
        width: '30%',
    },
    answerBtnText: {
        fontSize: 18,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 10,
        padding: 3,
        backgroundColor: '#e3eef0',
        overflow: 'hidden',
    },
    item: {
        flex: 1,
        backgroundColor: '#F2F0DF',
        padding: 6,
        marginVertical: 6,
        marginHorizontal: 6,
        borderRadius: 6,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    scoreText: {
        fontSize: 20,
        width: '50%',
    },
    outsideFlexBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBF4E6',
    },
    leaderBoardTitle: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    leaderBoardBoxHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    refreshBtn: {
        height: '35%',
        width: '100%',
        alignItems: 'flex-end',
    },
})
