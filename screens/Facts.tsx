import {Image, StyleSheet, Text, View} from "react-native";

export function FactsScreen(){

    return(<View style={styles.container}>
        <View style={styles.factBox}>
            <Text>{fact.title}</Text>
            <Text>{fact.text}</Text>
            <Image source={require('../res/images/ekorn.png')} style={{height: 50, width: 50, marginTop: 15}}/>
        </View>
        </View>
    )




}

const fact = {title:"Silkesagen", text:"1750 kom silkesagen, de tynnere bladene ga 25% mindre svinn enn de eldre type sagene og sagingen gikk raskere", image:"./res/images/ekorn.png"};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A1A1A1FF'
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
    factBox: {
        alignItems: "center",
        width: '70%',
        height: '30%',
        backgroundColor: "#FFCB2F",
        borderRadius: '20%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#000'
    },

});
