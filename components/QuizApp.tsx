import {Text, View} from "./Themed";
import {SafeAreaView, TouchableOpacity, Modal} from "react-native";
import {styles} from "../constants/styles";
import * as React from 'react';
import {useEffect, useState} from "react";
import {FontAwesome, Foundation} from '@expo/vector-icons';
import {auth, db} from "../firebase";
import {doc, getDocs, collection, updateDoc} from "firebase/firestore/lite";
import Navigation from "../navigation";
import {CustomModal} from "./CustomModal";


export const QuizApp = ({navigation}:{navigation: any}) => {
    //const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentSelectedOption, setCurrentSelectedOption] = useState('');
    const [correctOption, setCorrectOption] = useState('');
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0);
    const [showNextButton, setShowNextButton] = useState(false);
    const [showScoreModal, setShowScoreModal] = useState(false);
    const [allQuestions, setAllQuestions] = useState <any[]>([]);


    const fetchQuestions = async () =>
        (await getDocs(collection(db, "quiz"))).docs.map(value => value.data())

    useEffect(() => {
        (async () => {
            setAllQuestions(await fetchQuestions())
        })();
    },[])

    console.log(allQuestions)

    const validateAnswer = (selectedOption: string) => {
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
                    <Text style={{fontSize: 20, opacity: 0.6, color: "#000"}}>{currentQuestionIndex + 1}</Text>
                    <Text style={{fontSize: 18, opacity: 0.6, color: "#000"}}>/{allQuestions.length}</Text>
                </SafeAreaView>

                <Text style={{fontSize: 25, color: "#000"}}>{allQuestions[currentQuestionIndex]?.question}</Text>
            </>
        )
    }

    const renderOptions = () => {
        return (
            <SafeAreaView>
                {
                    allQuestions[currentQuestionIndex]?.answers.map((option: string) => (
                        <TouchableOpacity
                            onPress={() => validateAnswer(option)}
                            disabled={isOptionsDisabled}
                            key={option}
                            style={{
                                borderWidth: 2,
                                borderColor: option == correctOption
                                    ? 'green'
                                    : option == currentSelectedOption
                                        ? 'red'
                                        : 'black',
                                backgroundColor: '#e3eef0',
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
                            <Text style={{fontSize: 20, color: '#000'}}>{option}</Text>

                            {
                                option == correctOption ? (
                                    <View style={{backgroundColor: "#e3eef0"}}>
                                        <FontAwesome name="check" size={24} color="green"/>
                                    </View>
                                ) : option == currentSelectedOption ? (
                                    <View style={{backgroundColor: "#e3eef0"}}>
                                        <Foundation name="x" size={24} color="red"/>
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
        if (currentQuestionIndex == allQuestions.length - 1) {
            // Last Question
            setShowNextButton(false)
            setShowScoreModal(true)
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentSelectedOption('');
            setCorrectOption('');
            setIsOptionsDisabled(false);
            setShowNextButton(false);
        }
    }

    const renderNextButton = () => {
        if (showNextButton) {
            return (
                <TouchableOpacity onPress={handleNext} style={styles.nextBtn}>
                    <Text style={styles.answerBtnText}>Next</Text>
                </TouchableOpacity>
            )
        }
    }

    const restartQuiz = () => {
        setShowScoreModal(false);
        setCurrentQuestionIndex(0);
        setScore(0);
        setCurrentSelectedOption('');
        setCorrectOption('');
        setIsOptionsDisabled(false);
        setShowNextButton(false);
    }


    const submitPoints = async () => {
        const docData = {
            score: score
        }
            if (auth.currentUser?.uid !== undefined) {
                const docRef = doc(db, "users", auth.currentUser.uid)
                await updateDoc(docRef, docData)
                alert("Din poengsum ble delt på poengtavlen! :)")
                restartQuiz()
            }else{
                alert("Du må være pålogget for å dele poengene dine.")
            }
        console.log("Points submitted:", score, "points for", auth.currentUser?.email)

    }

    const renderModal = () => (
            <CustomModal
                isVisible={showScoreModal}
                title={'Gratulerer'}
                info={`Du fikk ${score} poeng! Del på poengtavlen og sammenlign med dine venner. Eller prøv quizen igjen`}
                child={
                <TouchableOpacity
                    style={styles.submitBtn}
                onPress={() => {
                    submitPoints()
                    navigation.navigate("Leaderboard")
                }}>
                    <Text style={styles.answerBtnText}>Fullfør og del</Text>
                </TouchableOpacity>}
            />
        );


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.textBox}>

                    {renderQuestion()}

                    {renderOptions()}

                    {renderNextButton()}

                    {renderModal()}
                </View>
            </View>
        </SafeAreaView>
    );
}