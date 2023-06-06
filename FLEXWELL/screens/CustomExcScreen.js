import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import LottieView from "lottie-react-native";
import {
  primaryColor,
  secondaryColor,
  textAccent,
  textAccentSecondary,
  textPrimary,
} from "../color-and-size.config";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomization } from "../action/customizationCreator";

const CustomExcScreen = ({ route, navigation }) => {
  // LOTTIE ada true
  const [isEmpty, setIsEmpty] = useState(false);
  const animation = require("../assets/lottie/custom-empty-1.json");

  const { isLoading, customization, errorMsg } = useSelector(
    (state) => state.fetchCustomization
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomization());

    console.log(customization, "-- Customization screen --");
    // async () => (isEmpty = (await customization.length) ? true : false);
  }, []);

  const ListItem = ({ item }) => (
    <TouchableOpacity
      style={{
        marginTop: 24,
        flexDirection: "row",
        width: "95%",
        alignItems: "center",
        justifyContent: "space-between",
        height: 80,
        backgroundColor: secondaryColor,
        borderRadius: 16,
        display: isEmpty ? "none" : "flex",
        borderWidth: 1.5,
        borderColor: textAccentSecondary,
      }}
      onPress={() => toDetailCustom()}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <FontAwesome5 name="dumbbell" size={24} color="black" />
      </View>
      <View
        style={{
          flex: 4,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontFamily: "Poppins", fontSize: 16 }}>{item.name}</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <FontAwesome name={"chevron-circle-right"} size={24} />
      </View>
    </TouchableOpacity>
  );

  const FlatListCustomWorkout = () => (
    <View
      style={{
        flex: 1,
        // backgroundColor: "blue",
        // alignItems: "center",
        // width: "100%",
      }}
    >
      <FlatList
        data={customization}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItem item={item} />}
        numColumns={2}
        contentContainerStyle={{
          gap: 16,
        }}
        columnWrapperStyle={{ gap: 8 }}
      />
    </View>
  );

  const toDetailCustom = (id) => {
    console.log(id, "go to detail");
    navigation.navigate("CustomWorkoutList", { id });
  };

  return (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 2,
          display: isEmpty ? "flex" : "none",
          width: "100%",
        }}
      >
        <LottieView source={animation} autoPlay loop />
      </View>

      <FlatListCustomWorkout />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SelectedCustomExercise");
        }}
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          marginBottom: 40,
        }}
      >
        <Text
          style={{
            paddingVertical: 8,
            paddingHorizontal: 16,
            backgroundColor: primaryColor,
            borderRadius: 16,
            color: textPrimary,
            fontFamily: "Poppins",
            fontSize: 16,
          }}
        >
          Add Custom Workout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomExcScreen;
