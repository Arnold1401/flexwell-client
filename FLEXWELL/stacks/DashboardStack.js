import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import { DashboardScreen, SettingScreen } from "../screens";
import {
  appBarFontSize,
  primaryColor,
  textAccent,
  textPrimary,
  textSecondary,
} from "../color-and-size.config.js";
import { TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import WelcomingTextHeader from "../components/WelcomingTextHeader";

const DashboardStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Dashboard"
      component={DashboardScreen}
      options={{
        headerTitle: () => <WelcomingTextHeader />,
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontFamily: "Montserrat-Bold",
          fontSize: appBarFontSize,
          letterSpacing: 2,
        },
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate("SettingScreen")}
          >
            <FontAwesome
              name="user"
              size={32}
              style={{ marginRight: 16, color: textPrimary }}
            />
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: primaryColor,
        },
        headerLeft: () => null, // Remove the back button
        gestureEnabled: false, // Disable swipe gesture to go back
        headerTintColor: textPrimary,
        cardStyle: {
          backgroundColor: textPrimary,
        },
      }}
    />
    <Stack.Screen
      name="SettingScreen"
      component={SettingScreen}
      options={{
        title: "Profile",
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
export default DashboardStack;
