import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    ToastAndroid,
} from "react-native";
import Title from "../components/Title";

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Title />
            <View style={styles.bannerContainer}>
                <Image
                    source={{
                        uri: "https://cdni.iconscout.com/illustration/premium/thumb/online-question-answer-5651149-4714812.png",
                    }}
                    style={styles.banner}
                    resizeMode="contain"
                />
            </View>
            <TouchableOpacity
                onPress={() => {
                    ToastAndroid.show(
                        "A pikachu appeared nearby !",
                        ToastAndroid.SHORT
                    );
                    navigation.navigate("Quiz");
                }}
                style={styles.notionlayout}
            >
                <Text style={styles.notionbutton}>START</Text>
            </TouchableOpacity>
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
        borderRadius: 7,
        // width: 70,
        alignItems: "center",
        justifyContent: "center",
    },
    notionbutton: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        paddingVertical: 7,
        paddingHorizontal: 9,
        fontFamily: "",
    },
});
