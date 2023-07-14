import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import React from "react";

const About = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "DancingScript-Regular": require("../../assets/fonts/DancingScript-Regular.ttf"),
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
  });
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.headerText}>Sujoy Ghoshal</Text>
      <Text style={styles.occupation}>I'm Front-End Devoloper 😄</Text>
      <View>
        <Image
          source={require("../../assets/profile.jpg")}
          style={styles.imgStyle}
        />
      </View>
      <View style={styles.aboutLayout}>
        <Text style={styles.aboutHeader}>ABOUT ME</Text>
        <Text style={styles.aboutText}>
          Highly motivated and detail-oriented frontend developer with a solid
          foundation in HTML, CSS, JavaScript, React JS. Seeking a fresher
          position as a frontend developer, where I can utilize my technical
          skills and creativity.
        </Text>
      </View>
      <Text style={[styles.occupation,{marginTop:10}]}>Follow On My Social Network</Text>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() =>
            Linking.openURL("https://www.instagram.com/sujoy7h9s1l/")
          }
        >
          <Image
            style={styles.iconStyle}
            source={require("../../assets/logo.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() =>
            Linking.openURL(
              "https://www.youtube.com/channel/UC-MciUiQ8HPojWEbY8aU3FA"
            )
          }
        >
          <Image
            style={[styles.iconStyle,{width:70}]}
            source={{
              uri: "https://www.freepnglogos.com/uploads/youtube-logo-png-images-0.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() =>
            Linking.openURL(
              "https://www.linkedin.com/in/sujoy-ghosal-722282248/"
            )
          }
        >
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://www.freepnglogos.com/uploads/linkedin-social-media-logo-7.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: 500,
    marginTop: 30,
    marginBottom: 10,
  },
  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: "50%",
  },
  occupation: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 20,
  },
  aboutLayout: {
    fontFamily: "Poppins-Regular",
    padding: 15,
    backgroundColor: "#4c5dad",
    paddingHorizontal:30,
    marginTop:20
  },
  aboutHeader:{
    fontSize:20,
    textAlign:"center",
    color:"#eee",
    marginBottom:10,
    fontWeight:500
  },
  aboutText:{
    color:"lightgrey",
    fontSize:13
  },
  menuContainer:{
    width:'100%',
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center"
  },
  iconStyle:{
    width:50,
    aspectRatio:1
  }
});
