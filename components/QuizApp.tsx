import {Text, View} from "./Themed";
import {Button, SafeAreaView, TouchableOpacity, StatusBar, Platform} from "react-native";
import {styles} from "../constants/styles";
import * as React from 'react';
import {useState} from "react";
import data from "../res/quiz/questions";
import {FontAwesome, Foundation} from '@expo/vector-icons';


export function QuizApp() {
    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentSelectedOption, setCurrentSelectedOption] = useState('')
    const [correctOption, setCorrectOption] = useState('')
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false)
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)

    function validateAnswer(selectedOption: string) {
        let correct_option = allQuestions[currentQuestionIndex].correctOption
        setCurrentSelectedOption(selectedOption)
        setCorrectOption(correct_option)
        setIsOptionsDisabled(true)
        if (selectedOption == correct_option) {
            setScore(score + 50)
        }
        setShowNextButton(true)
    }

    const renderQuestion = () => {
        return (
            <>
                <SafeAreaView style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                    <Text style={{fontSize: 20, opacity: 0.6}}>{currentQuestionIndex + 1}</Text>
                    <Text style={{fontSize: 18, opacity: 0.6}}>/{allQuestions.length}</Text>
                </SafeAreaView>

                <Text style={{fontSize: 25}}>{allQuestions[currentQuestionIndex]?.question}</Text>
            </>
        )
    }

    const renderOptions = () => {
        return (
            <>
                {
                    allQuestions[currentQuestionIndex]?.answers.map(option => (
                        <TouchableOpacity
                            onPress={() => validateAnswer(option)}
                            disabled={isOptionsDisabled}
                            key={option}
                            style={{
                                borderColor: option == correctOption ? '#2AA816FF':
                                    option==currentSelectedOption ? '#CB0000FF': '#000000',
                                backgroundColor: "#F5BFB6",
                                marginTop: Platform.OS === "web" ? 5 : 4,
                                borderWidth: 1,
                                borderRadius: 6,
                                margin: 5,
                            }}>
                            <Text style={styles.answerBtnText}>{option}</Text>

                            {
                                option == correctOption ? (
                                    <SafeAreaView
                                        style={{alignItems: 'flex-end', marginRight: 10, flexDirection: 'column'}}>
                                        <FontAwesome name="check" size={24} color="green"/>
                                    </SafeAreaView>
                                ) : option == currentSelectedOption ? (
                                    <SafeAreaView
                                        style={{alignItems: 'flex-end', marginRight: 10, flexDirection: 'column'}}>
                                        <Foundation name="x" size={24} color="red"/>
                                    </SafeAreaView>
                                ) : null
                            }
                        </TouchableOpacity>
                    ))
                }
            </>
        )
    }

    function handleNext() {
        if(currentQuestionIndex == allQuestions.length-1){

        }
    }

    const renderNextButton = () => {
        if(showNextButton){
            return (
                <TouchableOpacity onPress={handleNext} style={styles.answerBtn}>
                    <Text>Next</Text>
                </TouchableOpacity>
            )
        }
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.textBox}>

                    {/*ProgressBar*/}

                    {/*Question*/}
                    {renderQuestion()}
                    {/*AnswerOptions*/}
                    {renderOptions()}
                    {/*NextButton*/}
                    {renderNextButton()}
                </View>
            </View>
        </SafeAreaView>
    );
}