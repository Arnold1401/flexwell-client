import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { Fumi } from "react-native-textinput-effects";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import logo from "../assets/logo.png";
import {
  accentColor,
  buttonTextSize,
  primaryColor,
  secondaryColor,
  textPrimary,
  textSecondary,
} from "../color-and-size.config";
import { useDispatch, useSelector } from "react-redux";
import { doRegister } from "../action/userCreator";
import { useNavigation } from "@react-navigation/native";

import { storeData, getData } from "../async";
const RegisterScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [email, onChangeEmail] = React.useState("");
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [passwordCheck, onChangePasswordCheck] = React.useState("");
  const { isLoading, user, errorMsg } = useSelector(
    (state) => state.userReducer
  );
  const register = () => {
    // console.log("testing");
    // console.log(email, username, password, passwordCheck);
    if (password === passwordCheck) {
      dispatch(doRegister(email, username, password));
    } else {
      console.warn("Password with confirm password must be same !");
    }
  };

  const reset = () => {
    onChangeEmail("");
    onChangeUsername("");
    onChangePassword("");
    onChangePasswordCheck("");
  };

  useEffect(() => {
    if (user.status === 201) {
      console.warn("Registered");
      reset();
    }
  }, [user]);

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
          gap: 10,
        }}
      >
        <Fumi
          label={"Email"}
          value={email}
          autoCapitalize={"none"}
          onChangeText={onChangeEmail}
          iconClass={FontAwesome}
          iconName={"envelope"}
          iconColor={primaryColor}
          iconSize={24}
          iconWidth={40}
          inputPadding={16}
          style={{
            width: "90%",
            borderRadius: 16,
          }}
          keyboardType="email-address"
          inputStyle={{
            color: textSecondary,
          }}
        />
        <Fumi
          label={"Username"}
          autoCapitalize={"none"}
          value={username}
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
          }}
          inputStyle={{
            color: textSecondary,
          }}
        />
        <Fumi
          label={"Password"}
          autoCapitalize={"none"}
          onChangeText={onChangePassword}
          iconClass={FontAwesome}
          iconName={"key"}
          value={password}
          iconColor={primaryColor}
          iconSize={24}
          iconWidth={40}
          inputPadding={16}
          style={{
            width: "90%",
            borderRadius: 16,
          }}
          secureTextEntry={true}
          inputStyle={{
            color: textSecondary,
          }}
        />
        <Fumi
          label={"Confirm Password"}
          autoCapitalize={"none"}
          value={passwordCheck}
          onChangeText={onChangePasswordCheck}
          iconClass={FontAwesome}
          iconName={"key"}
          iconColor={primaryColor}
          iconSize={24}
          iconWidth={40}
          inputPadding={16}
          style={{
            width: "90%",
            borderRadius: 16,
          }}
          secureTextEntry={true}
          inputStyle={{
            color: textSecondary,
          }}
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
          style={{
            height: 48,
            backgroundColor: primaryColor,
            width: "90%",
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => register()}
        >
          <Text
            style={{
              color: textPrimary,
              fontSize: buttonTextSize,
              fontFamily: "Poppins",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Text style={{ color: textSecondary }}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={{ color: textSecondary, fontWeight: "bold" }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
