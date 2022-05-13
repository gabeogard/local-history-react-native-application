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
import {ColorSchemeName, Image, SafeAreaView, View} from 'react-native';
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



