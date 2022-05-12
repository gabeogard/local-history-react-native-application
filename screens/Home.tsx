import {StyleSheet, Image, Platform, Pressable, ImageBackground} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';



export default function Home({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
      <View style={styles.container}>

          <ImageBackground style={styles.introBox} source={require("../res/images/landing-picture.png")}>
              <Text style={styles.textOnBackground}>Byåa Kultursti</Text>
          </ImageBackground>

          <Image style={styles.cloudLeft} source={require("../res/images/cloud.png")}/>

          <Image style={styles.cloudRight} source={require("../res/images/cloud.png")}/>

          <View style={styles.textBox}>
              <Text style={styles.text}>Velkommen til Byåa Kultursti,{'\n'}her kan du samle poeng ved å{'\n'}svare på
                  spørsmål om Byåa og konkurrere med vennene dine.{'\n'}Er du den beste i klassen din?</Text>
          </View>

          <View style={styles.buttonFlex}>
              <Pressable style={styles.button} onPress={ () => alert("Spill som gjest")}>
                  <Text>Spill som gjest</Text>
              </Pressable>

              <Pressable style={styles.button} onPress={ () => alert("Login")}>
                  <Text>Logg inn</Text>
              </Pressable>

              <Pressable style={styles.button} onPress={ () => alert("Register")}>
                  <Text>Registrer</Text>
              </Pressable>
          </View>

          <Image style={styles.onTour} source={require("../res/images/onTour.png")}/>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: "#FBF4E6",
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
  },
    buttonFlex: {
        backgroundColor: "#FBF4E6",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        top: 15
  },
  button: {
      backgroundColor: "#F5BFB6",
      marginTop: 5,
      borderWidth:1,
      borderRadius:6,
      padding: 3,

      shadowColor: "#000000",
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.3,
      shadowRadius: 4,
  },
    introBox: {
        //position: "absolute",
        width: 278,
        height: 90,
        top: -40,
        display: "flex",
        alignContent: "center",
        justifyContent: "center",

        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    textOnBackground: {
        //fontFamily: 'Roboto-Regular',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 24,
        lineHeight: 28,
        paddingLeft: 32,
        paddingBottom: 33,

        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    cloudLeft:{
        position: "absolute",
        zIndex:1,
        width: 108,
        height: 46,
        left: 25,
        top: 129,
    },

    onTour:{
      position:"absolute",
        zIndex:1,
        width: 56,
        height: 76,
        left: 260,
        top: 379
},
    cloudRight: {
        position: "absolute",
        zIndex:1,
        width: 108,
        height: 46,
        left: 190,
        top: 129,
    },
    textBox: {
        resizeMode: "cover",
        backgroundColor: "#FFCB2F",
        borderRadius: 10,
        borderColor: "#000000",
        borderWidth: 1,

        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    text: {
        //fontFamily: 'Roboto-Regular',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 18,
        padding: 11,
        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 4,
    }
});
