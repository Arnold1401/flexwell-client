import React, { useState } from "react";
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
const ExerciseDetailScreen = ({ route, navigation }) => {
  const { id } = route.params;

  // Data untuk flatlist
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

  const [favorite, setFavorite] = useState(false);

  const toOneExercise = (id) => {
    console.log(id);
    navigation.navigate("DayExercise");
  };

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
          <Text style={{ fontFamily: "Poppins", fontSize: 16, flex: 16 }}>
            {data[0].name}
          </Text>
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
            borderTopWidth: 2,
            borderBottomWidth: 2,
          }}
        >
          <Image
            source={{ uri: data[0].avatar }}
            style={{
              width: "100%",
              height: 200,
            }}
          />
        </View>
        <View
          style={{
            marginVertical: 16,
            marginHorizontal: 8,
            flex: 1,
            padding: 4,
          }}
        >
          <Text style={{ fontFamily: "Poppins", fontSize: 16 }}>
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
          </Text>
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
