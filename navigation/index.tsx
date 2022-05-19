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
import {
    ColorSchemeName,
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions
} from 'react-native';
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
import {CreateAccount} from "../screens/CreateAccount"


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
      //<SafeAreaView style={{flex:1}}>
        <Stack.Navigator>
          <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }}  />
          <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="Modal" component={ModalScreen} />
          </Stack.Group>
        </Stack.Navigator>
      //</SafeAreaView>
  );
}

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false,}}/>
            <Stack.Screen name="CreateAccrount" component={CreateAccount} options={{
                headerTitle: () => < Title />,
                headerStyle: {
                    backgroundColor: "#FBF4E6",
                },
                headerShadowVisible: false,
                headerBackTitle: "Tilbake"
            }} />
        </Stack.Navigator>
    )
}

//hide header title
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
    },
    shadow: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        //for andriod
        elevation: 5
    },
    TabBarBackground: {
        flex: 1,
        width: 600,
        backgroundColor: "#F5BFB6",
        //borderRadius: Dimensions.get("window").width >= 375 ? 29: 0,
        //borderWidth: 1,
        //borderBottomWidth: Dimensions.get("window").width >= 375 ? 0.5: 0,
        borderTopWidth: 1.3,
        //borderLeftWidth: Dimensions.get("window").width >= 375 ? 0.5: 0,
        //borderRightWidth: Dimensions.get("window").width >= 375 ? 0.5: 0
    }
  }
)

function TabBarBackground (){
   return (
       <View style={{flex: 1,
           alignItems: "center",
           justifyContent: "center",}}>
       <View style={stylesTab.TabBarBackground}></View>
       </View>
       )
}

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

function TabBarIconCustom(props: any){
    return (
        <View style={{alignItems: "center", justifyContent: "center"}}>
            <Image source={props.image} resizeMode="contain"
                   style={{
                       width: props.iconSize ? 40:  50,
                       height: props.iconSize ? 40:  50,
                       opacity: props.focused ? 0.4 : 1,
                       marginBottom: props.iconSize ? 9:  0,
                       top: Dimensions.get("window").width >= 375 ? 0 : 2 ? props.iconSize ? 2:  0: 0,
                       marginTop: Dimensions.get("window").width >= 375 ? props.iconSize ? 14:  11 : 0,
                       //top: props.iconSize ? 2:  0,
                       margin: Dimensions.get("window").width >= 375 ? 0 : 0
                   }} />
            <Text style={{opacity: props.focused ? 0.4 : 1, fontSize: 12, top: Dimensions.get("window").width >= 375 ? -9: -10 }}>{props.text}</Text>
        </View>
    )
}

const CustomTabBarHomeButton = (props: any) => (
    <TouchableOpacity
        style={{top: Dimensions.get("window").width >= 375 ? -30: -30, justifyContent: "center", alignItems: "center", ...stylesTab.shadow}}
        onPress={props.onPress}
        >
        <View
        style={{
            backgroundColor: "#FBF4E6",
            width: 65,
            height: 65,
            borderRadius: 35,
            borderRightWidth:1.3,
            borderLeftWidth:1.3,

        }}>{props.children}</View>
    </TouchableOpacity>
)


export function BottomTabNavigator() {
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
          tabBarBackground: () => <TabBarBackground />,
          tabBarStyle: {
              backgroundColor: "#FBF4E6",
              height: Dimensions.get("window").width >= 375 ? 90 : 55,
              //height: 55,
              borderTopWidth:0,
              //borderBottomWidth: Dimensions.get("window").width >= 428 ? 0.5: 0,
              //borderRadius: Dimensions.get("window").width >= 428 ? 25: 0,
              //borderTopWidth: 1.3,
          },


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



