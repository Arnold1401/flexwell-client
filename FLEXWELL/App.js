import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { LoginScreen, RegisterScreen } from "./screens";
import {
  appBarFontSize,
  primaryColor,
  secondaryColor,
  textWhite,
} from "./color-and-size.config";

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: "FLEXWELL",
              headerTitleStyle: {
                fontFamily: "Montserrat-Bold",
                fontSize: appBarFontSize,
                letterSpacing: 4,
              },
              headerStyle: {
                backgroundColor: primaryColor,
              },
              headerTintColor: textWhite,
              headerTitleAlign: "center",
              cardStyle: {
                backgroundColor: secondaryColor,
              },
            }}
          />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
