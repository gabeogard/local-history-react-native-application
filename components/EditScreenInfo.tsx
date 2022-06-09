import React from 'react'
import { StyleSheet } from 'react-native'

import Colors from '../constants/Colors'
import MonoText  from './StyledText'
import { Text, View } from './Themed'

const EditScreenInfo = () =>
    (
        <View>
            <View style={styles.getStartedContainer}>
                <Text
                    style={styles.getStartedText}
                    lightColor='rgba(0,0,0,0.8)'
                    darkColor='rgba(255,255,255,0.8)'>
                    Gabriel er en helt i koding
                </Text>

                <View
                    style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
                    darkColor='rgba(255,255,255,0.05)'
                    lightColor='rgba(0,0,0,0.05)'>
                    <MonoText>./moradi/ertjukk.js</MonoText>
                </View>

                <Text
                    style={styles.getStartedText}
                    lightColor='rgba(0,0,0,0.8)'
                    darkColor='rgba(255,255,255,0.8)'>
                    Her har vi en app vettu
                </Text>
            </View>

            <View style={styles.helpContainer}>
                <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
                    Please pull dere idioter, lurer på om dere ser appen.
                </Text>
            </View>
        </View>
    )


const styles = StyleSheet.create({
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightContainer: {
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center',
    },
    helpContainer: {
        marginTop: 15,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        textAlign: 'center',
    },
})

export default EditScreenInfo
