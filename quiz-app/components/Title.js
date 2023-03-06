import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Title = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{text}</Text>
        </View>
    );
};

export default Title;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 36,
        fontWeight: "200",
        fontFamily: "Inter_400Regular",
    },
});
