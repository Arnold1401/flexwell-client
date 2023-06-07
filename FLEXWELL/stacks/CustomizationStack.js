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
import CustomExerciseListScreen from "../screens/CustomExcListScreen";
import { useDispatch, useSelector } from "react-redux";
import { createCustomExerciseMiddleware } from "../action/addCustomizeExerciseCreator";
import { fetchCustomization } from "../action/customizationCreator";

const CustomizationStack = ({ navigation }) => {
  //SUPAAYA lottie tamoil      - TRUE
  // lottie hilang data tampil - FALSE
  const [isEmpty, setIsEmpty] = useState(true);
  const { exerciseDetail } = useSelector((state) => state.exerciseList);
  const { errorMsg, isLoading, newCustomExercise } = useSelector(
    (state) => state.newExerciseName
  );
  const dispatch = useDispatch();

  const saveCustomWorkout = () => {
    console.log("masuk save Custom Workout");
    console.log(newCustomExercise);
    if (Object.keys(newCustomExercise).length === 0) {
      console.warn("Please fill your custom workout name");
    } else {
      dispatch(createCustomExerciseMiddleware());
      dispatch(fetchCustomization());
      navigation.navigate("CustomExcScreen");
    }
  };

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
              // navigation.navigate("SelectedCustomExercise"
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
              onPress={() => saveCustomWorkout()}
              //  navigation.navigate("CustomExcScreen")
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
        name="CustomExerciseListScreen"
        component={CustomExerciseListScreen}
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
        }}
      />
    </Stack.Navigator>
  );
};
export default CustomizationStack;
