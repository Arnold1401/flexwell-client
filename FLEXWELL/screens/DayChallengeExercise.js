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
          <Text style={styles.modalText}>{messageModal}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
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

  const [status, setStatus] = useState(false);

  const [visibleModal, setVisibleModal] = useState(false);

  const [myTime, setMyTime] = useState(null);

  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(90000);
  const [resetTimer, setResetTimer] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  const { challenge } = route.params;

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

  const renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
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
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const changeTime = () => {
    const waktu = "00:60:02:993";
    const bagianWaktu = waktu.split(":");

    const jam = parseInt(bagianWaktu[0]);
    const menit = parseInt(bagianWaktu[1]);
    const detik = parseInt(bagianWaktu[2]);
    const milidetik = parseInt(bagianWaktu[3]);

    let totalMenit = jam * 60 * 60 + menit;
    totalMenit += Math.ceil(detik / 60);

    return totalMenit;
  };

  const renderModalContent = () => (
    <View
      style={{
        backgroundColor: primaryColor,
        padding: 22,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)",
      }}
    >
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
          }
          console.log(time);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          setIsStopwatchStart(!isStopwatchStart);
          setResetStopwatch(false);
        }}
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 200,
          width: 200,
          backgroundColor: secondaryColor,
          borderRadius: 100,
          marginTop: 24,
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontFamily: "Poppins",
          }}
        >
          {!isStopwatchStart ? "START" : "STOP"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setIsStopwatchStart(false);
          setResetStopwatch(true);
        }}
      >
        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
          }}
        >
          RESET
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setVisibleModal(false)}
        style={{
          backgroundColor: textSecondary,
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderRadius: 16,
          marginTop: 24,
        }}
      >
        <Text
          style={{
            color: textPrimary,
          }}
        >
          Close
        </Text>
      </TouchableOpacity>
    </View>
  );

  const ListItem = ({ item }) => (
    <View
      style={{
        flexDirection: "column",
        marginHorizontal: 16,
        marginVertical: 24,
        gap: 16,
        height: 90,
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
          <View
            style={{ backgroundColor: "grey", width: "100%", height: "100%" }}
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
            <View>
              <Text style={{ fontFamily: "Poppins", fontSize: 16 }}>
                Standing Cable Front Rise
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
      {/* Finished */}
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
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: textAccent,
            alignItems: "center",
            paddingVertical: 4,
            borderRadius: 16,
            marginTop: 16,
          }}
        >
          <Text
            style={{
              color: textAccentSecondary,
              fontSize: 16,
              fontFamily: "Poppins",
            }}
          >
            Done
          </Text>
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
        >
          <LottieView source={successBadge} autoPlay loop />
        </View>
      </View>
      {/* On Going */}
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
        </View>
        {renderButton("Start", () => setVisibleModal(true))}
        <Modal
          isVisible={visibleModal}
          backdropColor={primaryColor}
          backdropOpacity={1}
          animationIn={"shake"}
          animationOut={"bounceOutDown"}
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1000}
        >
          {renderModalContent()}
        </Modal>
      </View>
      {/* Lock */}
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
        </View>
        <TouchableOpacity
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
            Start
          </Text>
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
        >
          <LottieView source={lockAnimation} autoPlay loop />
        </View>
      </View>
    </View>
  );

  console.log(myTime, "ini waktu terbaru");

  const FlatListWithAvatar = () => (
    <View style={{ flex: 1 }}>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.exerciseId}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </View>
  );

  return (
    <View>
      <ListItem />
    </View>
  );
};

export default DayChallengeExcercise;
