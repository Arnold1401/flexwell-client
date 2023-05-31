import React, { useEffect } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { storeData, getData } from "../async";
import { useDispatch } from "react-redux";
import { loginHandler } from "../action/actionCreator";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const test = async () => {
      console.log("ada data isinya", await getData());
      dispatch(loginHandler(text, number));
    };
    test();
  }, []);

  const doLogin = () => {
    dispatch(loginHandler(text, number));
    storeData("access_token");
  };

  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");

  console.log(text, "ini text");
  console.log(number, "ini number");

  return (
    <View>
      <Text>Login Screen</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="useless text"
      />
      <TextInput
        type={"password"}
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
      />

      <Button title="Sign In" onPress={() => doLogin()} />
      <Button
        title="Don't have account yet"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginScreen;
