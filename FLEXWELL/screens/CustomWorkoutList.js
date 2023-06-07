import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { Fumi } from "react-native-textinput-effects";
import { useNavigation } from "@react-navigation/native";
import {
  buttonTextSize,
  primaryColor,
  secondaryColor,
  textAccent,
  textAccentSecondary,
  textPrimary,
  textSecondary,
} from "../color-and-size.config";
const CustomWorkoutList = ({ route, navigation }) => {
  // const { id, name, totalDuration, exercises, totalSet, activity } =
  //   route.params;
  // Data untuk flatlist

  const data = route.params;
  console.log(data, "xxxxx");
  console.log(data.item.exercises, "<<<<");

  // console.log(route.params, "ini Params");
  // console.log(totalDuration);
  // const data = [
  //   {
  //     id: "1",
  //     name: "Lever Shoulder Press ",
  //     avatar:
  //       "https://fitnessprogramer.com/wp-content/uploads/2021/04/Lever-Shoulder-Press.gif",
  //   },
  //   {
  //     id: "2",
  //     name: "Dumbbell Shoulder Press ",
  //     avatar:
  //       "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif",
  //   },
  //   {
  //     id: "3",
  //     name: "Rear Delt Fly Machine ",
  //     avatar:
  //       "https://fitnessprogramer.com/wp-content/uploads/2021/02/Rear-Delt-Machine-Flys.gif",
  //   },
  //   {
  //     id: "4",
  //     name: "Lever Shoulder Press ",
  //     avatar:
  //       "https://fitnessprogramer.com/wp-content/uploads/2021/04/Lever-Shoulder-Press.gif",
  //   },
  //   {
  //     id: "5",
  //     name: "Rear Delt Fly Machine ",
  //     avatar:
  //       "https://fitnessprogramer.com/wp-content/uploads/2021/02/Rear-Delt-Machine-Flys.gif",
  //   },
  //   {
  //     id: "6",
  //     name: "Rear Delt Fly Machine ",
  //     avatar:
  //       "https://fitnessprogramer.com/wp-content/uploads/2021/02/Rear-Delt-Machine-Flys.gif",
  //   },
  // ];

  const toOneExercise = (id) => {
    console.log(id);
    navigation.navigate("CustomChallengeExercise", { id });
  };

  //buat list item untuk persatuan yang dicustom berdasarkan data darai flat list
  const ListItem = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        gap: 4,
        width: "100%",
        flex: 1,
        marginVertical: 4,
      }}
    >
      <View
        style={{
          height: 64,
          width: 64,
          flex: 2,
        }}
      >
        <Image
          source={{ uri: item.gifUrl }}
          style={{ height: 64, width: 64 }}
        />
      </View>
      <View style={{ height: 64, width: 20, flex: 5 }}>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontFamily: "Montserrat-Bold" }}>{item.name}</Text>
          <Text
            style={{
              fontSize: 12,
            }}
          >
            {item.totalSet} sets x {item.repetition} reps
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 24,
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 16,
          backgroundColor: primaryColor,
          // mar
        }}
      >
        <Text
          style={{
            fontFamily: "Montserrat-Bold",
            fontSize: 8,
            paddingVertical: 8,
            paddingHorizontal: 0,
            borderRadius: 16,
            color: textPrimary,
          }}
          numberOfLines={1}
        >
          {item.bodyPart.toUpperCase()}
        </Text>
      </View>
    </View>
  );

  //flat list with avatar
  const FlatListWithAvatar = () => (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data.item.exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </View>
  );

  return (
    <View
      style={{
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
        marginTop: 32,
      }}
    >
      <View
        style={{
          height: 48,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderTopWidth: 0.8,
          borderBottomWidth: 0.8,
          borderColor: textAccent,
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 16,
            paddingHorizontal: 16,
          }}
          numberOfLines={1}
        >
          {data.item.name}
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginHorizontal: 16,
          marginTop: 24,
        }}
      >
        <View
          style={{
            borderRadius: 12,
            overflow: "hidden",
            marginHorizontal: 16,
          }}
        >
          <View
            style={{
              height: 200,
              alignItems: "center",
              borderWidth: 0.8,
              borderRadius: 16,
              paddingVertical: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 32,
                width: "100%",
                justifyContent: "space-around",
                flex: 2,
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                  }}
                >
                  Exercise
                </Text>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "700",
                  }}
                >
                  {data.item.exercises.length}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                  }}
                >
                  Sets
                </Text>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "700",
                  }}
                >
                  {data.item.totalSet}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                  }}
                >
                  Duration
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-end",
                    gap: 4,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 24,
                      fontFamily: "Montserrat-Bold",
                    }}
                  >
                    {data.item.totalDuration}
                  </Text>
                  <Text
                    style={{
                      fontWeight: "500",
                      fontFamily: "Montserrat-Bold",
                    }}
                  >
                    min
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={{
                flex: 1,
                marginTop: 24,
                backgroundColor: secondaryColor,
                padding: 12,
                width: "90%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 16,
              }}
              onPress={() => {
                toOneExercise(data.item.id);
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat-Bold",
                  fontSize: 20,
                  color: textSecondary,
                }}
              >
                Start Day
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 16,
          marginVertical: 16,
          flex: 1,
        }}
      >
        <FlatListWithAvatar />
      </View>
    </View>
  );
};

export default CustomWorkoutList;
