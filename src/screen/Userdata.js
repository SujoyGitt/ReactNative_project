import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
const Userdata = () => {
  //get font family
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "DancingScript-Regular": require("../../assets/fonts/DancingScript-Regular.ttf"),
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
  });

  //some variable
  const [load, setload] = useState(true);
  const [data, setdata] = useState([]);
  //get data from server

  useEffect(() => {
    const getUserData = async () => {
      try {
        let response = await fetch(
          "https://thapatechnical.github.io/userapi/users.json"
        );
  
        let realData = await response.json();
        setdata(realData);
        setload(false);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText}>Lists of Students</Text>

      {data ? (
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <View style={styles.imgContainer}>
                  <Image style={styles.imgStyle} source={{ uri: item.image }} />
                </View>
                <View style={styles.cardContent}>
                  <View style={styles.biodataContainer}>
                    <Text style={styles.biodata}>Bio-Data</Text>
                    <Text style={styles.idNumber}>
                      {item.id < 10 ? `#0${item.id}` : `#${item.id}`}
                    </Text>
                  </View>
                  <View style={styles.details}>
                    <Text style={styles.myName}>Name : {item.name}</Text>
                    <Text style={styles.myName}>Email : {item.email}</Text>
                    <Text style={styles.myName}>Phone : {item.mobile}</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      ):<Text style={styles.headerText}>Your Data Is Not Found</Text>}
    </View>
  );
};

export default Userdata;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    minHeight: "100%",
    paddingVertical: 20,
    backgroundColor: "#ebedee",
  },
  card: {
    width: 250,
    height: 350,
    backgroundColor: "#fff",
    borderRadius: 5,
    margin: 15,
  },
  cardContent: {
    padding: 10,
    backgroundColor: "#353535",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  headerText: {
    fontSize: 30,
    color: "#a18ce5",
    textAlign: "center",
    fontFamily: "Poppins-Regular",
  },
  imgContainer: {
    padding: 10,
  },
  imgStyle: {
    width: "100%",
    height: 180,
  },
  biodataContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#353535",
    paddingVertical: 10,
    fontFamily: "Poppins-Regular",
  },
  biodata: {
    fontSize: 30,
    color: "rgba(255,255,255,0.5)",
    fontFamily: "Roboto-Regular",
  },
  idNumber: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "Poppins-Regular",
    paddingRight: 10,
  },
  myName: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
    textTransform: "capitalize",
    alignSelf: "flex-start",
  },
});
