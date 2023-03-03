import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Button from "../components/Button";
import Title from "../components/Title";

const Result = ({ navigation, route }) => {
    const { score } = route.params;
    return (
        <View style={styles.container}>
            <View>
                <Title text="Result" />
            </View>
            <View style={styles.bannerContainer}>
                <Image
                    source={{
                        uri: "https://cdni.iconscout.com/illustration/premium/thumb/exams-result-976748.png?f=webp",
                    }}
                    style={styles.banner}
                    resizeMode="contain"
                />
            </View>
            <View style={[styles.resultsContainer, styles.shadowProp]}>
                <Text style={styles.resultText}>Congratulations!🎉🎉🎉</Text>
                <Text style={styles.resultText}>
                    You've completed the quiz!
                </Text>
                <Text style={styles.scoreText}>{score}</Text>
                <Text style={styles.resultText}>out of 10</Text>
                <Text style={styles.thanks}>
                    Thanks for taking the quiz! We hope you enjoyed it and
                    learned something new.
                </Text>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Home");
                    }}
                    style={styles.notionlayout}
                >
                    <Text style={styles.notionbutton}>HOME</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Result;

const styles = StyleSheet.create({
    container: {
        paddingTop: 31,
        paddingHorizontal: 16,
        height: "100%",
        backgroundColor: "#fbfcfd",
    },
    bannerContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    banner: {
        height: 190,
        width: 190,
    },

    resultsContainer: {
        flex: 1,
        width: "100%",
        borderRadius: 9,
        borderWidth: 0.7,
        borderColor: "#d7dbdf",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    heading: {
        color: "#495057",
        fontSize: 15,
    },
    scoreText: {
        color: "#6C757D",
        fontSize: 90,
    },
    thanks: {
        textAlign: "center",
        fontSize: 11,
        textDecorationStyle: "dashed",
    },
    resultText: {
        fontSize: 20,
        color: "#495057",
        fontFamily: "",
    },
    notionlayout: {
        backgroundColor: "#000",
        borderRadius: 11,
        // width: 70,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
    },
    notionbutton: {
        color: "white",
        fontSize: 18,
        fontWeight: "medium",
        paddingVertical: 15,
        paddingHorizontal: 9,
        elevation: 20,
        shadowColor: "red",
    },
    shadowProp: {
        shadowColor: "#000000",
        shadowOffset: {
            width: -1,
            height: 0.5,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.84,

        elevation: 5,
    },
});
