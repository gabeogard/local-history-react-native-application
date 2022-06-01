import * as React from 'react';
import MapView, { Marker} from 'react-native-maps';
import {StyleSheet, View, Dimensions, Image} from 'react-native';
import {markers} from "../res/markers/markerPosition"
export function MapScreen(this: any, {navigation}:{navigation: any}) {


    const mapView = React.createRef();
    const animateMap = () => {
        // @ts-ignore
        mapView.current.getCamera().then((camera) => {
            {markers.map((marker) => {
            camera.zoom += 0.2;
            camera.center = {
                latitude: marker.lat ,
                longitude: marker.lng
            }
            })}
            // @ts-ignore
            mapView.current.animateCamera(camera)

            });
        }


    return (
        <View style={styles.container}>
            <MapView provider={ MapView.PROVIDER_GOOGLE }
                     style={ styles.map }
                     ref={mapView}
                     showsUserLocation
                     customMapStyle={customMap}
                     initialRegion={{
                latitude: 59.853529900471955,
                longitude: 11.108874047272867,
                latitudeDelta: 0.0022,
                longitudeDelta: 0.0231,

                     }}

            >

                {markers.map(( marker ) => {
                    return (
                        <Marker key={marker.id}

                                coordinate={{latitude: marker.lat, longitude: marker.lng, }}
                                title={marker.Title}
                                description={marker.Text}
                                onPress={animateMap}
                                >
                        <Image source={marker.mapImg}
                               style={styles.marker}
                               resizeMode={"contain"} />

                        </Marker>
                    )
                })}


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

    marker: {
        height: 60,
        width: 60,
        backgroundColor: "#ffff",
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#000"
    }



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
