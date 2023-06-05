import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
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
import FontAwesome from "@expo/vector-icons/FontAwesome";

const SummaryScreen = ({ navigation }) => {
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);

  const increaseSets = () => {
    const final = sets + 1;
    setSets(final);
    console.log(sets);
  };
  const increaseReps = () => {
    setReps(reps + 1);
  };
  const decreaseSets = () => {
    const final = sets - 1;
    setSets(final);
    console.log(sets);
  };
  const decreaseReps = () => {
    setReps(reps - 1);
  };

  const data = [
    {
      id: "1",
      name: "Lever Shoulder Press ",
      avatar:
        "https://fitnessprogramer.com/wp-content/uploads/2021/04/Lever-Shoulder-Press.gif",
    },
    {
      id: "2",
      name: "Dumbbell Shoulder Press ",
      avatar:
        "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif",
    },
    {
      id: "3",
      name: "Rear Delt Fly Machine ",
      avatar:
        "https://fitnessprogramer.com/wp-content/uploads/2021/02/Rear-Delt-Machine-Flys.gif",
    },
    {
      id: "4",
      name: "Rear Delt Fly Machine ",
      avatar:
        "https://fitnessprogramer.com/wp-content/uploads/2021/02/Rear-Delt-Machine-Flys.gif",
    },
    {
      id: "5",
      name: "Rear Delt Fly Machine ",
      avatar:
        "https://fitnessprogramer.com/wp-content/uploads/2021/02/Rear-Delt-Machine-Flys.gif",
    },
  ];

  useEffect(() => {
    sets < 0 ? setSets(0) : sets;
    reps < 0 ? setReps(0) : reps;
  }, [sets, reps]);

  return (
    <View
      style={{
        flexDirection: "column",
        marginTop: 24,
        alignItems: "center",
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          width: "95%",
          borderRadius: 16,
          borderWidth: 2,
          borderColor: textAccent,
          paddingHorizontal: 4,
          paddingTop: 16,
          marginBottom: 8,
        }}
      >
        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={{ flex: 2 }}>
            <Image
              source={{ uri: data[0].avatar }}
              style={{ height: 80, width: 80 }}
            />
          </View>
          <View style={{ flex: 3, flexDirection: "column" }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontFamily: "Montserrat-Bold" }}>
                {data[0].name}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 10 }}>3 sets x 8-10 reps x 10 kg</Text>
            </View>
          </View>
          <View
            style={{
              flex: 2,
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Text
              style={{
                backgroundColor: primaryColor,
                paddingVertical: 2,
                paddingHorizontal: 8,
                fontSize: 10,
                borderRadius: 16,
                color: textPrimary,
              }}
            >
              SHOULDERS
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 16,
            marginHorizontal: 8,
            marginTop: 8,
          }}
        >
          <View style={{ flexDirection: "column", flex: 1, height: 80 }}>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 12, fontFamily: "Montserrat-Bold" }}>
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
                borderWidth: 1,
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
                <Text style={{ fontFamily: "Poppins" }}>{sets}</Text>
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
          <View style={{ flexDirection: "column", flex: 1, height: 80 }}>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 12, fontFamily: "Montserrat-Bold" }}>
                reps
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
                borderWidth: 1,
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
                <Text style={{ fontFamily: "Poppins" }}>{reps}</Text>
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
          width: "100%",
          height: 50,
          backgroundColor: primaryColor,
          flexDirection: "row",
          paddingHorizontal: 8,
        }}
      >
        <View
          style={{
            flex: 8,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-Bold",
              color: textPrimary,
            }}
          >
            Selected Exercise:
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-Bold",
              color: textPrimary,
              textDecorationLine: "underline",
            }}
          >
            0
          </Text>
        </View>
        <TouchableOpacity
          style={{ flex: 3, justifyContent: "center", alignItems: "center" }}
          onPress={() => {
            navigation.navigate("SelectedCustomExercise", { id: 1 });
          }}
        >
          <Text
            style={{
              backgroundColor: secondaryColor,
              paddingVertical: 8,
              paddingHorizontal: 20,
              color: textAccentSecondary,
              borderRadius: 100,
              fontFamily: "Montserrat-Bold",
            }}
          >
            Add
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SummaryScreen;
