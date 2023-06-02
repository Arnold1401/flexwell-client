import { View, Text } from "react-native";
import React from "react";
import { textPrimary } from "../color-and-size.config";

const WelcomingTextHeader = () => {
  return (
    <View style={{ flexDirection: "column" }}>
      <Text
        style={{
          fontFamily: "Montserrat-Bold",
          color: textPrimary,
        }}
      >
        Hi,
      </Text>
      <Text
        style={{
          fontFamily: "Poppins",
          fontSize: 20,
          color: textPrimary,
        }}
      >
        Itan Sutarlan
      </Text>
    </View>
  );
};

export default WelcomingTextHeader;
