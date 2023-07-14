import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native-web";
import { CourseApi } from "../api/courseApi";
import { useFonts } from "expo-font";
const Course = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) return;
  return (
    <FlatList
      data={CourseApi}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <View style={styles.mainContainer}>
            <View style={styles.courseContainer}>
              <Image
                source={item.image}
                style={styles.courseImg}
                resizeMode="contain"
              />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
              <View style={styles.btnGroup}>
                <TouchableOpacity
                  style={styles.cardBtn}
                  onPress={() =>
                    navigation.navigate("CourseDetails", { courseId: item.id })
                  }
                >
                  <Text style={styles.btnText}>Show More</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
};

export default Course;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
  },
  courseContainer: {
    padding: 20,
    backgroundColor: "#fff",
    marginVertical: 15,
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.4,
    elevation: 8,
  },
  courseImg: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  cardTitle: {
    fontSize: 22,
    color: "#344055",
    fontFamily: "Poppins-Regular",
    textTransform: "uppercase",
    fontWeight: 500,
    paddingBottom: 15,
  },
  cardDescription: {
    fontFamily: "Roboto-Regular",
    lineHeight: 20,
    color: "#7d7d7d",
  },
  btnGroup: {
    display: "flex",
    flexDirection: "row",
  },
  cardBtn: {
    backgroundColor: "#809fff",
    borderBottomRightRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
    marginVertical: 15,
  },
  btnText: {
    color: "#fff",
    fontFamily: "Poppins",
  },
});
