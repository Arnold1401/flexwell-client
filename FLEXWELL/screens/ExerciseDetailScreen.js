import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
import { fetchExerciseDetailMiddleware } from "../action/libraryCreator";
import { useDispatch, useSelector } from "react-redux";

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

const ExerciseDetailScreen = ({ route, navigation }) => {
  const { id } = route.params;

  const { isLoading, exercise, erroMsg } = useSelector(
    (state) => state.fetchExerciseDetail
  );

  console.log(exercise, "ini exercise");

  const dispatch = useDispatch();

  // Data untuk flatlist

  const [favorite, setFavorite] = useState(false);
  console.log(id, " ini ID");

  useEffect(() => {
    console.log("masuk useEffect");
    dispatch(fetchExerciseDetailMiddleware(id));
  }, []);

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
            onPress={() => (!favorite ? setFavorite(true) : setFavorite(false))}
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
            // borderTopWidth: 2,
            // borderBottomWidth: 2,
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
          {exercise?.name.split(" ").map((word) => {
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

          {/* <Text style={{ fontFamily: "Poppins", fontSize: 16 }}>
            Instructions
          </Text>
          <Text style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            facilisis rutrum nibh, id condimentum odio condimentum tincidunt.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; In interdum commodo tincidunt. Cras luctus
            risus sed magna egestas ornare. {"\n"}
            {"\n"}Nulla et tincidunt tellus. Vestibulum tristique diam sit amet
            urna posuere euismod sit amet eget nisl. Donec vulputate urna id
            scelerisque tristique. Duis imperdiet sagittis justo vitae blandit.
            Suspendisse dui ante, dictum sit amet nisi id, pharetra auctor
            justo. Nullam blandit tortor sit amet ipsum iaculis tristique. Etiam
            eu posuere arcu, eu tincidunt dolor.{" "}
          </Text> */}
        </View>
        <View
          style={{
            marginTop: 4,
            marginBottom: 16,
            marginHorizontal: 8,
            flex: 1,
            padding: 16,
            backgroundColor: textAccent,
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          <Text style={{ fontFamily: "Poppins", fontSize: 16 }}>Notes</Text>
          <Text style={{ textAlign: "justify" }}>
            Jika ada note, nanti bisa ditulis di sini
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ExerciseDetailScreen;
