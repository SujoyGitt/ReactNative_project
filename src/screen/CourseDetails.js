import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CourseApi } from "../api/courseApi";
import { TouchableOpacity } from "react-native-web";

const CourseDetails = ({ navigation, route }) => {
  const id = route.params.courseId;
  let item = CourseApi.find((e) => id === e.id);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.courseContainer}>
        <Image
          source={item.image}
          style={styles.courseImg}
          resizeMode="contain"
        />
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={[styles.cardDescription, { marginBottom: 10 }]}>
          {item.description}
        </Text>
        <Text style={styles.cardDescription}>{item.course1}</Text>
        <Text style={styles.cardDescription}>{item.course2}</Text>
        <Text style={styles.cardDescription}>{item.course3}</Text>
        <Text style={styles.cardDescription}>{item.course4}</Text>
        <Text style={styles.cardDescription}>{item.course5}</Text>
        <View style={styles.btnGroup}>
          <Text style={[{ color: "red", fontSize: 20, marginVertical: 10 }]}>
            $ {item.price}
          </Text>
          <TouchableOpacity
            style={styles.cardBtn}
            onPress={() =>
              navigation.navigate("CourseDetails", { courseId: item.id })
            }
          >
            <Text style={styles.btnText}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CourseDetails;

const styles = StyleSheet.create({
  mainContainer: {
    height: "auto",
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
    color: "#1e2e3e",
  },
  btnGroup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
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
