import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  primaryColor,
  secondaryColor,
  textAccent,
  textAccentSecondary,
  textPrimary,
  textSecondary,
} from "../color-and-size.config";
import biceps from "../assets/body-libraries/biceps.png";

import { useDispatch, useSelector } from "react-redux";
import { fetchExerciseDetailMiddleware } from "../action/libraryCreator";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { addCustomizeExerciseMiddleware } from "../action/addCustomizeExercise";
const loadingAnimation = require("../assets/lottie/loading.json");

const SummaryScreen = ({ route, navigation }) => {
  const { id } = route.params;

  const { isLoading, exercise, erroMsg } = useSelector(
    (state) => state.fetchExerciseDetail
  );

  const dispatch = useDispatch();

  // Data untuk flatlist

  const [favorite, setFavorite] = useState(false);
  console.log(id, " ini ID");

  useEffect(() => {
    console.log("masuk useEffect");
    dispatch(fetchExerciseDetailMiddleware(id));
  }, []);

  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);

  const increaseSets = () => {
    const final = sets + 1;
    setSets(final);
  };
  const increaseReps = () => {
    setReps(reps + 1);
  };
  const decreaseSets = () => {
    const final = sets - 1;
    setSets(final);
  };
  const decreaseReps = () => {
    setReps(reps - 1);
  };

  const addExercise = () => {
    console.log(exercise, "masuk add Exercise");
    const choosenExercises = {
      bodyPartId: exercise.id,
      bodyPart: exercise.bodyPart,
      gifUrl: exercise.gifUrl,
      name: exercise.name,
      repetition: sets,
      totalSet: reps,
    };

    // dispatch(addCustomizeExerciseMiddleware(choosenExercises));
    console.log(choosenExercises);
  };

  useEffect(() => {
    console.log(sets, "sets dari useEffect");
    console.log(reps, "reps dari useEffect");
    sets < 0 ? setSets(0) : sets;
    reps < 0 ? setReps(0) : reps;
  }, [sets, reps]);

  if (isLoading) {
    return (
      <LottieView
        style={{
          justifyContent: "flex-end",
          marginLeft: 45,
        }}
        source={loadingAnimation}
        autoPlay
        loop
      />
    );
  } else {
    return (
      <ScrollView>
        <View style={{ flexDirection: "column", flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 16,
              marginVertical: 24,
              alignItems: "center",
              justifyContent: "space-between",
              flex: 1,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                !favorite ? setFavorite(true) : setFavorite(false)
              }
              style={{ flex: 1 }}
            >
              <FontAwesome
                name={!favorite ? "star-o" : "star"}
                size={16}
                color={!favorite ? textAccentSecondary : primaryColor}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              borderColor: textAccentSecondary,
            }}
          >
            <Image
              source={{ uri: exercise.gifUrl }}
              style={{
                width: "100%",
                height: 400,
              }}
              resizeMode="cover"
            />
          </View>
          <Text
            style={{
              fontFamily: "Poppins",
              fontSize: 22,
              flex: 16,
              paddingHorizontal: 12,
              marginTop: 20,
            }}
          >
            {exercise?.name?.split(" ").map((word) => {
              word = word.charAt(0).toUpperCase() + word.slice(1);
              return `${word} `;
            })}
          </Text>
          <View
            style={{
              marginVertical: 16,
              marginHorizontal: 8,
              flex: 1,
              padding: 4,
              display: "flex",
              flexDirection: "row",
              gap: 8,
            }}
          >
            <View
              style={{
                backgroundColor: secondaryColor,
                alignSelf: "baseline",
                paddingHorizontal: 8,
                paddingVertical: 5,
                borderRadius: 16,
                display: "flex",
                flexDirection: "row",
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="ios-body-outline" size={18} color="black" />
              <Text
                style={{
                  backgroundColor: secondaryColor,
                  alignSelf: "baseline",
                  paddingHorizontal: 8,
                  paddingVertical: 2,
                  borderRadius: 16,
                }}
              >
                {exercise.bodyPart}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: secondaryColor,
                alignSelf: "baseline",
                paddingHorizontal: 8,
                paddingVertical: 5,
                borderRadius: 16,
                display: "flex",
                flexDirection: "row",
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="arm-flex-outline"
                size={20}
                color="black"
              />
              <Text
                style={{
                  backgroundColor: secondaryColor,
                  alignSelf: "baseline",
                  paddingHorizontal: 8,
                  paddingVertical: 2,
                  borderRadius: 16,
                }}
              >
                {exercise.target}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: secondaryColor,
                alignSelf: "baseline",
                paddingHorizontal: 8,
                paddingVertical: 5,
                borderRadius: 16,
                display: "flex",
                flexDirection: "row",
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome5 name="dumbbell" size={18} color="black" />
              <Text
                style={{
                  backgroundColor: secondaryColor,
                  alignSelf: "baseline",
                  paddingHorizontal: 8,
                  paddingVertical: 2,
                  borderRadius: 16,
                }}
              >
                {exercise.equipment}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            marginTop: 0,
            alignItems: "center",
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: "95%",
              borderRadius: 16,
              // borderWidth: 1,
              // borderColor: textAccent,
              paddingHorizontal: 4,
              paddingTop: 16,
              marginBottom: 8,
              // shadowColor: "#000",
              // shadowOffset: {
              //   width: 0,
              //   height: 2,
              // },
              // shadowOpacity: 0.25,
              // shadowRadius: 3.84,

              // elevation: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 16,
                marginHorizontal: 8,
                marginTop: 0,
                marginBottom: 8,
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  flex: 1,
                  height: 80,
                  borderWidth: 1,
                  borderColor: textAccent,
                  borderRadius: 15,
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text style={{ fontSize: 24, fontFamily: "Montserrat-Bold" }}>
                    sets
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 100,
                    height: 40,
                    flexDirection: "row",
                    width: "100%",
                    marginTop: 4,
                    // borderWidth: 1,
                    borderColor: textAccent,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={decreaseSets}
                  >
                    <FontAwesome
                      name={"minus-square"}
                      size={32}
                      color={textAccentSecondary}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontFamily: "Poppins", fontSize: 24 }}>
                      {sets}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={increaseSets}
                  >
                    <FontAwesome
                      name={"plus-square"}
                      size={32}
                      style={{ color: primaryColor, fontWeight: 800 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  flex: 1,
                  height: 80,
                  borderWidth: 1,
                  borderColor: textAccent,
                  borderRadius: 15,
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text style={{ fontSize: 24, fontFamily: "Montserrat-Bold" }}>
                    reps
                  </Text>
                </View>
                <View></View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 100,
                    height: 40,
                    flexDirection: "row",
                    width: "100%",
                    marginTop: 4,
                    // borderWidth: 1,
                    borderColor: textAccent,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={decreaseReps}
                  >
                    <FontAwesome
                      name={"minus-square"}
                      size={32}
                      color={textAccentSecondary}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontFamily: "Poppins", fontSize: 24 }}>
                      {reps}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={increaseReps}
                  >
                    <FontAwesome
                      name={"plus-square"}
                      size={32}
                      style={{ color: primaryColor, fontWeight: 800 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              // width: "100%",
              height: 50,
              backgroundColor: primaryColor,
              flexDirection: "row",
              paddingHorizontal: 8,
              marginHorizontal: 12,
              borderRadius: 30,
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
              onPress={() => {
                addExercise();
                // navigation.navigate("SelectedCustomExercise", { id: 1 });
              }}
            >
              <Text
                style={{
                  // backgroundColor: secondaryColor,
                  paddingVertical: 8,
                  // paddingHorizontal: 20,
                  color: textPrimary,
                  borderRadius: 100,
                  fontFamily: "Montserrat-Bold",
                  fontSize: 24,
                }}
              >
                Add
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
};

export default SummaryScreen;
