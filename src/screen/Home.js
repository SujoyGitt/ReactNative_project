import { Image, StyleSheet, Text, View } from "react-native";
import Menu from "../Component/Menu";
import React from "react";
import { useFonts } from "expo-font";
const Home = ({ appName }) => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "DancingScript-Regular": require("../../assets/fonts/DancingScript-Regular.ttf"),
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
  });
 if (!fontsLoaded) return;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/Khata book.jpg")}
          style={styles.homeImg}
        />
        <Text style={[styles.welcomeText, { fontSize: 26 }]}>Welcome To</Text>
        <Text style={[styles.welcomeText, { color: "#4c5dac" }]}>
          {appName}
        </Text>
        <Text style={styles.parastyle}>
          Online education is a flexible method of providing instruction that
          includes all online learning.
        </Text>
      </View>
      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View style={styles.lineStyle}></View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    textAlign: "center",
  },
  container: {
    width: "100%",
  },
  homeImg: {
    height: 200,
    aspectRatio: 1,
    marginVertical: 50,
    borderRadius: 15,
  },
  welcomeText: {
    fontSize: 29,
    textTransform: "uppercase",
    fontFamily: "Poppins-Regular",
  },
  parastyle: {
    textAlign: "left",
    fontSize: 17,
    color: "#7d7d7d",
    marginTop: 20,
    fontFamily: "Roboto-Regular",
  },
  lineStyle: {
    width: "100%",
    height: 1,
    backgroundColor: "#ccc",
  },
  menuStyle: {
    width: "100%",
    position: "absolute",
    bottom: 10,
    left: 0,
  },
});
