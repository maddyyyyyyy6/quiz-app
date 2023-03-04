import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Title from "../components/Title";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import { useState } from "react";

const Home = ({ navigation }) => {
    const [selectedCategory, setSelectedCategory] = useState("Category");
    const [selectedDifficulty, setSelectedDifficulty] = useState("Difficult");
    const [selectedType, setSelectedType] = useState("Type");
    let [fontsLoaded] = useFonts({
        Inter_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    const handleStartQuiz = () => {
        navigation.navigate("Quiz", {
            category: selectedCategory,
            difficulty: selectedDifficulty,
            type: selectedType,
        });
    };
    return (
        <View style={styles.container}>
            <Title text="Brain Busters" />
            <View style={styles.bannerContainer}>
                <Image
                    source={{
                        uri: "https://cdni.iconscout.com/illustration/premium/thumb/online-question-answer-5651149-4714812.png",
                    }}
                    style={styles.banner}
                    resizeMode="contain"
                />
            </View>
            {/* for the category,difficulty and type option of api */}
            <View style={styles.apiOptions}>
                <View style={styles.apiOptionsItemPicker}>
                    <Picker
                        selectedValue={selectedCategory}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedCategory(itemValue)
                        }
                    >
                        <Picker.Item label="Category" value="any" />
                        <Picker.Item value="9" label="General Knowledge" />
                        <Picker.Item value="10" label="Entertainment: Books" />
                        <Picker.Item value="11" label="Entertainment: Film" />
                        <Picker.Item value="12" label="Entertainment: Music" />
                        <Picker.Item
                            value="13"
                            label="Entertainment: Musicals"
                        />
                        <Picker.Item
                            value="14"
                            label="Entertainment: Television"
                        />

                        <Picker.Item
                            value="15"
                            label="Entertainment: Video Games"
                        />
                        <Picker.Item value="17" label="Science: Nature" />
                        <Picker.Item value="18" label="Science: Computers" />
                        <Picker.Item value="19" label="Science: Mathematics" />
                        <Picker.Item value="20" label="Mythology" />
                        <Picker.Item value="21" label="Sports" />
                        <Picker.Item value="22" label="Geography" />
                        <Picker.Item value="23" label="History" />
                        <Picker.Item value="25" label="Art" />
                        <Picker.Item value="26" label="Celebrities" />
                        <Picker.Item value="27" label="Animals" />
                        <Picker.Item value="28" label="Vehicles" />
                        <Picker.Item value="29" label="Entertainment: Comics" />
                        <Picker.Item value="30" label="Science: Gadgets" />
                    </Picker>
                </View>
                <View style={styles.apiOptionsItemPicker}>
                    <Picker
                        selectedValue={selectedDifficulty}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedDifficulty(itemValue)
                        }
                    >
                        <Picker.Item label="Difficulty" value="any" />
                        <Picker.Item label="Easy" value="easy" />
                        <Picker.Item label="Medium" value="medium" />
                        <Picker.Item label="Hard" value="hard" />
                    </Picker>
                </View>
                <View style={styles.apiOptionsItemPicker}>
                    <Picker
                        selectedValue={selectedType}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedType(itemValue)
                        }
                    >
                        <Picker.Item label="Type" value="any" />
                        <Picker.Item label="True or False" value="boolean" />
                        <Picker.Item label="Multiple" value="multiple" />
                    </Picker>
                </View>
            </View>

            <TouchableOpacity
                onPress={handleStartQuiz}
                style={[styles.notionlayout, styles.shadowProp]}
            >
                <Text style={styles.notionbutton}>START</Text>
            </TouchableOpacity>
            <Text style={styles.versionText}>Version 1.0.1</Text>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        paddingTop: 31,
        paddingHorizontal: 16,
        height: "100%",
        paddingBottom: 10,
        backgroundColor: "#fbfcfd",
    },
    bannerContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    banner: {
        height: 300,
        width: 300,
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
        fontFamily: "Inter_400Regular",
    },
    shadowProp: {
        shadowColor: "#CED4DA",
        shadowOffset: {
            width: -1,
            height: 0.5,
        },
        shadowOpacity: 1,
        // shadowRadius: 3.84,
        shadowRadius: 1.84,

        elevation: 5,
    },
    versionText: {
        fontSize: 11,
        color: "#2b2d42",
        textAlign: "center",
        fontFamily: "Inter_400Regular",
    },
    apiOptions: {},
    apiOptionsItem: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderRadius: 9,
        paddingVertical: 9,
        paddingHorizontal: 7,
        borderColor: "#d7dbdf",
        // alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        marginVertical: 2,
    },
    apiOptionsItemPicker: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderRadius: 9,
        paddingVertical: 1,
        paddingHorizontal: 1,
        borderColor: "#d7dbdf",
        // alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        marginVertical: 2,
    },
    apiOptionstext: {
        fontSize: 17,
        fontFamily: "Inter_400Regular",
    },
});
