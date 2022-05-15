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
    View
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

//header title
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
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        //for andriod
        elevation: 5
    }
  }
)

//trenger ikke den foreløpig
const styles = (props: any) => StyleSheet.create({
        container: {
            backgroundColor: "#FBF4E6",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
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

function TabBarIconCustom(props: any){
    return (
        <View style={{alignItems: "center", justifyContent: "center"}}>
            <Image source={props.image} resizeMode="contain"
                   style={{
                       width: props.iconSize ? 40:  50,
                       height: props.iconSize ? 40:  50,
                       opacity: props.focused ? 0.4 : 1,
                       marginBottom: props.iconSize ? 9:  0,
                       top: props.iconSize ? 2:  0,
                   }} />
            <Text style={{opacity: props.focused ? 0.4 : 1, fontSize: 12, top: -10}}>{props.text}</Text>
        </View>
    )
}

const CustomTabBarHomeButton = (props: any) => (

    <TouchableOpacity
        style={{top: -30, justifyContent: "center", alignItems: "center", ...stylesTab.shadow}}
        onPress={props.onPress}
    >
        <View
        style={{
            backgroundColor: "#FBF4E6",
            width: 70,
            height: 70,
            borderRadius: 35,
            borderWidth: 1
        }}
        >
            {props.children}
        </View>
    </TouchableOpacity>
)




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
        component={Home}
        options={({ navigation }) => ({
            title: "Hjem",
          tabBarIcon: ({focused}) => (<Image source={require('../res/images/tabs/homeicon.png')} style={{height:50, width:50}}/>),
            tabBarButton: (props) => (
                <CustomTabBarHomeButton {...props} />
            )
        })}
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



