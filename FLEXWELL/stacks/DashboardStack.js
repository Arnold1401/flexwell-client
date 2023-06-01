import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import { DashboardScreen } from "../screens";
import {
  appBarFontSize,
  primaryColor,
  textAccent,
  textPrimary,
  textSecondary,
} from "../color-and-size.config.js";

const DashboardStack = () => {
  <Stack.Navigator>
    <Stack.Screen
      name="Library"
      component={DashboardScreen}
      options={{
        title: "Library",
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
        cardStyle: {
          backgroundColor: textPrimary,
        },
      }}
    />
  </Stack.Navigator>;
};

export default DashboardStack;
