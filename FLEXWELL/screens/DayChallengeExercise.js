import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";

const DayChallengeExcercise = ({ route, navigation }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        // backgroundColor: "blue",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          marginTop: 32,
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          //   backgroundColor: "red",
          flexDirection: "column",
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text>Form </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            borderWidth: 2,
            margin: 10,
          }}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <Text>Image</Text>
          </View>
          <View
            style={{
              flex: 2,
            }}
          >
            <View
              style={{
                flex: 1,
              }}
            >
              <Text>Lateral Raises</Text>
            </View>
            <View
              style={{
                flex: 1,
              }}
            >
              <Text>Shoulder</Text>
            </View>
          </View>
        </View>

        <View
          style={{ flexDirection: "row", flex: 1, borderWidth: 1, margin: 20 }}
        >
          <View style={{ flex: 1 }}>
            <Text>Test</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>Test</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>V</Text>
          </View>
        </View>

        <View
          style={{ flexDirection: "row", flex: 1, borderWidth: 1, margin: 20 }}
        >
          <View style={{ flex: 1 }}>
            <Text>Test</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>Test</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>V</Text>
          </View>
        </View>

        <View
          style={{ flexDirection: "row", flex: 1, borderWidth: 1, margin: 20 }}
        >
          <View style={{ flex: 1 }}>
            <Text>Test</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>Test</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>V</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DayChallengeExcercise;
