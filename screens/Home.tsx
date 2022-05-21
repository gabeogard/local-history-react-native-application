import {StyleSheet, Image, Pressable, ImageBackground,View, SafeAreaView, Text, Dimensions} from 'react-native';
import {useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase";

export default function Home({navigation}:{navigation: any}) {

    const [user, setUser] = useState<{} | null>({})

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

  return (
        //safeAreaView skal ha en annen style
        <SafeAreaView style={styles.container}>
        <View style={styles.container}>

          <ImageBackground style={styles.introBox} source={require("../res/images/landing-picture.png")}>
              <Text style={styles.textOnBackground}>Byåa Kultursti</Text>
          </ImageBackground>

          <Image style={styles.cloudLeft} source={require("../res/images/cloud.png")}/>

          <Image style={styles.cloudRight} source={require("../res/images/cloud.png")}/>

          <View style={styles.textBox}>
              <Text style={styles.text}>Velkommen til Byåa Kultursti, her kan du samle poeng ved å svare på
                  spørsmål om Byåa og konkurrere med vennene dine. Er du den beste i klassen din?</Text>
          </View>

          <View style={styles.buttonFlex}>
              <Pressable style={styles.button} onPress={ () => alert("Spill som gjest")}>
                  <Text>Spill som gjest</Text>
              </Pressable>

              {
                  (user as any)?.email ?
                      <View>
                          <Pressable style={styles.button} onPress={ () => navigation.navigate("fakta")}>
                              <Text>Gå til Fakta</Text>
                          </Pressable>


                          <Pressable style={styles.button} onPress={ () => navigation.navigate("userProfile")}>
                              <Text>profile</Text>
                          </Pressable>
                      </View>
                      :

                      <View>
                      <Pressable style={styles.button} onPress={ () => navigation.navigate("Third")}>
                          <Text>Logg inn</Text>
                      </Pressable>


                      <Pressable style={styles.button} onPress={ () => navigation.navigate("CreateAccrount")}>
                          <Text>Registrer</Text>
                      </Pressable>
                      </View>
              }


          </View>

          <Image style={styles.onTour} source={require("../res/images/onTour.png")}/>

      </View>
        </SafeAreaView>
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
        top: Dimensions.get("window").width >= 400 ? 50: 10,
        //top: 10,
        zIndex: -1,
  },
  button: {
      //skal fjernes
      justifyContent: "center",
      alignItems: "center",

      backgroundColor: "#F5BFB6",
      marginTop: Dimensions.get("window").width >= 400 ? 10: 5,
      //marginTop: 5,
      borderWidth:1,
      borderRadius:6,
      padding: 3,

      shadowColor: "#000000",
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.3,
      shadowRadius: 4,
  },
    introBox: {
        width: Dimensions.get("window").width >= 400 ? 350: 278,
        height: Dimensions.get("window").width >= 400 ? 115: 90,
        top: Dimensions.get("window").width >= 400 ? 10: 65,
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
        zIndex:1,
        width: 108,
        height: 46,
        left: Dimensions.get("window").width >= 400 ? -115: -80,
        //left: -80,
        top: 63,
    },
    cloudRight: {
    zIndex:1,
        width: 108,
        height: 46,
        left: Dimensions.get("window").width >= 400 ? 115: 85,
        //left: 85,
        top: 17,
    },
    onTour:{
        zIndex:1,
        width: 56,
        height: 76,
        left: 130,
        top: 66
},
    textBox: {
        width: Dimensions.get("window").width >= 400 ? 349: 271,
        height: Dimensions.get("window").width >= 400 ? 200: 132,
        resizeMode: "cover",
        backgroundColor: "#FFCB2F",
        borderRadius: 10,
        borderColor: "#000000",
        borderWidth: 1,
        top: 5,
        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    text: {
        //fontFamily: 'Roboto-Regular',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: Dimensions.get("window").width >= 400 ? 24.9: 18,
        //fontSize: 18,
        padding: 11,
        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 4,
    }
});
