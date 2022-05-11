import { StyleSheet, Image, Platform, Pressable } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function Home({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Image style={styles.image}  source={require("../res/images/landing-picture.png")} />
      <Image style={styles.text}  source={require("../res/images/text2.png")} />

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
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBF4E6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    fontSize: 15,
    backgroundColor: '#FFCB2F',
    height: Platform.OS === "web" ? 155 : 120,
    width: Platform.OS === "web" ? 600 : 274,
    borderRadius: 13,
    borderWidth: 2,
    paddingLeft: 15,
    paddingTop: 30,
    overflow: 'hidden',
  },
  text: {
    height: Platform.OS === "web" ? 243 :  188,
    width: Platform.OS === "web" ? 405 : 315,
    marginLeft:9,
    marginTop: Platform.OS === "web" ? 19 : 4,
    margin: 0,
  },
  button: {
    backgroundColor: "#F5BFB6",
    marginTop: Platform.OS === "web" ? 5 : 4,
    borderWidth:1,
    borderRadius:6,

  }
  ,
    image: {
      marginTop: Platform.OS === "web" ? 0 : 20,
        height: Platform.OS === "web" ? 115 :  89,
        width: Platform.OS === "web" ? 350 : 278,
    }
});
