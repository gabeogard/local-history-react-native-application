import {StyleSheet} from 'react-native';
import {View} from '../components/Themed';
import {QuizApp} from "../components/QuizApp";
import Navigation from "../navigation";

export default function QuizScreen({navigation}:{navigation: any}) {

  return (
    <View style={styles.container}>
      <QuizApp navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FBF4E6",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});