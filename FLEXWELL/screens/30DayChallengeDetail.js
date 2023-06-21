import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  FlatList,
  Image,
  TouchableOpacity,
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
const ThirtyDayChallengeDetail = ({ route, navigation }) => {
  const { challenge } = route.params;
  // Data untuk flatlist

  const toOneExercise = () => {
    navigation.navigate("DayExercise", { challenge });
  };

  //buat list item untuk persatuan yang dicustom berdasarkan data darai flat list
  const ListItem = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        gap: 0,
        width: "100%",
        flex: 1,
        marginVertical: 10,
        justifyContent: "flex-start",
        // backgroundColor: "yellow",
      }}
    >
      <View
        style={{
          height: 100,
          width: 64,
          flex: 2,
        }}
      >
        <Image
          source={{
            uri: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Lever-Shoulder-Press.gif",
          }}
          style={{ height: "100%", width: "100%" }}
        />
      </View>
      <View
        style={{
          height: 100,
          width: 20,
          flex: 5,
          padding: 12,
          alignItems: "flex-start",
        }}
      >
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text style={{ fontFamily: "Montserrat-Bold" }} numberOfLines={2}>
            {item?.name?.split(" ").map((word) => {
              word = word.charAt(0).toUpperCase() + word.slice(1);
              return `${word} `;
            })}
          </Text>
          <Text
            style={{
              fontSize: 12,
            }}
          >
            {item.totalSet}sets x {item.repetition}reps{" "}
            {/* {item.weight === null ? "--" : item.weight}kg */}
          </Text>
        </View>
        <View
          style={{
            paddingVertical: 4,
            paddingHorizontal: 12,
            backgroundColor: primaryColor,
            alignSelf: "baseline",
            borderRadius: 20,
            marginTop: 5,
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-Bold",
              fontSize: 10,
              textAlign: "center",
              color: "white",
            }}
          >
            {item.bodyPart.toUpperCase()}
          </Text>
        </View>
      </View>
    </View>
  );

  //flat list with avatar
  const FlatListWithAvatar = () => (
    <View style={{ flex: 1 }}>
      <FlatList
        data={challenge.exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem item={item} columnWrapperStyle={{ gap: 8 }} />
        )}
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
          {challenge?.name?.split(" ").map((word) => {
            word = word.charAt(0).toUpperCase() + word.slice(1);
            return `${word} `;
          })}
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
              borderWidth: 2,
              borderRadius: 16,
              paddingVertical: 8,
              backgroundColor: secondaryColor,
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: "Montserrat-Bold",
                  fontSize: 20,
                  alignSelf: "baseline",
                }}
                numberOfLines={1}
              >
                {challenge.name.split(":")[1]}
              </Text>
            </View>
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
                  {challenge.exercises.length}
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
                  {challenge.totalSet}
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
                    {challenge.totalDuration}
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
                borderWidth: 1,
                backgroundColor: "white",
              }}
              onPress={() => {
                toOneExercise();
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
        }}
      >
        <FlatListWithAvatar />
      </View>
    </View>
  );
};

export default ThirtyDayChallengeDetail;
