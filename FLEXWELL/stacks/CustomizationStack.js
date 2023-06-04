import { createStackNavigator } from "@react-navigation/stack";
import {
  appBarFontSize,
  primaryColor,
  secondaryColor,
  textAccent,
  textAccentSecondary,
  textPrimary,
  textSecondary,
} from "../color-and-size.config";
const Stack = createStackNavigator();

import { CustomExcScreen } from "../screens";
import SelectedCustomExcercise from "../screens/CustomWorkouts";
import { TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import WelcomingTextHeader from "../components/WelcomingTextHeader";
import { Text } from "react-native";
import { useState } from "react";
import CustomBodyPartScreen from "../screens/CustomBodyPartScreen";
import CustomExerciseList from "../screens/CustomExerciseList";
import SummaryScreen from "../screens/SummaryScreen";
import CustomWorkoutList from "../screens/CustomWorkoutList";
import CustomChallengeExercise from "../screens/CustomChallengeExercise";
import { Pressable } from "react-native";

const CustomizationStack = ({ navigation }) => {
  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CustomExcScreen"
        component={CustomExcScreen}
        options={{
          title: "",
          headerTitle: () => <WelcomingTextHeader />,
          headerTitleStyle: {
            fontFamily: "Montserrat-Bold",
            fontSize: appBarFontSize,
          },
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerLeft: () => null, // Remove the back button
          gestureEnabled: false, // Disable swipe gesture to go back
          headerTintColor: textPrimary,
          headerTitleAlign: "left",
          cardStyle: {
            backgroundColor: textPrimary,
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("SelectedCustomExercise")}
            >
              <FontAwesome
                name="plus-square"
                size={32}
                style={{ marginRight: 16, color: textPrimary }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="SelectedCustomExercise"
        component={SelectedCustomExcercise}
        options={{
          title: "",
          headerTitleStyle: {
            fontFamily: "Poppins",
            fontSize: 16,
          },
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTintColor: textPrimary,
          headerTitleAlign: "left",
          cardStyle: {
            backgroundColor: textPrimary,
          },
          headerRight: () => (
            <TouchableOpacity
              disabled={!isEmpty ? true : false}
              onPress={() => navigation.navigate("CustomExcScreen")}
            >
              <Text
                style={{
                  fontFamily: "Poppins",
                  marginRight: 16,
                  fontSize: 16,
                  color: textPrimary,
                  opacity: !isEmpty ? 0.5 : 1,
                }}
              >
                Save
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="CustomLibrary"
        component={CustomBodyPartScreen}
        options={{
          title: "",
          headerTitleStyle: {
            fontFamily: "Poppins",
            fontSize: 16,
          },
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTintColor: textPrimary,
          headerTitleAlign: "left",
          cardStyle: {
            backgroundColor: textPrimary,
          },
        }}
      />
      <Stack.Screen
        name="CustomExerciseList"
        component={CustomExerciseList}
        options={{
          title: "",
          headerTitleStyle: {
            fontFamily: "Poppins",
            fontSize: 16,
          },
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTintColor: textPrimary,
          headerTitleAlign: "left",
          cardStyle: {
            backgroundColor: textPrimary,
          },
        }}
      />
      <Stack.Screen
        name="SummaryScreen"
        component={SummaryScreen}
        options={{
          title: "",
          headerTitleStyle: {
            fontFamily: "Poppins",
            fontSize: 16,
          },
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTintColor: textPrimary,
          headerTitleAlign: "left",
          cardStyle: {
            backgroundColor: textPrimary,
          },
        }}
      />
      <Stack.Screen
        name="CustomWorkoutList"
        component={CustomWorkoutList}
        options={{
          title: "",
          headerTitleStyle: {
            fontFamily: "Poppins",
            fontSize: 16,
          },
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTintColor: textPrimary,
          headerTitleAlign: "left",
          cardStyle: {
            backgroundColor: textPrimary,
          },
        }}
      />
      <Stack.Screen
        name="CustomChallengeExercise"
        component={CustomChallengeExercise}
        options={{
          title: "",
          headerTitleStyle: {
            fontFamily: "Poppins",
            fontSize: 16,
          },
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTintColor: textPrimary,
          headerTitleAlign: "left",
          cardStyle: {
            backgroundColor: textPrimary,
          },
          headerRight: () => (
            <Pressable
              style={{
                marginTop: 10,
                marginRight: 16,
              }}
              onPress={() => navigation.navigate("SelectedCustomExercise")}
            >
              <Text
                style={{
                  fontFamily: "Poppins",
                  color: textPrimary,
                  fontSize: 16,
                }}
              >
                Exercise List
              </Text>
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
export default CustomizationStack;
