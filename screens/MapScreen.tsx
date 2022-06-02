import * as React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet, View, Dimensions, Image } from 'react-native'
import { markers } from '../res/markers/markerPosition'
import { useRef } from 'react'

const MAPVIEW_PROVIDER = 'google'

export const MapScreen = () => {
    const mapView = useRef<MapView | null>(null)

    return (
        <View style={styles.container}>
            <MapView
                provider={MAPVIEW_PROVIDER}
                style={styles.map}
                ref={mapView}
                showsUserLocation
                minZoomLevel={14.5}
                maxZoomLevel={17.5}
                customMapStyle={customMap}
                onPress={(e) => {
                    mapView.current!.animateCamera({
                        zoom: 15,
                        center: {
                            latitude: 59.853529900471955,
                            longitude: 11.108874047272867,
                        },
                    })
                }}
                initialRegion={{
                    latitude: 59.853529900471955,
                    longitude: 11.108874047272867,
                    latitudeDelta: 0.0022,
                    longitudeDelta: 0.0231,
                }}
            >
                {markers.map((marker, key) => (
                    <Marker
                        key={marker?.id || key}
                        coordinate={marker.coordinate}
                        title={marker.Title}
                        description={marker.Text}
                        stopPropagation={true}
                        onPress={(e) => {
                            mapView.current!.animateCamera({
                                zoom: 17,
                                center: {
                                    latitude: e.nativeEvent.coordinate.latitude,
                                    longitude:
                                        e.nativeEvent.coordinate.longitude,
                                },
                            })
                        }}
                    >
                        <Image
                            source={marker.mapImg}
                            style={styles.marker}
                            resizeMode={'contain'}
                        />
                    </Marker>
                ))}
            </MapView>
        </View>
    )
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
        backgroundColor: '#ffff',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#000',
    },
})

const customMap = [
    {
        featureType: 'all',
        elementType: 'labels',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'administrative',
        elementType: 'all',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'administrative',
        elementType: 'labels',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [
            {
                visibility: 'on',
            },
        ],
    },
    {
        featureType: 'landscape',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#abce83',
            },
        ],
    },
    {
        featureType: 'landscape',
        elementType: 'labels',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'poi',
        elementType: 'all',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'road',
        elementType: 'geometry.fill',
        stylers: [
            {
                visibility: 'simplified',
            },
        ],
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#5B5B3F',
            },
        ],
    },
    {
        featureType: 'road',
        elementType: 'labels.text.stroke',
        stylers: [
            {
                color: '#ABCE83',
            },
        ],
    },
    {
        featureType: 'road',
        elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'on',
            },
        ],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
            {
                color: '#EBF4A4',
            },
        ],
    },
    {
        featureType: 'road.arterial',
        elementType: 'all',
        stylers: [
            {
                visibility: 'on',
            },
        ],
    },
    {
        featureType: 'road.local',
        elementType: 'all',
        stylers: [
            {
                visibility: 'on',
            },
        ],
    },
    {
        featureType: 'transit',
        elementType: 'all',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
            {
                visibility: 'on',
            },
            {
                color: '#aee2e0',
            },
        ],
    },
]
