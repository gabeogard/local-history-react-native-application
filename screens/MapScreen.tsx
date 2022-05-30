import * as React from 'react';
import MapView, {Callout, Marker} from 'react-native-maps';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';


export function MapScreen({navigation}:{navigation: any}) {

    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                     initialRegion={{
                latitude: 59.85327892882451,
                longitude: 11.102734024705288,
                latitudeDelta: 0.0022,
                longitudeDelta: 0.0231,

                     }}

            >
                <Marker coordinate={{
                    latitude: 59.85327892882451,
                    longitude: 11.102734024705288,

                }}
                >
                    <Image source={require("../res/images/ekorn.png")} style={{height: 35, width: 35}}></Image>
                    
                    <Callout>
                    <Text>Hello</Text>
                    </Callout>
                </Marker>

            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },


});
