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
import { ProfileScreen, PersonalizeScreen } from "../screens";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { getData, storeData } from "../async";
const ProfileStack = ({ navigation, route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "ProfileScreen",
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
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity>
              <Entypo
                name="log-out"
                size={24}
                color="white"
                onPress={() => {
                  storeData("userData", "");
                  navigation.navigate("Login");
                }}
                style={{ marginRight: 16 }}
              />
            </TouchableOpacity>
          ),
          cardStyle: {
            backgroundColor: textPrimary,
          },
        }}
      />
      <Stack.Screen
        name="PersonalizeScreen"
        component={PersonalizeScreen}
        options={{
          title: "PersonalizeScreen",
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
export default ProfileStack;
