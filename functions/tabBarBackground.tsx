import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import * as React from 'react'

export const TabBarBackground = () => (
    <View style={stylesTab.TabBarBackground}>
        <Image
            style={{ flex: 1, height: undefined, width: undefined }}
            source={require('../res/images/backgroundtabbar.png')}
            resizeMode={'stretch'}
        />
    </View>
)

export const TabBarIconCustom = (props: any) => (
    <View style={stylesTabIcons(props).TabBarIconCustomContainer}>
        <Image
            source={props.image}
            resizeMode="contain"
            style={stylesTabIcons(props).tabBarIcons}
        />
        <Text adjustsFontSizeToFit style={stylesTabIcons(props).tabBarText}>
            {props.text}
        </Text>
    </View>
)

export const CustomTabBarHomeButton = (props: any) => (
    <TouchableOpacity
        style={[stylesTab.customButtonContainer, stylesTab.shadow]}
        onPress={props.onPress}
    >
        <View style={stylesTab.buttonProps}>{props.children}</View>
    </TouchableOpacity>
)

const stylesTab = StyleSheet.create({
    customButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 30,
    },
    buttonProps: {
        backgroundColor: '#FBF4E6',
        width: 65,
        height: 65,
        borderRadius: 35,
        borderRightWidth: 1.3,
        borderLeftWidth: 1.3,
    },
    shadow: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        //for android
        elevation: 5,
    },
    TabBarBackground: {
        flex: 1,
        width: '100%',
        borderTopWidth: 1.3,
    },
})

const stylesTabIcons = ({ iconSize, focused }: any) =>
    StyleSheet.create({
        TabBarIconCustomContainer: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        tabBarIcons: {
            width: iconSize ? 40 : 50,
            height: iconSize ? 40 : 50,
            opacity: focused ? 0.4 : 1,
            marginBottom: iconSize ? 9 : 0,
            top:
                Dimensions.get('window').width >= 375
                    ? 0
                    : 2
                    ? iconSize
                        ? 2
                        : 0
                    : 0,
            marginTop:
                Dimensions.get('window').width >= 375
                    ? iconSize
                        ? 14
                        : 11
                    : 0,
            margin: Dimensions.get('window').width >= 375 ? 0 : 0,
        },
        tabBarText: {
            opacity: focused ? 0.4 : 1,
            fontSize: 12,
            top: Dimensions.get('window').width >= 375 ? -9 : -10,
        },
    })
