import {Text, View} from "./Themed";
import {Button} from "react-native";
import {styles} from "../constants/styles";
import {questions} from "../res/quiz/questions.json";
import {useState} from "react";

export function QuizApp() {
    const [currentIndex, setIndex] = useState(0)
    const [points, setPoints] = useState(0)

    function answerQuestion(answer: number, question: any): Boolean {
        return answer === question.correctIndex;
    }

    return (
        <View style={styles.container}>

            <View style={styles.textBox}>
            <Text style={styles.title}>Points: {points}</Text>
            <Text style={styles.title}>{questions[currentIndex].question}</Text>
            <Button title={questions[currentIndex].answers[0]}
                    onPress={() => {
                        if (currentIndex < questions.length - 1) {
                            setIndex(currentIndex + 1)
                        }
                        if (0 === questions[currentIndex].correctIndex && currentIndex < questions.length - 1) {
                            setPoints(points + 100)
                        }
                    }}/>
            <Button title={questions[currentIndex].answers[1]}
                    onPress={() => {
                        if (currentIndex < questions.length - 1) {
                            setIndex(currentIndex + 1)
                        }
                        if (1 === questions[currentIndex].correctIndex) {
                            setPoints(points + 100)
                        }
                    }}/>
            <Button title={questions[currentIndex].answers[2]}
                    onPress={() => {
                        if (currentIndex < questions.length - 1) {
                            setIndex(currentIndex + 1)
                        }
                        if (2 === questions[currentIndex].correctIndex) {
                            setPoints(points + 100)
                        }
                    }}
            />
            <Button title={questions[currentIndex].answers[3]}
                    onPress={() => {
                        if(currentIndex < questions.length - 1){
                            setIndex(currentIndex + 1)
                        }
                        if(3 === questions[currentIndex].correctIndex){
                            setPoints(points + 100)
                        }
                    }}
            />
                </View>
        </View>
    );
}