import {Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {ReactNativeZoomableView} from "@dudigital/react-native-zoomable-view/dist";


export function MapScreen({navigation}:{navigation: any}) {
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <ReactNativeZoomableView
                    maxZoom={2.5}
                    minZoom={1}
                    zoomStep={0.3}
                    initialZoom={1}
                    bindToBorders={true}
                    pinchToZoomInSensitivity={5}
                    zoomCenteringLevelDistance={5}
                >
               <Image style={styles.map} source={require("../res/images/Map.png")}/>
                </ReactNativeZoomableView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#FBF4E6",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

    },

    map: {
    width: "90%",
    height: "90%",
        aspectRatio: 2,
        resizeMode: "contain",

}


});