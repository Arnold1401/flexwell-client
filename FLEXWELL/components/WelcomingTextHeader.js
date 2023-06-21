import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { textPrimary } from "../color-and-size.config";
import { getData } from "../async";

const WelcomingTextHeader = () => {
  const [username, setUsername] = useState("");
  const test = async () => {
    const userData = JSON.parse(await getData("userData"));
    console.log(userData, "ini welcome ");
    setUsername(userData.username);
  };
  useEffect(() => {
    test();
  }, [username]);

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
        {username}
      </Text>
    </View>
  );
};

export default WelcomingTextHeader;
