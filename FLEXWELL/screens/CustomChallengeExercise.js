import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { Image } from "expo-image";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import {
  primaryColor,
  secondaryColor,
  textAccent,
  textAccentSecondary,
  textSecondary,
} from "../color-and-size.config";

const CustomChallengeExercise = ({ route, navigation }) => {
  const [reps, setReps] = useState(false);
  const [status, setStatus] = useState(true);

  const openToggle = () => {
    setReps(true);
  };

  const closeToggle = () => {
    setReps(false);
  };

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          marginHorizontal: 16,
          marginVertical: 24,
          gap: 16,
        }}
      >
        <View
          style={{
            gap: 8,
            height: 90,
            flexDirection: "row",
            overflow: "hidden",
            borderRadius: 16,
            borderWidth: 0.8,
          }}
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
                marginTop: 8,
                gap: 4,
              }}
            >
              <Text style={{ fontFamily: "Poppins", fontSize: 16 }}>
                Standing Cable Front Rise
              </Text>
              <Text
                style={{
                  paddingVertical: 4,
                  paddingHorizontal: 8,
                  backgroundColor: primaryColor,
                  alignSelf: "baseline",
                  borderRadius: 16,
                  fontFamily: "Montserrat-Bold",
                  fontSize: 10,
                  color: textSecondary,
                }}
              >
                SHOULDERS
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: secondaryColor,
            borderRadius: 16,
            paddingHorizontal: 16,
            paddingVertical: 16,
            height: !reps ? "auto" : 64,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flex: 1,
            }}
          >
            <View
              style={{
                borderRightWidth: 2,
                borderRightColor: textAccentSecondary,
                flex: 2,
              }}
            >
              <View style={{ flex: 1, marginTop: 8 }}>
                <Pressable onPress={reps ? closeToggle : openToggle}>
                  <Text style={{ fontFamily: "Montserrat-Bold" }}>12 kg</Text>
                </Pressable>
              </View>
              <View style={{ flex: 1, marginTop: 32 }}>
                <Text>Increase!</Text>
                <Text>Last: 7.50kg</Text>
                <Text>(12 reps)</Text>
              </View>
            </View>
            <View
              style={{
                borderRightWidth: 2,
                borderRightColor: textAccentSecondary,
                alignItems: "center",
                justifyContent: "flex-start",
                flex: 3,
              }}
            >
              <Pressable onPress={reps ? closeToggle : openToggle}>
                <Text
                  style={{
                    fontFamily: "Poppins",
                    fontSize: 24,
                  }}
                >
                  10-12 reps
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              <Pressable
                onPress={reps ? closeToggle : openToggle}
                style={{
                  width: "100%",
                  height: 56,
                  alignItems: "center",
                  marginTop: -20,
                  paddingTop: 20,
                  paddingLeft: 12,
                }}
              >
                <FontAwesome
                  name={!reps ? "chevron-up" : "chevron-down"}
                  style={{ color: textAccentSecondary }}
                  size={16}
                />
              </Pressable>
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  marginLeft: 2,
                  marginRight: -12,
                  marginTop: 8,
                  backgroundColor: primaryColor,
                  paddingHorizontal: 6,
                  borderRadius: 16,
                  paddingVertical: 4,
                  display: status ? "flex" : "none",
                }}
              >
                Did it!
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              display: reps ? "none" : "flex",
              width: "40%",
              marginTop: 16,
              gap: 4,
            }}
          >
            <FontAwesome name="chevron-right" size={16} />
            <Text>Target Weight: </Text>
            <Text>
              heavy enough to challenge you, but be able to hit to the top of
              the rep range
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CustomChallengeExercise;
