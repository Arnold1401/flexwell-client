import React, { useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  TouchableHighlight,
} from "react-native";
import Modal from "react-native-modal";
import { Stopwatch } from "react-native-stopwatch-timer";
import {
  primaryColor,
  secondaryColor,
  textAccent,
  textAccentSecondary,
  textPrimary,
} from "../color-and-size.config";

const Example = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  const renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: "lightblue",
          padding: 12,
          margin: 16,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 4,
          borderColor: "rgba(0, 0, 0, 0.1)",
        }}
      >
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  const options = {
    container: {
      // backgroundColor: "white",
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

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {renderButton("Fancy modal!", () => setVisibleModal(true))}
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
  );
};

export default Example;
