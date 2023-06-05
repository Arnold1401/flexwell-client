import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import LottieView from "lottie-react-native";
import {
  primaryColor,
  secondaryColor,
  textAccent,
  textAccentSecondary,
  textPrimary,
} from "../color-and-size.config";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FontAwesome5 } from "@expo/vector-icons";

const CustomExcScreen = ({ route, navigation }) => {
  // LOTTIE ada true
  const [isEmpty, setIsEmpty] = useState(false);
  const animation = require("../assets/lottie/custom-empty-1.json");

  const toDetailCustom = (id) => {
    console.log(id, "go to detail");
    navigation.navigate("CustomWorkoutList", { id });
  };

  return (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 2,
          display: isEmpty ? "flex" : "none",
          width: "100%",
        }}
      >
        <LottieView source={animation} autoPlay loop />
      </View>
      <TouchableOpacity
        style={{
          marginTop: 24,
          flexDirection: "row",
          width: "95%",
          alignItems: "center",
          justifyContent: "space-between",
          height: 80,
          backgroundColor: secondaryColor,
          borderRadius: 16,
          display: isEmpty ? "none" : "flex",
          borderWidth: 1.5,
          borderColor: textAccentSecondary,
        }}
        onPress={() => toDetailCustom()}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <FontAwesome5 name="dumbbell" size={24} color="black" />
        </View>
        <View
          style={{
            flex: 4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontFamily: "Poppins", fontSize: 16 }}>
            Push Day ala Flexwell
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <FontAwesome name={"chevron-circle-right"} size={24} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SelectedCustomExercise");
        }}
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          marginBottom: 40,
        }}
      >
        <Text
          style={{
            paddingVertical: 8,
            paddingHorizontal: 16,
            backgroundColor: primaryColor,
            borderRadius: 16,
            color: textPrimary,
            fontFamily: "Poppins",
            fontSize: 16,
          }}
        >
          Add Custom Workout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomExcScreen;
