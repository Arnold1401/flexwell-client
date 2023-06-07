import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from "react-native";
import { Image } from "expo-image";
import { Fumi } from "react-native-textinput-effects";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { doLogin, userClear } from "../action/userCreator";

import { useNavigation } from "@react-navigation/native";
import { storeData, getData } from "../async";

import {
  buttonTextSize,
  primaryColor,
  textPrimary,
  textSecondary,
} from "../color-and-size.config";

import Modal from "react-native-modal";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: primaryColor,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

const LoginScreen = ({}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [username, onChangeUsername] = useState("");
  const [password, onChangePassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [messageModal, setModalMessage] = useState("");

  const TheModal = ({ data }) => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        // Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{messageModal}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Ok</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
  const { isLoading, user, errorMsg } = useSelector(
    (state) => state.userReducer
  );
  const test = async () => {
    const { access_token } = JSON.parse(await getData("userData"));
    console.log(access_token);
    if (access_token) {
      navigation.navigate("Main");
    }
  };
  useEffect(() => {
    console.log(user, "test--logged");
    if (user === "Logged") {
      navigation.navigate("Main");
      test();
    } else if (errorMsg !== "") {
      setModalVisible(true);
      setModalMessage(errorMsg);
      dispatch(userClear());
    }
  }, [user, errorMsg]);

  const login = () => {
    dispatch(doLogin(username, password));
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView>
        <View
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
          autoCapitalize={"none"}
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
          autoCapitalize={"none"}
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
      <TheModal />
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
              autoCapitalize={"none"}
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
              autoCapitalize={"none"}
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
              <Text style={{ color: textSecondary }}>
                Don't have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={{ color: textSecondary, fontWeight: "bold" }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
