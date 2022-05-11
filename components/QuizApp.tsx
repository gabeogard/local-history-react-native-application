import {Text, View} from "./Themed";
import {Button} from "react-native";
import {styles} from "../constants/styles";
import {questions} from "../res/quiz/questions.json";
import {useState} from "react";

export function QuizApp() {
    const [currentIndex, setIndex] = useState(0)

    function answerQuestion() {
        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{questions[currentIndex].question}</Text>
            <Button title={questions[currentIndex].answers[0]}
            onPress={answerQuestion}/>
            <Button title={questions[currentIndex].answers[1]}/>
            <Button title={questions[currentIndex].answers[2]}/>
            <Button title={questions[currentIndex].answers[3]}/>
        </View>
    );
}