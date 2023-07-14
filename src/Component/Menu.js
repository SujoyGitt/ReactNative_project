import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-web";
const Menu = () => {
  let Navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.menuLink}
        onPress={() => Navigation.navigate("Course")}
      >
        <Image
          style={styles.menuIcon}
          source={require("../../assets/course certificate.gif")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuLink}
        onPress={() => Navigation.navigate("About")}
      >
        <Image
          style={styles.menuIcon}
          source={require("../../assets/contact (1).png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuLink}
        onPress={() => Navigation.navigate("Userdata")}
      >
        <Image
          style={styles.menuIcon}
          source={require("../../assets/student.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuLink}
        onPress={() => Navigation.navigate("Contact")}
      >
        <Image
          style={styles.menuIcon}
          source={require("../../assets/contact.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 15,
  },
  menuIcon: {
    width: 40,
    aspectRatio: 1,
  },
});
