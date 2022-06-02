import { Image, ImageBackground, StyleSheet, View } from 'react-native'
import * as React from 'react'

export const HeaderLogo = () => (
    <View style={styles.container}>
        <ImageBackground
            style={StyleSheet.absoluteFillObject}
            source={require('../res/images/header.png')}
        />

        <View style={styles.headerContainer}>
            <View style={styles.emptyView}></View>

            <View style={styles.centerView}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.logoCircle}
                        source={require('../res/images/logo-circle.png')}
                    />
                    <Image
                        style={styles.municipalityLogo}
                        source={require('../res/images/kommune-logo.png')}
                    />
                </View>
            </View>

            <View style={styles.rightContainer}>
                <Image
                    style={styles.sun}
                    source={require('../res/images/sun.png')}
                />
            </View>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000000',
        borderBottomWidth: 1,

        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    emptyView: {
        height: '100%',
        width: '33.3%',
    },
    centerView: {
        height: '100%',
        width: '33.3%',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        top: '67%',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    logoCircle: {
        width: '75%',
        height: '120%',
        //make circle more round
        borderRadius: 100,
    },
    municipalityLogo: {
        alignSelf: 'center',
        width: '60%',
        height: '35%',
        bottom: '80%',
    },
    rightContainer: {
        height: '100%',
        width: '33.3%',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    sun: {
        height: '50%',
        width: '40%',
    },
})
