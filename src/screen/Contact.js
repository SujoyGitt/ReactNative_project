import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { useState } from "react";
import Checkbox from "expo-checkbox";
const Contact = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "DancingScript-Regular": require("../../assets/fonts/DancingScript-Regular.ttf"),
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
  });
  const SubmitEvent = () => {
    if (!name && !email && !phone && !message) {
      Alert.alert("plese fill all fields");
      console.log("plz fill all the fields");
    } else {
      Alert.alert(`Thank You ${name}`);
      console.log(`Thank You ${name}`);
      navigation.navigate("Home")
    }
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.contactHeader}>Lavel Up Your Knowledge</Text>
      <Text style={styles.description}>
        You Can Reach Us Any Time Via sujoy143656@gmail.com
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Your Name</Text>
        <TextInput
          style={styles.input}
          placeholder={"Sujoy Ghoshal"}
          value={name}
          onChangeText={(userName) => setname(userName)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Your Email</Text>
        <TextInput
          style={styles.input}
          placeholder={"sujoy143656@gmail.com"}
          value={email}
          onChangeText={(userEmail) => setemail(userEmail)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Your Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder={"+91 9064171925"}
          value={phone}
          onChangeText={(userPhone) => setphone(userPhone)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>How can I help you?</Text>
        <TextInput
          style={[styles.input]}
          placeholder={"Tell Us About Your Self"}
          numberOfLines={5}
          multiline={true}
          value={message}
          onChangeText={(userMessage) => setmessage(userMessage)}
        />
      </View>
      {/* checkbox */}
      <View style={styles.checkWrapper}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#4630EB" : undefined}
        />
        <Text
          style={[styles.checkText, { color: isChecked ? "black" : "#7d7d7d" }]}
        >
          I have read and agreed with the TC.
        </Text>
      </View>
      <TouchableOpacity
        disabled={!isChecked}
        style={[
          styles.btnStyle,
          { backgroundColor: isChecked ? "#4630eb" : "grey" },
        ]}
        onPress={()=>SubmitEvent()}
      >
        <Text style={styles.btnText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  contactHeader: {
    fontSize: 20,
    color: "#344055",
    fontWeight: 500,
    paddingTop: 20,
    paddingBottom: 15,
    fontFamily: "Poppins-Regular",
  },
  description: {
    fontSize: 19,
    paddingBottom: 10,
    fontFamily: "Roboto-Regular",
    color: "#7d7d7d",
    lineHeight: 25,
  },
  inputContainer: {
    marginTop: 20,
  },
  label: {
    fontWeight: "bold",
    color: "#7d7d7d",
    paddingBottom: 5,
    fontFamily: "Roboto-Regular",
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 3,
    color: "#7d7d7d",
  },
  checkWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "space-around",
  },
  btnStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  btnText: {
    color: "#fff",
  },
});
export default Contact;
