import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import {
  primaryColor,
  secondaryColor,
  textAccent,
  textAccentSecondary,
  textPrimary,
} from "../color-and-size.config";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import LottieView from "lottie-react-native";
import { useDispatch, useSelector } from "react-redux";
import { createCustomExerciseNameMiddleware } from "../action/addCustomizeExerciseCreator";
const animation = require("../assets/lottie/custom-empty.json");

const CustomWorkouts = ({ navigation }) => {
  //LOTTIE true data ada
  const [status, setStatus] = useState(true);

  const { exerciseDetail } = useSelector((state) => state.exerciseList);
  const state = useSelector((state) => state);

  const [title, setTitle] = useState("");

  const { errorMsg, isLoading, newCustomExercise } = useSelector(
    (state) => state.newExerciseName
  );

  console.log(newCustomExercise, "test");

  const dispatch = useDispatch();

  const createNewExercise = () => {
    console.log(title);
    if (!title) {
      console.warn("Please fill your custom workout name");
    } else {
      dispatch(createCustomExerciseNameMiddleware(title));
      navigation.navigate("CustomLibrary");
    }
  };

  const filled = (
    <Text
      style={{
        color: textAccentSecondary,
        fontFamily: "Poppins",
        fontSize: 16,
        paddingVertical: 6,
      }}
    >
      {newCustomExercise.name}
    </Text>
  );

  const empty = (
    <TextInput
      style={{
        height: 40,
        marginHorizontal: 60,
        color: textAccentSecondary,
        fontFamily: "Poppins",
        width: "100%",
        paddingHorizontal: 50,
        alignSelf: "center",
      }}
      onChangeText={setTitle}
      placeholder="Enter Your Custom Workout Name"
    />
  );

  const ListItem = ({ item }) => (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        height: 80,
        width: "100%",
        justifyContent: "center",
        paddingHorizontal: 4,
        alignItems: "flex-start",
      }}
    >
      <TouchableOpacity
        style={{
          flex: 2,
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          alignSelf: "baseline",
        }}
      >
        <View
          style={{
            backgroundColor: textAccent,
            paddingHorizontal: 4,
            paddingVertical: 4,
            borderRadius: 8,
          }}
        >
          <FontAwesome name={"trash"} size={24} color={primaryColor} />
        </View>
      </TouchableOpacity>
      <View style={{ flex: 4 }}>
        <Image
          source={{ uri: item.gifUrl }}
          style={{ height: 80, width: 80 }}
        />
      </View>
      <View style={{ flex: 8, flexDirection: "column", gap: 4 }}>
        <Text
          style={{ fontFamily: "Montserrat-Bold", fontSize: 14 }}
          numberOfLines={2}
        >
          {item.name}
        </Text>
        <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 10 }}>
          {item.totalSet} sets x {item.repetition} reps
        </Text>
      </View>
      <View
        style={{
          flex: 5,
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Text
          style={{
            backgroundColor: secondaryColor,
            fontFamily: "Montserrat-Bold",
            fontSize: 10,
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 100,
          }}
        >
          {item.bodyPart.toUpperCase()}
        </Text>
      </View>
    </View>
  );

  const FlatListWithAvatar = () => (
    <FlatList
      data={exerciseDetail}
      keyExtractor={(item) => item.bodyPartId}
      renderItem={({ item }) => <ListItem item={item} />}
    />
  );

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        marginVertical: 24,
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          flex: 1,
          width: "100%",
          gap: 4,
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderBottomWidth: 2,
            borderColor: textAccent,
            width: "100%",
          }}
        />
        {Object.keys(newCustomExercise).length == 0 ? empty : filled}

        <View
          style={{
            borderBottomWidth: 2,
            width: "100%",
            borderColor: textAccent,
          }}
        />
      </View>
      <View
        style={{
          flex: 12,
          width: "100%",
          display: exerciseDetail.length == 0 ? "flex" : "none",
        }}
      >
        <LottieView source={animation} autoPlay loop />
      </View>
      <View
        style={{
          flex: 6,
          width: "100%",
          display: exerciseDetail.length !== 0 ? "flex" : "none",
        }}
      >
        <FlatListWithAvatar />
      </View>
      <TouchableOpacity
        style={{
          width: "90%",
          backgroundColor: primaryColor,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
          paddingVertical: 8,
          gap: 8,
        }}
        onPress={() => {
          createNewExercise();
        }}
      >
        <FontAwesome name="plus-square-o" size={32} color={textPrimary} />
        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 20,
            marginTop: 4,
            color: textPrimary,
          }}
        >
          Add Exercise
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomWorkouts;
