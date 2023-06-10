import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
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
  const [data, setData] = useState({});
  const [status, setStatus] = useState(false);
  const [modalFinish, setModalFinish] = useState(false);

  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleModalFinish, setVisibleModalFinish] = useState(false);

  const [myTime, setMyTime] = useState(null);

  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  const [currid, setcurrid] = useState();

  let { challenge } = route.params;
  let timer = 0;
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
              console.log(time);
              if (!isStopwatchStart) {
                setMyTime(time);
                console.log("masuk karena false");
              }
              timer = time;
            }}
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              stopthetimer(data);
              setModalVisible(false);
              setMyTime(timer);
            }}
          >
            <Text style={styles.textStyle}>Ok</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );

  const myAlert = () => alert("Congratulations!");

  const styles = StyleSheet.create({
    centeredView: {
      flex: 2,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      width: "100%",
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
      borderRadius: 16,
      paddingHorizontal: 45,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      marginTop: 8,
      backgroundColor: textAccentSecondary,
      color: textPrimary,
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

  const startthetimer = (id) => {
    setcurrid(id);
    setIsStopwatchStart(true);
  };

  const indexNumber = [];

  const stopthetimer = (id) => {
    console.log(id, "id exercise");
    setIsStopwatchStart(false);
    setResetStopwatch(true);
    setMyTime(timer);
    let arr = data;
    arr[id] = myTime;
    setData(arr);
    console.log("ini arr my time", data);

    for (let i = 0; i < challenge.exercises.length; i++) {
      if (challenge.exercises[i].id === currid) {
        challenge.exercises[i].duration.status = "recorded";
        challenge.exercises[i].duration.duration = changeTime(timer);
      }
    }
  };

  const options = {
    container: {
      backgroundColor: primaryColor,
      padding: 5,
      borderRadius: 5,
      width: 250,
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

    const jam = parseInt(bagianWaktu[0]) * 3600;
    const menit = parseInt(bagianWaktu[1]) * 60;
    const detik = parseInt(bagianWaktu[2]);
    const milidetik = parseInt(bagianWaktu[3]) / 60000;
    console.log(jam, menit, detik, milidetik);
    let totalMenit = jam + menit + detik + milidetik;
    totalMenit = Math.ceil(totalMenit / 60);
    console.log("totalmenti", timee);
    return totalMenit;
  };

  const ListItem = ({ item }) => {
    const data = item.id;
    console.log(item, "flatlist");
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
        }}
      >
        <TouchableOpacity
          style={{
            gap: 8,
            height: 100,
            flexDirection: "row",
            overflow: "hidden",
            borderRadius: 16,
            borderWidth: 0.8,
          }}
          onPress={() => (status ? setStatus(false) : setStatus(true))}
        >
          <View style={{ height: 100, flex: 3 }}>
            <Image
              source={{
                uri: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Preacher-Curl.gif",
              }}
              style={{ width: 100, height: 100 }}
              resizeMode="cover"
            />
          </View>
          <View style={{ flex: 6 }}>
            <View
              style={{
                flexDirection: "column",
                marginRight: 8,
                gap: 4,
                justifyContent: "flex-start",
                height: "100%",
                marginTop: 4,
              }}
            >
              <View style={{ backgroundColor: "white" }}>
                <Text
                  style={{ fontFamily: "Poppins", fontSize: 16 }}
                  numberOfLines={2}
                >
                  {item.name}
                </Text>
              </View>
              <View
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  backgroundColor: primaryColor,
                  alignSelf: "baseline",
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  marginTop: 4,
                }}
              >
                <Text
                  style={{
                    alignSelf: "baseline",
                    borderRadius: 16,
                    fontFamily: "Montserrat-Bold",
                    fontSize: 12,
                    color: textPrimary,
                  }}
                >
                  {item.bodyPart}
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
                {item.totalSet}
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
                {item.repetition}
              </Text>
            </View>
            <View></View>
          </View>
          {/* <Text> {JSON.stringify(item.duration)}</Text> */}
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
              startthetimer(item.id);
            }}
          >
            <View
              style={{
                backgroundColor:
                  item.duration.status === "none"
                    ? primaryColor
                    : item.duration === null
                    ? primaryColor
                    : "grey",
                alignItems: "center",
                paddingVertical: 8,
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
                {item?.duration?.status === "recorded"
                  ? `${item?.duration?.duration} minutes`
                  : "START"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TheModal data={item.id} />
        <View style={{ flex: 1 }}></View>
      </View>
    );
  };

  // useEffect(() => {
  //   console.log("myTime: ", myTime);
  // }, [myTime]);

  return (
    <ScrollView>
      <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 30 }}>
        <ScrollView>
          {challenge.exercises.map((item, index) => (
            <ListItem item={item} style={{ flex: 1 }} />
          ))}
          <TouchableOpacity
            onPress={() => {
              console.log(JSON.stringify(challenge));
              myAlert();
              navigation.navigate("30DayChallenge");
            }}
            style={{
              backgroundColor: textAccentSecondary,
              marginHorizontal: 16,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
              marginBottom: 16,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.29,
              shadowRadius: 4.65,

              elevation: 7,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins",
                color: textPrimary,
                fontSize: 20,
                paddingVertical: 8,
              }}
            >
              Finish Challenge
            </Text>
          </TouchableOpacity>
        </ScrollView>

        {/* <FlatListWithAvatar /> */}
      </View>
    </ScrollView>
  );
};

export default DayChallengeExcercise;
