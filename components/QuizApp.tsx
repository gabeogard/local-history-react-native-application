import { Text, View } from './Themed'
import { SafeAreaView, TouchableOpacity, Modal } from 'react-native'
import { styles } from '../constants/styles'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { FontAwesome, Foundation } from '@expo/vector-icons'
import { auth, db } from '../firebase'
import { doc, getDocs, collection, updateDoc } from 'firebase/firestore/lite'
import Navigation from '../navigation'
import { CustomModal } from './CustomModal'
import { useUserContext } from '../functions/UserContext'

interface Question {
    answers: string[]
    correctOption: string
    question: string
}

// TODO: typ opp questions
const Questions = ({
                       currentQuestionIndex,
                       allQuestions,
                   }: {
    currentQuestionIndex: number
    allQuestions: any[]
}) => (
    <>
        <SafeAreaView style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 20, opacity: 0.6, color: '#000' }}>
                {currentQuestionIndex + 1}
            </Text>
            <Text style={{ fontSize: 18, opacity: 0.6, color: '#000' }}>
                /{allQuestions.length}
            </Text>
        </SafeAreaView>

        <Text style={{ fontSize: 25, color: '#000' }}>
            {allQuestions[currentQuestionIndex]?.question}
        </Text>
    </>
)

const Options = ({
                     questions,
                     currentQuestionIndex,
                     validateAnswer,
                     isOptionsDisabled,
                     correctOption,
                     currentSelectedOption,
                 }: {
    questions: any[]
    currentQuestionIndex: number
    validateAnswer: (answer: string) => void
    isOptionsDisabled: boolean
    correctOption: string
    currentSelectedOption?: string
}) => (
    <SafeAreaView>
        {questions[currentQuestionIndex]?.answers.map((option: string) => (
            <TouchableOpacity
                onPress={() => validateAnswer(option)}
                disabled={isOptionsDisabled}
                key={option}
                style={{
                    borderWidth: 2,

                    borderColor:
                        option == correctOption
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
                    alignSelf: 'center',
                    paddingHorizontal: 20,
                    marginVertical: 10,

                }}
            >
                <Text numberOfLines={2} adjustsFontSizeToFit style={{ fontSize: 20, color: '#000' }}>{option}</Text>

                {option == correctOption ? (
                    <View style={{ backgroundColor: '#e3eef0' }}>
                        <FontAwesome name='check' size={24} color='green' />
                    </View>
                ) : option == currentSelectedOption ? (
                    <View style={{ backgroundColor: '#e3eef0' }}>
                        <Foundation name='x' size={24} color='red' />
                    </View>
                ) : null}
            </TouchableOpacity>
        ))}
    </SafeAreaView>
)
const NextButton = ({ handleNext }: { handleNext: () => void }) => (
    <TouchableOpacity onPress={handleNext} style={styles.nextBtn}>
        <Text style={styles.answerBtnText}>Next</Text>
    </TouchableOpacity>
)

const ShareButton = ({ submitPoints, navigation }: { submitPoints: () => void, navigation: any }) => {
    const { user } = useUserContext()
    const btn = (<TouchableOpacity
        style={styles.submitBtn}
        onPress={() => {
            submitPoints()
            navigation.navigate('Leaderboard')
        }}
    >
        <Text style={styles.answerBtnText}>Fullfør og del</Text>
    </TouchableOpacity>)
    return (
        (user !== null) ? btn : null
    )
}

const QuizModal = ({
                       showScoreModal,
                       score,
                       submitPoints,
                       navigation,
                       restartQuiz,
                   }: {
    showScoreModal: boolean
    score: number
    submitPoints: () => void
    navigation: any
    restartQuiz: () => void
}) => (
    <CustomModal
        isVisible={showScoreModal}
        title={'Gratulerer'}
        info={`Du fikk ${score} poeng! Del på poengtavlen og sammenlign med dine venner. Eller prøv quizen igjen`}
        child={
            <ShareButton
                navigation={navigation}
                submitPoints={submitPoints}
            />
        }
        restartButton={
            <TouchableOpacity
                style={styles.submitBtn}
                onPress={() => {
                    restartQuiz()
                }}
            >
                <Text style={styles.answerBtnText}>Prøv igjen</Text>
            </TouchableOpacity>
        }
    />
)

const useQuestions = () => {
    // TODO: Fix any
    const [allQuestions, setAllQuestions] = useState<any[]>([])

    const fetchQuestions = async () =>
        (await getDocs(collection(db, 'quiz'))).docs.map((value) =>
            value.data(),
        )

    useEffect(() => {
        ;(async () => {
            setAllQuestions(await fetchQuestions())
        })()
    }, [])

    return [allQuestions]
}

const useQuiz = () => {
    const [questions] = useQuestions()
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentSelectedOption, setCurrentSelectedOption] = useState('')
    const [correctOption, setCorrectOption] = useState('')
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false)
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)

    const validateAnswer = (selectedOption: string) => {
        const correctOption = questions[currentQuestionIndex].correctOption
        setCurrentSelectedOption(selectedOption)
        setCorrectOption(correctOption)
        setIsOptionsDisabled(true)
        if (selectedOption === correctOption) {
            setScore(score + 50)
        }
        setShowNextButton(true)
    }

    const handleNext = () => {
        if (currentQuestionIndex == questions.length - 1) {
            // Last Question
            setShowNextButton(false)
            setShowScoreModal(true)
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
            setCurrentSelectedOption('')
            setCorrectOption('')
            setIsOptionsDisabled(false)
            setShowNextButton(false)
        }
    }

    const restartQuiz = () => {
        setShowScoreModal(false)
        setCurrentQuestionIndex(0)
        setScore(0)
        setCurrentSelectedOption('')
        setCorrectOption('')
        setIsOptionsDisabled(false)
        setShowNextButton(false)
    }

    const submitPoints = async () => {
        const docData = {
            score: score,
        }
        if (auth.currentUser?.uid !== undefined) {
            const docRef = doc(db, 'users', auth.currentUser.uid)
            await updateDoc(docRef, docData)
            alert('Din poengsum ble delt på poengtavlen! :)')
            restartQuiz()
        } else {
            alert('Du må være pålogget for å dele poengene dine.')
        }
        console.log(
            'Points submitted:',
            score,
            'points for',
            auth.currentUser?.email,
        )
    }

    return {
        validateAnswer,
        handleNext,
        currentQuestionIndex,
        questions,
        correctOption,
        isOptionsDisabled,
        submitPoints,
        currentSelectedOption,
        showNextButton,
        score,
        showScoreModal,
        restartQuiz,
    }
}

export const QuizApp = ({ navigation }: { navigation: any }) => {
    const {
        validateAnswer,
        handleNext,
        currentQuestionIndex,
        questions,
        correctOption,
        isOptionsDisabled,
        submitPoints,
        currentSelectedOption,
        showNextButton,
        score,
        showScoreModal,
        restartQuiz,
    } = useQuiz()

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.textBox}>
                    <Questions
                        currentQuestionIndex={currentQuestionIndex}
                        allQuestions={questions}
                    />

                    <Options
                        currentQuestionIndex={currentQuestionIndex}
                        questions={questions}
                        validateAnswer={validateAnswer}
                        isOptionsDisabled={isOptionsDisabled}
                        correctOption={correctOption}
                        currentSelectedOption={currentSelectedOption}
                    />

                    {showNextButton && <NextButton handleNext={handleNext} />}

                    <QuizModal
                        showScoreModal={showScoreModal}
                        score={score}
                        submitPoints={submitPoints}
                        navigation={navigation}
                        restartQuiz={restartQuiz}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}
