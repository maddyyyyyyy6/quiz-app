import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ text, navigate, to }) => {
    return (


        <TouchableOpacity onPress={() => navigate(to)} style={styles.notionlayout}>
            <Text style={styles.notionbutton}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    notionlayout: {
        backgroundColor: "#000",
        borderRadius: 7,
        width: 70,
        alignItems: "center",
        justifyContent: "center"
    },
    notionbutton: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 5,
        paddingHorizontal: 7,
        fontFamily: ""

    }

})