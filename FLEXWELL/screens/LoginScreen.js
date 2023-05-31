import React from "react";
import { View, Text, Button } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Sign In" />
      <Button
        title="Don't have account yet"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};

export default LoginScreen;
