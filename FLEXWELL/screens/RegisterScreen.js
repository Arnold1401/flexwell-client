import React from "react";
import { View, Text, Button } from "react-native";

const RegisterScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Register Screen</Text>
      <Button title="Sign Up" />
      <Button
        title="Already have account"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default RegisterScreen;
