import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";

const ProfileScreen = ({ route, navigation }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
      }}
    >
      <Text>ProfileScreen</Text>
      <Button
        title="go to personalize"
        onPress={() => {
          navigation.navigate("PersonalizeScreen");
        }}
      />
    </View>
  );
};

export default ProfileScreen;
