import { Text, View } from './Themed'
import { TouchableOpacity } from 'react-native'
import { styles } from '../constants/styles'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { FontAwesome, Foundation } from '@expo/vector-icons'
import { auth, db } from '../firebase'
import { doc, getDocs, collection, updateDoc } from 'firebase/firestore/lite'
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
        <View
            style={{
                width: '100%',
                height: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#FFCB2F',
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    backgroundColor: '#FFCB2F',
                }}
            >
                <Text style={{ fontSize: 20, opacity: 0.6, color: '#000' }}>
                    {currentQuestionIndex + 1}
                </Text>
                <Text style={{ fontSize: 18, opacity: 0.6, color: '#000' }}>
                    /{allQuestions.length}
                </Text>
            </View>

            <Text
                numberOfLines={3}
                adjustsFontSizeToFit
                style={{ fontSize: 25, color: '#000' }}
            >
                {allQuestions[currentQuestionIndex]?.question}
            </Text>
        </View>
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
    <View
        style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#FFCB2F',
            justifyContent: 'space-evenly',
            alignItems: 'center',
        }}
    >
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
                    borderRadius: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    height: '25%',
                    alignSelf: 'center',
                    paddingHorizontal: 20,
                }}
            >
                <Text
                    numberOfLines={2}
                    adjustsFontSizeToFit
                    style={{
                        fontSize: 20,
                        color: '#000',
                        width: '95%',
                    }}
                >
                    {option}
                </Text>

                {option == correctOption ? (
                    <View style={{ backgroundColor: '#e3eef0' }}>
                        <FontAwesome name="check" size={24} color="green" />
                    </View>
                ) : option == currentSelectedOption ? (
                    <View style={{ backgroundColor: '#e3eef0' }}>
                        <Foundation name="x" size={24} color="red" />
                    </View>
                ) : null}
            </TouchableOpacity>
        ))}
    </View>
)
const NextButton = ({ handleNext }: { handleNext: () => void }) => (
    <TouchableOpacity onPress={handleNext} style={styles.nextBtn}>
        <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            style={styles.answerBtnText}
        >
            Next
        </Text>
    </TouchableOpacity>
)

const ShareButton = ({
    submitPoints,
    navigation,
}: {
    submitPoints: () => void
    navigation: any
}) => {
    const { user } = useUserContext()
    const btn = (
        <TouchableOpacity
            style={styles.submitBtn}
            onPress={() => {
                submitPoints()
                navigation.navigate('Leaderboard')
            }}
        >
            <Text style={styles.answerBtnText}>Fullfør og del</Text>
        </TouchableOpacity>
    )
    return user !== null ? btn : null
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
            <ShareButton navigation={navigation} submitPoints={submitPoints} />
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
            value.data()
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
            auth.currentUser?.email
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
        <View
            style={{
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FBF4E6',
            }}
        >
            <View style={styles.textBox}>
                <View
                    style={{
                        height: '20%',
                        width: '95%',
                        alignItems: 'center',
                        backgroundColor: '#FFCB2F',
                    }}
                >
                    <Questions
                        currentQuestionIndex={currentQuestionIndex}
                        allQuestions={questions}
                    />
                </View>

                <View
                    style={{
                        height: '40%',
                        width: '95%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Options
                        currentQuestionIndex={currentQuestionIndex}
                        questions={questions}
                        validateAnswer={validateAnswer}
                        isOptionsDisabled={isOptionsDisabled}
                        correctOption={correctOption}
                        currentSelectedOption={currentSelectedOption}
                    />
                </View>

                <View
                    style={{
                        height: '15%',
                        width: '95%',
                        alignItems: 'center',
                        backgroundColor: '#FFCB2F',
                    }}
                >
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
        </View>
    )
}
