/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName, Dimensions, Image, StyleSheet, View} from 'react-native';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import Home from '../screens/Home';
import TabTwoScreen from '../screens/TabTwoScreen';
import LinkingConfiguration from './LinkingConfiguration';
import {LoginScreen} from "../screens/LoginScreen";
import {FactsScreen} from "../screens/Facts";
import {HeaderLogo} from "../functions/HeaderLogo";
import {MapScreen} from "../screens/MapScreen";
import {CreateAccount} from "../screens/CreateAccount"
import {CustomTabBarHomeButton, TabBarBackground, TabBarIconCustom} from "../functions/tabBarBackground";
import {UserProfileScreen} from "../screens/UserProfileScreen";

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
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function RootNavigator() {
  return (
        <Stack.Navigator>
          <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }}  />
          <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="Modal" component={ModalScreen} />
          </Stack.Group>
        </Stack.Navigator>
  );
}

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false,}}/>
            <Stack.Screen name="CreateAccrount" component={CreateAccount} options={{
                headerTitle: () => false,
                headerStyle: {
                    backgroundColor: "#FBF4E6",
                },
                headerShadowVisible: false,
                headerBackTitle: "Tilbake"
            }} />
            <Stack.Screen name="userProfile" component={UserProfileScreen} options={{ headerShown: false,}}/>
        </Stack.Navigator>
    )
}

function BottomTabNavigator() {

    return (
    <BottomTab.Navigator
      initialRouteName="TabOne"

      screenOptions={{
          headerTitleStyle: {display: "none"},
          headerBackground: () => <HeaderLogo />,
          tabBarShowLabel: false,

          tabBarBackground: () => <TabBarBackground />,
          tabBarStyle: styles.tabBarStyle,
      }}>
        <BottomTab.Screen
            name={"Third" as const}
            component={LoginScreen}

            options={{
                tabBarIcon: ({focused}) => <TabBarIconCustom
                    focused={focused}
                    image={require("../res/images/tabs/profil.png")}
                    text={"profile"}
                    iconSize={false}
                />
            }}
        />

        <BottomTab.Screen
            name="fakta"
            component={FactsScreen}

            options={{
                tabBarIcon: ({focused}) => <TabBarIconCustom
                    focused={focused}
                    image={require("../res/images/tabs/factsicon.png")}
                    text={"Fakta"}
                    iconSize={false}
                />
            }}
        />

      <BottomTab.Screen
        name="TabOne"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
              <Image source={require('../res/images/tabs/homeicon.png')} style={{height:45, width:45, opacity: focused ? 0.4 : 1,}}
              />
          ),

            tabBarButton: (props) => (
                <CustomTabBarHomeButton {...props} />
            )
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}

        options={{
            tabBarIcon: ({focused}) => <TabBarIconCustom
                focused={focused}
                image={require("../res/images/tabs/quiz.png")}
                text={"Quiz"}
                iconSize={true}
            />
        }}
      />

        <BottomTab.Screen
            name="map"
            component={MapScreen}

            options={{
                tabBarIcon: ({focused}) => <TabBarIconCustom
                    focused={focused}
                    image={require("../res/images/tabs/kart.png")}
                    text={"Kart"}
                    iconSize={true}
                />
            }}
        />

    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: "#FBF4E6",
        height: Dimensions.get("window").width >= 375 ? 90 : 55,
        borderTopWidth:0,
    }
    }
)



