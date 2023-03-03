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
            <View style={styles.resultsContainer}>
                <Text style={styles.resultText}>Congratulations!🎉🎉🎉</Text>
                <Text style={styles.resultText}>
                    You've completed the quiz!
                </Text>
                <Text style={styles.scoreText}>{score}</Text>
                <Text style={styles.resultText}>out of 100</Text>
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
    },
    bannerContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    banner: {
        height: 300,
        width: 300,
    },

    resultsContainer: {
        flex: 1,
        width: "100%",
        borderRadius: 20,
        borderWidth: 3,
        alignItems: "center",
        justifyContent: "center",
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
});
