import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Button from "../components/Button";
import { useState, useEffect } from "react";

const Quiz = ({ navigation }) => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [questionNumber, setQuestionsNumber] = useState(0);
    const [isLastQuestion, setIsLastQuestion] = useState(false);
    const getQuiz = async () => {
        // const url = "https://opentdb.com/api.php?amount=10&type=multiple";
        const url =
            "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple";
        const res = await fetch(url);
        const response = await res.json();
        setQuestions(response.results);
    };

    const changeQuestion = (where) => {
        let lastindex = questions.length - 1;
        if (where == "next") {
            if (questionNumber < lastindex) {
                setQuestionsNumber(questionNumber + 1);
            }
        }
        if (where == "previous") {
            if (questionNumber > 0) {
                setQuestionsNumber(questionNumber - 1);
            }
        }
    };

    const combineMultipleQuestions = () => {
        const array_answers = questions[questionNumber]?.incorrect_answers;
        if (array_answers) {
            const correct_answer = questions[questionNumber]?.correct_answer;
            let randomIndex = Math.floor(Math.random() * (answers.length + 1));
            array_answers.splice(randomIndex, 0, correct_answer);
            setAnswers(array_answers);
            console.log(array_answers);
        }
    };

    // console.log(questions[questionNumber]?.correct_answer);
    useEffect(() => {
        getQuiz();
    }, []);

    useEffect(() => {
        if (questionNumber == 9) {
            setIsLastQuestion(true);
            combineMultipleQuestions();
        }

        if (questionNumber < 9) {
            setIsLastQuestion(false);
            combineMultipleQuestions();
        }
    }, [questionNumber]);

    return (
        <View style={styles.container}>
            {questions && (
                <>
                    <View style={styles.top}>
                        <Text style={styles.question}>
                            Q.{questionNumber + 1}{" "}
                            {questions[questionNumber]?.question}
                        </Text>
                    </View>
                    <View style={styles.options}>
                        {answers &&
                            answers.map((ques) => {
                                return (
                                    <TouchableOpacity
                                        style={styles.optionButton}
                                    >
                                        <Text style={styles.option}>
                                            {ques}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                    </View>
                    <View style={styles.bottom}>
                        <TouchableOpacity
                            onPress={() => changeQuestion("previous")}
                            style={styles.notionlayout}
                        >
                            <Text style={styles.notionbutton}>SKIP</Text>
                        </TouchableOpacity>
                        {isLastQuestion ? (
                            <TouchableOpacity
                                style={styles.notionlayout.red}
                                onPress={() => navigation.navigate("Result")}
                            >
                                <Text style={styles.notionbutton}>
                                    END Quiz
                                </Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                onPress={() => changeQuestion("next")}
                                style={styles.notionlayout}
                            >
                                <Text style={styles.notionbutton}>NEXT</Text>
                            </TouchableOpacity>
                        )}

                        {/* hide next button and show end button when question number is the last */}
                    </View>
                </>
            )}
        </View>
    );
};

export default Quiz;

const styles = StyleSheet.create({
    container: {
        paddingTop: 31,
        paddingHorizontal: 16,
        height: "100%",
        paddingBottom: 10,
    },
    top: {
        marginVertical: 16,
    },
    options: {
        marginVertical: 16,
        flex: 1,
    },
    bottom: {
        // marginBottom: 12,
        paddingVertical: 16,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    question: {
        fontSize: 28,
    },
    option: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
    },
    optionButton: {
        paddingVertical: 12,
        backgroundColor: "#473BF0",
        marginVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    notionlayout: {
        red: {
            backgroundColor: "red",
            borderRadius: 9,
            alignItems: "center",
            justifyContent: "center",
        },
        backgroundColor: "#000",
        borderRadius: 9,
        // width: 70,
        alignItems: "center",
        justifyContent: "center",
    },
    notionbutton: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        paddingVertical: 7,
        paddingHorizontal: 9,
        fontFamily: "",
    },
});
