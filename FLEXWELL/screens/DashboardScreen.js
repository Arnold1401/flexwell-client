import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";

const DashboardScreen = ({ route, navigation }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
      }}
    >
      <Text>DashboardScreen</Text>
    </View>
  );
};

export default DashboardScreen;
