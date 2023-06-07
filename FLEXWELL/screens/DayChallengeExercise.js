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

const lockAnimation = require("../assets/lottie/lock.json");
const successBadge = require("../assets/lottie/success-badge.json");

const DayChallengeExcercise = ({ route, navigation }) => {
  const [reps, setReps] = useState(true);
  const [status, setStatus] = useState(false);

  const [visibleModal, setVisibleModal] = useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  const renderButton = (text, onPress) => (
    <TouchableOpacity
      onPress={onPress}
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
    </TouchableOpacity>
  );

  const options = {
    container: {
      padding: 8,
      borderRadius: 5,
      width: 200,
      alignItems: "center",
    },
    text: {
      fontSize: 25,
      color: textPrimary,
      marginLeft: 7,
      fontWeight: "bold",
    },
  };

  const renderModalContent = () => (
    <View
      style={{
        // backgroundColor: "white",
        padding: 22,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)",
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Stopwatch
          laps
          msecs
          start={isStopwatchStart}
          reset={resetStopwatch}
          options={options}
          getTime={(time) => {
            console.log(time);
          }}
        />
        <View
          style={{
            flexDirection: "column",
            width: "80%",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 8,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIsStopwatchStart(!isStopwatchStart);
              setResetStopwatch(false);
            }}
            style={{
              height: 200,
              width: 200,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 100,
              backgroundColor: secondaryColor,
            }}
          >
            <Text
              style={{
                color: textAccentSecondary,
                fontSize: 40,
                borderRadius: 16,
                fontWeight: 500,
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
                color: textAccent,
                fontSize: 20,
                backgroundColor: textAccentSecondary,
                paddingVertical: 8,
                paddingHorizontal: 16,
                borderRadius: 16,
                fontWeight: 500,
              }}
            >
              RESET
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {renderButton("Close", () => setVisibleModal(false))}
    </View>
  );

  useEffect(() => {
    console.log("visibleModal berubah:", visibleModal);
  }, [visibleModal]);

  const ListItem = ({ item }) => (
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          marginHorizontal: 16,
          marginVertical: 24,
          gap: 16,
          height: status ? "auto" : 80,
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
                // marginTop: 8,
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
          {renderButton("Start", () => setVisibleModal(true))}
          <Modal
            isVisible={visibleModal === true}
            backdropColor={primaryColor}
            backdropOpacity={1}
            animationIn={"tada"}
            animationOut={"fadeOutDownBig"}
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
    </ScrollView>
  );

  return <ListItem />;
};

export default DayChallengeExcercise;
