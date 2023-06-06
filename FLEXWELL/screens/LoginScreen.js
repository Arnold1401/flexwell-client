import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { Fumi } from "react-native-textinput-effects";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import logo from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { doLogin } from "../action/userCreator";
import { storeData, getData } from "../async";
import { useNavigation } from "@react-navigation/native";

import {
  buttonTextSize,
  primaryColor,
  textPrimary,
  textSecondary,
} from "../color-and-size.config";

const LoginScreen = ({}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  // const test = async () => {
  //   console.log("ada data isinya", await getData());
  //   dispatch(doLogin(username, password));
  // };

  const login = () => {
    storeData("access_token");
    // test();
    navigation.navigate("Main");
  };

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
            width: 150,
            height: 150,
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
          gap: 16,
        }}
      >
        <Fumi
          label={"Username"}
          onChangeText={onChangeUsername}
          iconClass={FontAwesome}
          iconName={"user"}
          iconColor={primaryColor}
          iconSize={24}
          iconWidth={40}
          inputPadding={16}
          style={{
            width: "90%",
            borderRadius: 16,
            borderWidth: 0.1,
          }}
          inputStyle={{
            color: textSecondary,
          }}
        />
        <Fumi
          label={"Password"}
          onChangeText={onChangePassword}
          iconClass={FontAwesome}
          iconName={"key"}
          iconColor={primaryColor}
          iconSize={24}
          iconWidth={40}
          inputPadding={16}
          style={{
            width: "90%",
            borderRadius: 16,
            borderWidth: 0.1,
          }}
          inputStyle={{
            color: textSecondary,
          }}
          secureTextEntry={true}
        />
      </View>
      <View
        style={{
          marginTop: 40,
          width: "100%",
          alignItems: "center",
          gap: 16,
          marginBottom: 32,
        }}
      >
        <TouchableOpacity
          onPress={() => login()}
          style={{
            height: 48,
            backgroundColor: primaryColor,
            width: "90%",
            borderRadius: 32,
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
        </TouchableOpacity>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Text style={{ color: textSecondary }}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ color: textSecondary, fontWeight: "bold" }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
