import { createStackNavigator } from "@react-navigation/stack";
import {
  appBarFontSize,
  primaryColor,
  textAccent,
  textPrimary,
  textSecondary,
} from "../color-and-size.config";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Stack = createStackNavigator();
import {
  ThirtyDayChallenge,
  ThirtyDayChallengeDetail,
  DayChallengeExcercise,
} from "../screens";
import { Button, Pressable, Text, TouchableOpacity } from "react-native";
import WelcomingTextHeader from "../components/WelcomingTextHeader";

const ChallengeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="30DayChallenge"
        component={ThirtyDayChallenge}
        options={{
          title: <WelcomingTextHeader />,
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
            <TouchableOpacity>
              <FontAwesome
                name="gear"
                size={32}
                style={{ marginRight: 16, color: textAccent }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ChallengeDetail"
        component={ThirtyDayChallengeDetail}
        options={{
          title: "Challenge",
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
        name="DayExercise"
        component={DayChallengeExcercise}
        options={{
          title: "",
          headerTitleStyle: {
            fontFamily: "Montserrat-Bold",
            fontSize: appBarFontSize,
          },
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerRight: () => (
            <Pressable
              style={{
                marginTop: 10,
                marginRight: 16,
              }}
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

export default ChallengeStack;
