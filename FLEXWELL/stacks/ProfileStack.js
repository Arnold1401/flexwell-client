import { createStackNavigator } from "@react-navigation/stack";
import {
  appBarFontSize,
  primaryColor,
  textAccent,
  textPrimary,
  textSecondary,
} from "../color-and-size.config";
const Stack = createStackNavigator();
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { ProfileScreen, PersonalizeScreen, SettingScreen } from "../screens";

import { getData, storeData } from "../async";
import WelcomingTextHeader from "../components/WelcomingTextHeader";

const ProfileStack = ({ navigation, route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "Measurement",
          headerTitle: () => <WelcomingTextHeader />,

          headerTitleStyle: {
            fontFamily: "Montserrat-Bold",
            fontSize: appBarFontSize,
            letterSpacing: 2,
          },
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTitleAlign: "left",
          headerLeft: () => null, // Remove the back button
          gestureEnabled: false, // Disable swipe gesture to go back
          headerTintColor: textPrimary,

          cardStyle: {
            backgroundColor: textPrimary,
          },
        }}
      />

      <Stack.Screen
        name="PersonalizeScreen"
        component={PersonalizeScreen}
        options={{
          headerShown: false,
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
        }}
      />
    </Stack.Navigator>
  );
};
export default ProfileStack;
