import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";

const BodyPartScreen = ({ route, navigation }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
      }}
    >
      <Text>Body part</Text>
    </View>
  );
};

export default BodyPartScreen;
