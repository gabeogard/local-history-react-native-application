import {Text, View} from "./Themed";
import {Button, SafeAreaView, TouchableOpacity, StatusBar, Platform, Modal} from "react-native";
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
    const [showScoreModal, setShowScoreModal] = useState(false)

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
            <SafeAreaView>
                {
                    allQuestions[currentQuestionIndex]?.answers.map(option => (
                        <TouchableOpacity
                            onPress={()=> validateAnswer(option)}
                            disabled={isOptionsDisabled}
                            key={option}
                            style={{
                                borderWidth: 2,
                                borderColor: option==correctOption
                                    ? 'green'
                                    : option==currentSelectedOption
                                        ? 'red'
                                        : 'black',
                                backgroundColor: '#F5BFB6',
                                height: 40,
                                borderRadius: 20,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: 325,
                                alignSelf: "center",
                                paddingHorizontal: 20,
                                marginVertical: 10
                            }}
                        >
                            <Text style={{fontSize: 20, color: 'white'}}>{option}</Text>

                            {
                                option==correctOption ? (
                                    <View style={{backgroundColor: "#F5BFB6"}}>
                                        <FontAwesome name="check" size={24} color="green" />
                                    </View>
                                ): option == currentSelectedOption ? (
                                    <View style={{backgroundColor: "#F5BFB6"}}>
                                        <Foundation name="x" size={24} color="red" />
                                    </View>
                                ) : null
                            }

                        </TouchableOpacity>
                    ))
                }
            </SafeAreaView>
        )
    }

    const handleNext = () => {
        if(currentQuestionIndex== allQuestions.length-1){
            // Last Question
            setShowNextButton(false)
            setShowScoreModal(true)
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentSelectedOption('');
            setCorrectOption('');
            setIsOptionsDisabled(false);
            setShowNextButton(false);
        }
    }

    const renderNextButton = () => {
        if(showNextButton){
            return (
                <TouchableOpacity onPress={handleNext} style={styles.nextBtn}>
                    <Text style={styles.answerBtnText}>Next</Text>
                </TouchableOpacity>
            )
        }
    }

    function restartQuiz() {
        setShowScoreModal(false);
        setCurrentQuestionIndex(0);
        setScore(0);
        setCurrentSelectedOption('');
        setCorrectOption('');
        setIsOptionsDisabled(false);
        setShowNextButton(false);
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.textBox}>

                    {renderQuestion()}

                    {renderOptions()}

                    {renderNextButton()}

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={showScoreModal}
                    >
                        <View style={styles.modal}>
                                <Text style={{fontSize: 30, fontWeight: 'bold'}}>{ score> (allQuestions.length/2) ? 'Gratulerer' : 'Oops!' }</Text>
                                <View>
                                    <Text style={{
                                        backgroundColor: "#FFCB2F",
                                        fontSize: 30,
                                        color: score> (allQuestions.length/2) ? 'green' : 'red'
                                    }}> Du fikk {score} poeng! Del på poengtavlen og sammenlign med dine venner. Eller prøv quizen igjen</Text>
                                </View>

                            <TouchableOpacity
                                onPress={restartQuiz}
                                style={styles.submitBtn}>
                                <Text style={{
                                    textAlign: 'center', color: 'white', fontSize: 20, padding: 4
                                }}>Fullfør og del</Text>
                            </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={restartQuiz}
                                    style={styles.nextBtn}>
                                    <Text style={{
                                        textAlign: 'center', color: 'white', fontSize: 20, padding: 4
                                    }}>Retry Quiz</Text>
                                </TouchableOpacity>

                        </View>
                    </Modal>
                </View>
            </View>
        </SafeAreaView>
    );
}