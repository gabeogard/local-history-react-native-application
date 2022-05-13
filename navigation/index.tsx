/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {FontAwesome} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName, Image, ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import { AntDesign,Entypo } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import Home from '../screens/Home';
import TabTwoScreen from '../screens/TabTwoScreen';
import {RootStackParamList, RootTabParamList, RootTabScreenProps} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import {LoginScreen} from "../screens/LoginScreen";
import {FactsScreen} from "../screens/Facts";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
      <SafeAreaView style={{flex:1}}>
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }}  />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
      </SafeAreaView>
  );
}

const BottomTab = createBottomTabNavigator();


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FBF4E6",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: '#000000',
        borderBottomWidth: 1,

        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    backgroundImage: {
        height:60,

    },
    circleImageWrapper: {
        height: 80,
        width: 90,
        top: 21,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },

     circle: {
         width: "100%",
         height: "100%",
         borderRadius: 100,
    },
    sun: {
        height: 40,
        width: 40,
        top: 40,
        left: 15
    },
    logo: {
       height: 25,
       width: 70,
       zIndex:1,
       top: -35
    }
}
  )

function LogoTitle() {
    return (
        <View style={styles.container}>
        <ImageBackground
            style={StyleSheet.absoluteFillObject}

            source={require("../res/images/header.png")}
            imageStyle={styles.container}
        />
            <Image style={styles.sun} source={require("../res/images/sun.png")} />

            <View style={styles.circleImageWrapper}>
            <Image style={styles.circle} source={require("../res/images/logo-circle.png")} />
            </View>

            <Image style={styles.logo} source={require("../res/images/kommune-logo.png")} />
        </View>
    );
}

function Title () {
    return (
        <View/>
    )
}

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  // @ts-ignore
    // @ts-ignore
    return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
          headerTitle: () => < Title />,
          headerBackground: () =>  <LogoTitle />,
        tabBarActiveTintColor: Colors["light"].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={Home}
        options={({ navigation }) => ({
            title: "Hjem",
          tabBarIcon: () => <Image source={require('../res/images/homeicon.png')} style={{height:50, width:50, marginBottom: 10}}/>,
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Informasjon',
          tabBarIcon: () => <AntDesign name="infocirlce" size={24} color="black" />,
        }}
      />
        <BottomTab.Screen
            name={"Third" as const}
            component={LoginScreen}
            options={{
                title: 'Logg inn',
                tabBarIcon: () => <Entypo name="login" size={24} color="black" />,
            }}
        />
         <BottomTab.Screen
            name="fakta"
            component={FactsScreen}
            options={{
                title: 'Fakta',
                tabBarIcon: () => <Image source={require('../res/images/factsicon.png')} style={{height:30, width:30, marginBottom: 10}}/>,
            }}
        />
    </BottomTab.Navigator>
  );
}



