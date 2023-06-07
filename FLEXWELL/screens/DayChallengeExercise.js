import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import LottieView from "lottie-react-native";
import Modal from "react-native-modal";
import { Stopwatch } from "react-native-stopwatch-timer";

import {
  primaryColor,
  secondaryColor,
  textAccent,
  textAccentSecondary,
  textPrimary,
  textSecondary,
} from "../color-and-size.config";
import { FlatList } from "react-native-web";

const lockAnimation = require("../assets/lottie/lock.json");
const successBadge = require("../assets/lottie/success-badge.json");

const DayChallengeExcercise = ({ route, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [messageModal, setModalMessage] = useState("");
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);

  const [visibleModal, setVisibleModal] = useState(false);

  const [myTime, setMyTime] = useState();

  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(90000);
  const [resetTimer, setResetTimer] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  const { challenge } = route.params;
  let arr = {};
  {
    /* 
    {

    }
*/
  }

  const TheModal = ({ data }) => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        // Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Stopwatch
            laps
            msecs
            start={isStopwatchStart}
            //To start
            reset={resetStopwatch}
            //To reset
            options={options}
            //options for the styling
            getTime={(time) => {
              if (!isStopwatchStart) {
                setMyTime(changeTime(time));
                console.log("akhir", time);
              }
              // setMyTime(changeTime(time));
              console.log(time);
            }}
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              setModalVisible(!modalVisible);
              stopthetimer({ data });
            }}
          >
            <Text style={styles.textStyle}>Ok</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );

  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: primaryColor,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
    },
  });

  const startthetimer = () => {
    setIsStopwatchStart(true);
  };

  const stopthetimer = (id) => {
    setIsStopwatchStart(false);
    arr[id] = myTime;
    console.log("ini my time", myTime);
  };

  const options = {
    container: {
      backgroundColor: primaryColor,
      padding: 5,
      borderRadius: 5,
      width: 200,
      alignItems: "center",
    },
    text: {
      fontSize: 30,
      color: textPrimary,
      marginLeft: 7,
      fontWeight: "bold",
    },
  };

  const changeTime = (timee) => {
    const waktu = timee;
    const bagianWaktu = waktu.split(":");

    const jam = parseInt(bagianWaktu[0]);
    const menit = parseInt(bagianWaktu[1]);
    const detik = parseInt(bagianWaktu[2]);
    const milidetik = parseInt(bagianWaktu[3]);

    let totalMenit = jam * 60 * 60 + menit;
    totalMenit += Math.ceil(detik / 60);
    console.log("totalmenti", timee);
    return totalMenit;
  };

  const ListItem = ({ item }) => {
    const data = item.id;
    return (
      <View
        key={item.id}
        style={{
          flexDirection: "column",
          flex: 1,
          padding: 10,
          gap: 10,
          borderRadius: 10,
          // borderWidth: 10,
          marginBottom: 10,
          backgroundColor: "blue",
        }}
      >
        <TouchableOpacity
          style={{
            gap: 8,
            height: 90,
            flexDirection: "row",
            overflow: "hidden",
            borderRadius: 16,
            borderWidth: 0.8,
          }}
          onPress={() => (status ? setStatus(false) : setStatus(true))}
        >
          <View style={{ height: 90, flex: 2 }}>
            <Image
              source={{ uri: item.gifUrl }}
              style={{ width: 100, height: 100 }}
            />
          </View>
          <View style={{ flex: 6 }}>
            <View
              style={{
                flexDirection: "column",
                marginRight: 8,
                gap: 4,
                justifyContent: "center",
                height: "100%",
              }}
            >
              <View style={{ backgroundColor: "white" }}>
                <Text style={{ fontFamily: "Poppins", fontSize: 16 }}>
                  {item.name}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    paddingVertical: 4,
                    paddingHorizontal: 8,
                    backgroundColor: primaryColor,
                    alignSelf: "baseline",
                    borderRadius: 16,
                    fontFamily: "Montserrat-Bold",
                    fontSize: 10,
                    color: textPrimary,
                  }}
                >
                  SHOULDERS
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: secondaryColor,
            borderRadius: 16,
            paddingHorizontal: 16,
            paddingVertical: 16,
            height: 120,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
                gap: 8,
                borderRightWidth: 1,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                }}
              >
                sets
              </Text>
              <Text
                style={{
                  color: "black",
                  fontSize: 32,
                  fontFamily: "Poppins",
                  paddingHorizontal: 8,
                  borderRadius: 8,
                  height: 34,
                }}
              >
                1
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
                gap: 8,
                marginLeft: 8,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                }}
              >
                reps
              </Text>
              <Text
                style={{
                  // backgroundColor: primaryColor,
                  // color: textPrimary,
                  color: "black",
                  fontSize: 32,
                  fontFamily: "Poppins",
                  paddingHorizontal: 8,
                  borderRadius: 8,
                  height: 34,
                }}
              >
                12
              </Text>
            </View>
            <View></View>
          </View>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
              startthetimer();
            }}
          >
            <View
              style={{
                backgroundColor: primaryColor,
                alignItems: "center",
                paddingVertical: 4,
                borderRadius: 16,
                marginTop: 16,
              }}
            >
              <Text
                style={{
                  color: textPrimary,
                  fontSize: 16,
                  fontFamily: "Poppins",
                }}
              >
                START
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TheModal data={data} />
        <View style={{ flex: 1 }}></View>
      </View>
    );
  };

  console.log(myTime, "ini waktu terbaru");

  const FlatListWithAvatar = () => {
    const exercises = challenge.exercises;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={exercises}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem item={item} />}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 30 }}>
      <ScrollView>
        {challenge.exercises.map((item, index) => (
          <ListItem item={item} style={{ flex: 1 }} />
        ))}
      </ScrollView>

      {/* <FlatListWithAvatar /> */}
    </View>
  );
};

export default DayChallengeExcercise;
