/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {AntDesign, Entypo} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName, Image, ImageBackground, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import Home from '../screens/Home';
import TabTwoScreen from '../screens/TabTwoScreen';
import {RootStackParamList} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import {LoginScreen} from "../screens/LoginScreen";
import {FactsScreen} from "../screens/Facts";
import {LogoTitle} from "../functions/logoTitle";
import {MapScreen} from "../screens/MapScreen";

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


function Title () {
    return (
        <View/>
    )
}

const stylesTab = StyleSheet.create({
    container: {
      backgroundColor: "#FBF4E6",
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",

    },
    backgroundImage: {
      height: 60,

    }
  }
)

const styles = StyleSheet.create({
        container: {
            backgroundColor: "#FBF4E6",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

        },
        profile: {
            width: 55,
            height: 55,
        }
    }
)


function TabBarLogo (){
    return (
        <View style={stylesTab.container}>
            <ImageBackground
                style={StyleSheet.absoluteFillObject}
                source={require("../res/images/backgroundtabbar.png")}
            />
            <ImageBackground
                style={StyleSheet.absoluteFillObject}
                source={require("../res/images/gress.png")}
                blurRadius={1}
            />
        </View>
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
          headerBackground: () => <LogoTitle />,
          tabBarShowLabel: false,

          //Vi bestemmer alle her
          //tabBarBackground: () => <TabBarLogo />

          //foreløpig
          tabBarStyle: {
              backgroundColor: "#F5BFB6",
              height: 55,
          },

      }}>
        <BottomTab.Screen
            name={"Third" as const}
            component={LoginScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: "center", justifyContent: "center"}}>
                        <Image source={require("../res/images/tabs/profil.png")} resizeMode="contain"
                               style={{
                                   width: 50,
                                   height: 50,
                                   opacity: focused ? 0.4 : 1
                               }} />
                        <Text style={{opacity: focused ? 0.4 : 1, fontSize: 12, top: -10}}>Profile</Text>
                    </View>
                ),
            }}
        />

        <BottomTab.Screen
            name="fakta"
            component={FactsScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: "center", justifyContent: "center"}}>
                        <Image source={require("../res/images/tabs/factsicon.png")} resizeMode="contain"
                               style={{
                                   width: 50,
                                   height: 50,
                                   opacity: focused ? 0.4 : 1
                               }} />
                        <Text style={{opacity: focused ? 0.4 : 1, fontSize: 12, top: -10}}>Fakta</Text>
                    </View>
                ),
            }}
        />

      <BottomTab.Screen
        name="TabOne"
        component={Home}
        options={({ navigation }) => ({
            title: "Hjem",
          tabBarIcon: () => <Image source={require('../res/images/tabs/homeicon.png')} style={{height:50, width:50, marginBottom: 10}}/>,
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
            tabBarIcon: ({focused}) => (
                <View style={{alignItems: "center", justifyContent: "center"}}>
                    <Image source={require("../res/images/tabs/quiz.png")} resizeMode="contain"
                           style={{
                               width: 50,
                               height: 50,
                               opacity: focused ? 0.4 : 1
                           }} />
                    <Text style={{opacity: focused ? 0.4 : 1, fontSize: 12, top: -10}}>Quiz</Text>
                </View>
            ),
        }}
      />

        <BottomTab.Screen
            name="map"
            component={MapScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: "center", justifyContent: "center"}}>
                        <Image source={require("../res/images/tabs/kart.png")} resizeMode="contain"
                               style={{
                                   width: 50,
                                   height: 50,
                                   opacity: focused ? 0.4 : 1
                               }} />
                        <Text style={{opacity: focused ? 0.4 : 1, fontSize: 12, top: -10}}>Profile</Text>
                    </View>
                ),
            }}
        />

    </BottomTab.Navigator>
  );
}



