import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import {
  BodyPartScreen,
  ExercisesListScreen,
  ExerciseDetailScreen,
} from "../screens";
import {
  appBarFontSize,
  primaryColor,
  textAccent,
  textPrimary,
  textSecondary,
} from "../color-and-size.config.js";
import WelcomingTextHeader from "../components/WelcomingTextHeader";
import { Pressable, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const LibraryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="30DayChallenge"
        component={BodyPartScreen}
        options={{
          headerTitle: () => <WelcomingTextHeader />,
          headerRight: () => (
            <TouchableOpacity>
              <FontAwesome
                name="gear"
                size={32}
                style={{ marginRight: 16, color: textAccent }}
              />
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            fontFamily: "Montserrat-Bold",
            fontSize: appBarFontSize,
            letterSpacing: 2,
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
        }}
      />
      <Stack.Screen
        name="ExerciseListScreen"
        component={ExercisesListScreen}
        options={{
          title: "Exercises",
          headerTitleStyle: {
            fontFamily: "Montserrat-Bold",
            fontSize: appBarFontSize,
            letterSpacing: 2,
          },
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTintColor: textPrimary,
          headerTitleAlign: "center",
          cardStyle: {
            backgroundColor: textPrimary,
          },
        }}
      />
      <Stack.Screen
        name="ExerciseDetailScreen"
        component={ExerciseDetailScreen}
        options={{
          title: "Exercises",
          headerTitleStyle: {
            fontFamily: "Montserrat-Bold",
            fontSize: appBarFontSize,
            letterSpacing: 2,
          },
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTintColor: textPrimary,
          headerTitleAlign: "center",
          cardStyle: {
            backgroundColor: textPrimary,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default LibraryStack;
