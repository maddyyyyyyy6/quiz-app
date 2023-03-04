import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    ToastAndroid,
} from "react-native";
import Title from "../components/Title";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";

const Home = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        Inter_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }
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
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Quiz");
                }}
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
        shadowColor: "#000000",
        shadowOffset: {
            width: -1,
            height: 0.5,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.84,

        elevation: 5,
    },
    versionText: {
        fontSize: 11,
        color: "#2b2d42",
        textAlign: "center",
        fontFamily: "Inter_400Regular",
    },
});
