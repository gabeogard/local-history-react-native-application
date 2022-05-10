import {Text, View} from "./Themed";
import {Button} from "react-native";
import {styles} from "../constants/styles";
import {questions} from "../res/quiz/questions.json";
import {useState} from "react";

export function QuizApp() {
    const [currentIndex, setIndex] = useState(0)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{questions[currentIndex].question}</Text>
            <Button title={questions[currentIndex].answers[0]}></Button>
            <Button title={questions[currentIndex].answers[1]}></Button>
            <Button title={questions[currentIndex].answers[2]}></Button>
            <Button title={questions[currentIndex].answers[3]}></Button>
        </View>
    );
}