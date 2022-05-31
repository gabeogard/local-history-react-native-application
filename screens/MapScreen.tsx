import * as React from 'react';
import MapView, {Callout, Marker} from 'react-native-maps';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';


export function MapScreen({navigation}:{navigation: any}) {


    return (
        <View style={styles.container}>
            <MapView provider={ MapView.PROVIDER_GOOGLE }
                     style={ styles.map }
                     customMapStyle={customMap}
                     initialRegion={{
                latitude: 59.853529900471955,
                longitude: 11.108874047272867,
                latitudeDelta: 0.0022,
                longitudeDelta: 0.0231,

                     }}

            >
                <Marker
                    title={"Vannsag"}
                    description={"Vannsag er en vanndrevet sag med et rett sagblad som beveger seg rett opp og ned."}
                    coordinate={{
                    latitude: 59.85327892882451,
                    longitude: 11.102734024705288,

                }}
                >

                    <Image source={require("../res/images/mill2.png")} style={{height: 50, width: 50}}></Image>
                    

                </Marker>

                <Marker
                    title={"Silkesagen"}
                    description={"1750 kom silkesagen, de tynnere bladene ga 25% mindre svinn enn de eldre type sagene og sagingen gikk raskere"}
                    coordinate={{
                    latitude: 59.85421106285126,
                    longitude: 11.106485318519187,

                }}
                >
                    <Image source={require("../res/images/saw.png")} style={{height: 60, width: 60}}></Image>


                </Marker>


                <Marker
                    title={"Kulturminner"}
                    description={"Eneste som er freda er en huleveg som ligger nær Nedre Rælingsvei og går ned i en skråning ned mot Byåa. " +
                        "De andre seks kulturminnene er sagruiner eller spor etter kvernhus/møller og andre funn som kan knyttes til disse." +
                        " Disse er ikke fredet pga de er vanskelige å datere."}
                    coordinate={{
                    latitude: 59.85438764262851,
                    longitude: 11.110847939022399,

                }}
                >
                    <Image source={require("../res/images/wall.png")} style={{height: 50, width: 50}}></Image>

                </Marker>

                <Marker
                    title={"Kvernhus"}
                    description={"Flere kvernhus er avmerket på kart og nevnt i skriftlige kilder. De fleste gårder hadde sine egne vassdrevne kverner hvor man malte korn til eget bruk." +
                        " Kvernene  bestod av to kvernsteiner montert i en benk. Vanndreven og hånddreven kvern hadde forskjellige størrelser og håndkverna var mindre." +
                        " Det ble registrert to kvernhus i 2019."}
                    coordinate={{
                    latitude: 59.85093407140722,
                    longitude: 11.100426773155032,

                }}
                >
                    <Image source={require("../res/images/mill.png")} style={{height: 50, width: 50}}></Image>


                </Marker>

                <Marker
                    title={"Sagbruk"}
                    description={"Det er registrert 4 sagbruk i Byåa som alle er regnet å ha eksistert siden tidlig 1600 tallet."}
                    coordinate={{
                    latitude: 59.85219152561764,
                    longitude: 11.116345074777074,

                }}
                >
                    <Image source={require("../res/images/Log.png")} style={{height: 40, width: 40}}></Image>


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

const customMap = [
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#abce83"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#5B5B3F"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ABCE83"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#EBF4A4"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#aee2e0"
            }
        ]
    }
]
