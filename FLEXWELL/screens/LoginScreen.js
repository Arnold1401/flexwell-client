import React from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import logo from "../assets/logo.png";
import { Sae, Fumi } from "react-native-textinput-effects";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  accentColor,
  buttonTextSize,
  primaryColor,
  secondaryColor,
  textPrimary,
  textSecondary,
} from "../color-and-size.config";

const LoginScreen = ({ navigation }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
      }}
    >
      <View
        style={{
          marginTop: 32,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: 200,
            height: 200,
            backgroundColor: "black",
            borderRadius: 32,
          }}
          contentFit="contain"
          source={logo}
          transition={2500}
        />
      </View>
      <View
        style={{
          marginTop: 32,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Fumi
          label={"Username"}
          iconClass={FontAwesome}
          iconName={"user"}
          iconColor={secondaryColor}
          iconSize={24}
          iconWidth={40}
          inputPadding={16}
          style={{
            width: "90%",
            borderRadius: 16,
          }}
        />
        <Fumi
          label={"Password"}
          iconClass={FontAwesome}
          iconName={"key"}
          iconColor={secondaryColor}
          iconSize={24}
          iconWidth={40}
          inputPadding={16}
          style={{
            width: "90%",
            borderRadius: 16,
          }}
          secureTextEntry={true}
        />
      </View>
      <View
        style={{
          marginTop: 32,
          width: "100%",
          alignItems: "center",
          gap: 8,
          marginBottom: 32,
        }}
      >
        <Pressable
          style={{
            height: 48,
            backgroundColor: primaryColor,
            width: "90%",
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: textPrimary,
              fontSize: buttonTextSize,
              fontFamily: "Poppins",
            }}
          >
            Sign In
          </Text>
        </Pressable>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Text style={{ color: textPrimary }}>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={{ color: textPrimary, fontWeight: "bold" }}>
              Sign Up
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
