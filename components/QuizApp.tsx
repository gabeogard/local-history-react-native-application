import {Text, View} from "./Themed";
import {Button, TouchableOpacity} from "react-native";
import {styles} from "../constants/styles";
import {questions} from "../res/quiz/questions.json";
import React, {useState} from "react";
import {QuizAnswer} from '../components/QuizAnswer'

export function QuizApp() {
    const [currentIndex, setIndex] = useState(0)
    const [points, setPoints] = useState(0)

    function answerQuestion( answer: number, correctIndex: number): Boolean {
    
        if(answer===correctIndex){
            return true
    
        } else{
           
            return false
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.textBox}>
                <Text style={styles.title}>Points: {points}</Text>
                <Text style={styles.title}>{questions[currentIndex].question}</Text>
                <QuizAnswer answer={questions[currentIndex].answers[0]} 
                onPress={() => {
                    if(
                        answerQuestion(
                            questions[currentIndex].answers.indexOf(
                                questions[currentIndex].answers[0]),
                                questions[currentIndex].correctIndex)
                    ){
                        if(!(currentIndex > questions.length -1)){
                            setPoints(points + 100)
                        setIndex(currentIndex + 1)
                        }
                    } else{
                        if(!(currentIndex > questions.length -1)){
                            setIndex(currentIndex + 1)
                        }
                    }
                
                }}/>
                <QuizAnswer answer={questions[currentIndex].answers[1]} 
                onPress={() => {
                    if(
                        answerQuestion(
                            questions[currentIndex].answers.indexOf(
                                questions[currentIndex].answers[1]),
                                questions[currentIndex].correctIndex)
                    ){
                        if(!(currentIndex > questions.length -1)){
                            setPoints(points + 100)
                        setIndex(currentIndex + 1)
                        }
                    } else{
                        if(!(currentIndex > questions.length -1)){
                            setIndex(currentIndex + 1)
                        }
                    }
                
                }}/>
                <QuizAnswer answer={questions[currentIndex].answers[2]} 
                onPress={() => {
                    if(
                        answerQuestion(
                            questions[currentIndex].answers.indexOf(
                                questions[currentIndex].answers[2]),
                                questions[currentIndex].correctIndex)
                    ){
                        if(!(currentIndex > questions.length -2)){
                            setPoints(points + 100)
                        setIndex(currentIndex + 1)
                        }
                    } else{
                        if(!(currentIndex > questions.length -2)){
                            setIndex(currentIndex + 1)
                        }
                    }
                
                }}/>
                <QuizAnswer answer={questions[currentIndex].answers[3]} 
                onPress={() => {
                    if(
                        answerQuestion(
                            questions[currentIndex].answers.indexOf(
                                questions[currentIndex].answers[3]),
                                questions[currentIndex].correctIndex)
                    ){
                        if(!(currentIndex > questions.length -2)){
                            setPoints(points + 100)
                        setIndex(currentIndex + 1)
                        }
                    } else{
                        if(!(currentIndex > questions.length -2)){
                            setIndex(currentIndex + 1)
                        }
                    }
                
                }}/>
            </View>
        </View>
    );
}