import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import store from "./store/index";
import { LoginScreen, RegisterScreen } from "./screens";
import {
  appBarFontSize,
  primaryColor,
  textAccent,
  textPrimary,
  textSecondary,
} from "./color-and-size.config";
import Sandbox from "./screens/SandBox";
import Sandbox2 from "./screens/SandBox2";
import Sandbox3 from "./screens/SandBox3";
import LineChartScreen from "./screens/Chart";
import ExpandableCalendarScreen from "./screens/TextCalendar";

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf"),
  });
  //

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider onLayout={onLayoutRootView}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              animationEnabled: true,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              detachPreviousScreen: false,
            }}
          >
            <Stack.Screen
              name="testCalendar"
              component={ExpandableCalendarScreen}
            ></Stack.Screen>
            <Stack.Screen name="Sandbox3" component={Sandbox3}></Stack.Screen>
            <Stack.Screen name="Sandbox" component={Sandbox2}></Stack.Screen>
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
                headerTintColor: textPrimary,
                headerTitleAlign: "center",
                cardStyle: {
                  backgroundColor: textPrimary,
                },
              }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
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
                headerTintColor: textPrimary,
                headerTitleAlign: "center",
                cardStyle: {
                  backgroundColor: textPrimary,
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
