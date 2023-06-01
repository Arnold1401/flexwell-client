import { createStackNavigator } from "@react-navigation/stack";
import {
  appBarFontSize,
  primaryColor,
  textAccent,
  textPrimary,
  textSecondary,
} from "../color-and-size.config";
const Stack = createStackNavigator();

import { CustomExcScreen } from "../screens";

const CustomizationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CustomExcScreen"
        component={CustomExcScreen}
        options={{
          title: "Custom Exercise",
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
    </Stack.Navigator>
  );
};
export default CustomizationStack;
