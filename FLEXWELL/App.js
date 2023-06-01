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
import {
  LoginScreen,
  RegisterScreen,
  ThirtyDayChallenge,
  DetailDayChallenge,
  DayChallengeExcercise,
  BodyPartScreen,
} from "./screens";
import {
  appBarFontSize,
  primaryColor,
  textAccent,
  textPrimary,
  textSecondary,
} from "./color-and-size.config";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ThirtyDayChallengeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="30DayChallenge"
        component={ThirtyDayChallenge}
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
          headerLeft: () => null, // Remove the back button
          gestureEnabled: false, // Disable swipe gesture to go back
          headerTintColor: textPrimary,
          headerTitleAlign: "center",
          cardStyle: {
            backgroundColor: textPrimary,
          },
        }}
      />
      <Stack.Screen
        name="ChallengeDetail"
        component={DetailDayChallenge}
        options={{
          title: "Detail",
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

const LibraryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BodyPart"
        component={BodyPartScreen}
        options={{
          title: "Body Part",
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

const bottomStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Challenge"
        options={{
          headerShown: false,
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
        component={ThirtyDayChallengeStack}
      />
      <Tab.Screen
        name="Library"
        options={{
          headerShown: false,
          title: "Library",
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
        component={LibraryStack}
      />
    </Tab.Navigator>
  );
};

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
                headerLeft: () => null, // Remove the back button
                gestureEnabled: false, // Disable swipe gesture to go back
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
                headerLeft: () => null, // Remove the back button
                gestureEnabled: false, // Disable swipe gesture to go back
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
              options={{
                headerShown: false,
              }}
              name="Main"
              component={bottomStack}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
