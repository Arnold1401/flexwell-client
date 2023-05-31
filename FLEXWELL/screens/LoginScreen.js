import React from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import logo from "../assets/logo.png";
import { textWhite } from "../color-and-size.config";

const LoginScreen = ({ navigation }) => {
  return (
    <View
      style={{
        alignItems: "center",
        flex: 1,
      }}
    >
      <View style={{ flex: 1 }}>
        <Image
          style={{
            flex: 1,
            width: 270,
            height: 270,
          }}
          contentFit="cover"
          source={logo}
          transition={1000}
        />
      </View>
      <View style={{ flex: 1, marginTop: 32 }}>
        <Pressable style={{ flex: 1 }}>
          <Text style={{ color: textWhite }}>Sign In</Text>
        </Pressable>
        <Pressable
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={{ color: textWhite }}>Don't have account yet</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;
