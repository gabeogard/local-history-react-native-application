import React from 'react'
import {
    StyleSheet,
    Image,
    Pressable,
    ImageBackground,
    View,
    Text,
} from 'react-native'
import { useUserContext } from '../functions/UserContext'

const NavigationAuth = ({
    navigation,
    route,
    routeTwo,
    text,
    textTwo,
}: any) => (
    <>
        <Pressable
            style={[styles.Pressable, styles.shadow]}
            onPress={() => navigation.navigate(route)}
        >
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.button}>
                {text}
            </Text>
        </Pressable>

        <Pressable
            style={[styles.Pressable, styles.shadow]}
            onPress={() => navigation.navigate(routeTwo)}
        >
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.button}>
                {textTwo}
            </Text>
        </Pressable>
    </>
)

const Home = ({ navigation }: { navigation: any }) => {
    const { user } = useUserContext()

    return (
        <View style={styles.container}>
            <View style={styles.viewContainer}>
                <View style={[styles.imageContainer, styles.shadow]}>
                    <ImageBackground
                        source={require('../res/images/landing-picture.png')}
                        style={[
                            StyleSheet.absoluteFillObject,
                            styles.imageTextFlex,
                        ]}
                        imageStyle={styles.image}
                    >
                        <View style={styles.introTextContainer}>
                            <Text
                                adjustsFontSizeToFit
                                numberOfLines={1}
                                style={[styles.introText, styles.shadow]}
                            >
                                Byåa Kultursti
                            </Text>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.cloudContainer}>
                    <Image
                        resizeMode={'stretch'}
                        style={styles.cloud}
                        source={require('../res/images/cloud.png')}
                    />

                    <Image
                        resizeMode={'stretch'}
                        style={styles.cloud}
                        source={require('../res/images/cloud.png')}
                    />
                </View>

                <View style={[styles.textContainer, styles.shadow]}>
                    <Text
                        numberOfLines={7}
                        adjustsFontSizeToFit
                        style={[styles.text, styles.shadow]}
                    >
                        Velkommen til Byåa Kultursti, her kan du samle poeng ved
                        å svare på spørsmål om Byåa og konkurrere med vennene
                        dine. Er du den beste i klassen din?
                    </Text>
                </View>

                <View style={styles.buttonContainer}>
                    <Pressable
                        style={[styles.Pressable, styles.shadow]}
                        onPress={() => navigation.navigate('TabTwo')}
                    >
                        <Text
                            numberOfLines={1}
                            adjustsFontSizeToFit
                            style={styles.button}
                        >
                            Spill som gjest
                        </Text>
                    </Pressable>

                    {(user as any)?.email ? (
                        <NavigationAuth
                            navigation={navigation}
                            route={'fakta'}
                            text={'Gå til fakta'}
                            routeTwo={'userProfile'}
                            textTwo={'Profile'}
                        />
                    ) : (
                        <NavigationAuth
                            navigation={navigation}
                            route={'Third'}
                            text={'Logg inn'}
                            routeTwo={'createAccount'}
                            textTwo={'Registrer'}
                        />
                    )}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBF4E6',
    },
    viewContainer: {
        width: '90%',
        height: '81%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    imageContainer: {
        width: '100%',
        height: '20%',
    },
    image: {
        borderRadius: 10,
        borderWidth: 1,
    },
    imageTextFlex: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    introTextContainer: {
        width: '50%',
        bottom: '16%',
        right: '6%',
    },
    introText: {
        fontWeight: 'bold',
        fontSize: 27,
    },
    cloudContainer: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: '4%',
        zIndex: 1,
    },
    cloud: {
        width: '33%',
        height: '100%',
    },
    textContainer: {
        backgroundColor: '#FFCB2F',
        width: '100%',
        height: '40%',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
    },
    text: {
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 50,
        padding: 12,
    },
    buttonContainer: {
        height: '31%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: '1%',
    },
    Pressable: {
        width: '100%',
        height: '25%',
        justifyContent: 'center',
    },
    button: {
        textAlign: 'center',
        fontSize: 30,
        borderWidth: 1,
        borderRadius: 10,
        padding: 3,
        backgroundColor: '#e3eef0',
        overflow: 'hidden',
    },
    shadow: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.68,

        elevation: 5,
    },
})

export default Home
