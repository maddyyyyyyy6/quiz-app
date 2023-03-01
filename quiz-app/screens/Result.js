import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Button from '../components/Button'

const Result = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image source={{ uri: "https://cdni.iconscout.com/illustration/premium/thumb/q-and-a-service-3678714-3098907.png?f=webp" }}
          style={styles.banner}
          resizeMode="contain"

        />
      </View>
      <View>

        <Button text="Home" navigate={navigation.navigate} to="Home" />
      </View>
    </View>
  )
}

export default Result


const styles = StyleSheet.create({
  container: {
    paddingTop: 31,
    paddingHorizontal: 16
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  banner: {
    height: 300,
    width: 300
  }
})