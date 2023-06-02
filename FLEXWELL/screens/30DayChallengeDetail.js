import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
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
  const { id } = route.params;
  // Data untuk flatlist
  const data = [
    {
      id: "1",
      name: "John Doe",
      avatar: "https://unsplash.com/photos/y83Je1OC6Wc",
    },
    { id: "2", name: "Jane Smith", avatar: "https://picsum.photos/id/2/info" },
    {
      id: "3",
      name: "Mike Johnson",
      avatar: "https://picsum.photos/id/3/info",
    },
    {
      id: "4",
      name: "Mike Johnson",
      avatar: "https://picsum.photos/id/4/info",
    },
    {
      id: "5",
      name: "Mike Johnson",
      avatar: "https://picsum.photos/id/5/info",
    },
  ];

  const toOneExercise = (id) => {
    console.log(id);
    navigation.navigate("DayExercise");
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
        <Text>{item.avatar}</Text>
      </View>
      <View style={{ height: 64, width: 20, flex: 5 }}>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontFamily: "Montserrat-Bold" }}>
            Standing Cable Front Rise
          </Text>
          <Text
            style={{
              fontSize: 12,
            }}
          >
            3sets x 12reps x 10kg
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 64,
          flex: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Montserrat-Bold",
            fontSize: 8,
            paddingVertical: 8,
            paddingHorizontal: 12,
            backgroundColor: primaryColor,
            borderRadius: 16,
          }}
        >
          SHOULDERS
        </Text>
      </View>
    </View>
  );

  //flat list with avatar
  const FlatListWithAvatar = () => (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
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
          Day {id} - Introduction to Weightlifting
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
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: "Montserrat-Bold",
                  fontSize: 20,
                  alignSelf: "baseline",
                }}
                numberOfLines={1}
              >
                Day {id}/{id} - Push Day ala Arnold
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
                  13
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
                  29
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
                    80
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
            <Pressable
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
                toOneExercise(id);
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat-Bold",
                  fontSize: 20,
                  color: textSecondary,
                }}
              >
                Start Day {id}
              </Text>
            </Pressable>
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
