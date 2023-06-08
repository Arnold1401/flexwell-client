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

  const toDetailCustom = (id) => {
    console.log(id, "----");
    // console.log(item, "item");
    // console.log(item, "go to detail");

    navigation.navigate("CustomWorkoutList", { id });
  };

  useEffect(() => {
    dispatch(fetchCustomization());

    console.log(customization, "-- Customization screen --");
    // async () => (isEmpty = (await customization.length) ? true : false);
  }, []);

  console.log(customization);
  const ListItem = ({ item }) => (
    <TouchableOpacity
      style={{
        marginTop: 10,
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
      onPress={() => toDetailCustom(item.id)}
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
        renderItem={({ item }) => <ListItem key={item.id} item={item} />}
        // numColumns={2}
        contentContainerStyle={{
          marginTop: 10,
          alignItems: "center",
          marginBottom: 100,
        }}
        // columnWrapperStyle={{ gap: 8 }}
        // style={{
        //   alignItems: "center",
        // }}
      />
    </View>
  );

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
          flex: 10,
          display: customization.length == 0 ? "flex" : "none",
          width: "100%",
        }}
      >
        <LottieView source={animation} autoPlay loop />
      </View>

      <FlatListCustomWorkout />

      {/* <TouchableOpacity
        onPress={() => {
          navigation.navigate("SelectedCustomExercise");
        }}
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          // width: "50%",
          // marginBottom: 40,
          // opacity: 0,
          backgroundColor: "transparent",
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
      </TouchableOpacity> */}
    </View>
  );
};

export default CustomExcScreen;
