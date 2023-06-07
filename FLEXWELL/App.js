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
import { LoginScreen, PersonalizeScreen, RegisterScreen } from "./screens";
import { LogBox } from "react-native";

import {
  ChallengeStack,
  LibraryStack,
  DashboardStack,
  CustomizationStack,
  ProfileStack,
} from "./stacks";

import {
  appBarFontSize,
  primaryColor,
  textPrimary,
  textSecondary,
} from "./color-and-size.config";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, TouchableOpacity } from "react-native";
import WelcomingTextHeader from "./components/WelcomingTextHeader";

SplashScreen.preventAutoHideAsync();

// LogBox.ignoreAllLogs();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Bottomstack = () => {
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
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="trophy" size={size} color={color} />
          ),
        }}
        component={ChallengeStack}
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
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="book" size={size} color={color} />
          ),
        }}
        component={LibraryStack}
      />
      <Tab.Screen
        name="Custom"
        options={{
          title: "Custom",
          headerShown: false,
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
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="plus" size={size} color={color} />
          ),
        }}
        component={CustomizationStack}
      />
      <Tab.Screen
        name="Profile"
        options={{
          title: "Measurement",
          headerShown: false,
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
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="balance-scale" size={size} color={color} />
          ),
        }}
        component={ProfileStack}
      />
      <Tab.Screen
        name="DashboardStack"
        options={{
          headerTitle: () => <WelcomingTextHeader />,

          title: "Dashboard",
          headerTitleStyle: {
            fontFamily: "Montserrat-Bold",
            fontSize: appBarFontSize,
            letterSpacing: 2,
          },
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTintColor: textPrimary,
          headerTitleAlign: "left",
          cardStyle: {
            backgroundColor: textPrimary,
          },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="dashboard" size={size} color={color} />
          ),
        }}
        component={DashboardStack}
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
            {/* <Stack.Screen
              name="Personalize"
              component={PersonalizeScreen}
              options={{
                title: "Personalization",
                headerTitleStyle: {
                  fontFamily: "Montserrat-Bold",
                  fontSize: appBarFontSize,
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
            /> */}
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Main"
              component={Bottomstack}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
