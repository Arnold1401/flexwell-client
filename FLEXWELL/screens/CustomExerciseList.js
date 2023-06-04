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
  Dimensions,
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

const CustomExerciseList = ({ route, navigation }) => {
  const { id } = route.params;

  const [favorite, setFavorite] = useState(false);
  const [status, setStatus] = useState(false);

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

  const selected = (id) => {
    console.log(id);
    status ? setStatus(false) : setStatus(true);
  };

  //buat list item untuk persatuan yang dicustom berdasarkan data darai flat list
  const ListItem = ({ item }) => (
    <TouchableOpacity style={{ flex: 1, alignItems: "flex-start" }}>
      <View
        style={{
          width: 160,
          height: 200,
          borderWidth: !status ? 0.5 : 2,
          borderColor: !status ? textAccent : textSecondary,
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 16,
          overflow: "hidden",
        }}
      >
        <TouchableOpacity
          style={{
            width: "100%",
            padding: 8,
            flex: 5,
          }}
          onPress={() => selected(item.id)}
        >
          <Image
            source={{ uri: item.avatar }}
            style={{ height: "100%", width: "100%" }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 0,
            marginRight: 8,
            marginTop: 12,
          }}
          onPress={() => (!favorite ? setFavorite(true) : setFavorite(false))}
        >
          <FontAwesome
            name={!favorite ? "star-o" : "star"}
            size={24}
            color={!favorite ? textAccentSecondary : primaryColor}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 2,
            backgroundColor: primaryColor,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 2,
          }}
          onPress={() => toOneExercise(item.id)}
        >
          <Text
            style={{
              fontFamily: "Poppins",
              color: textPrimary,
            }}
            numberOfLines={2}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  //flat list with avatar
  const FlatListWithAvatar = () => (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
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

  return (
    <View
      style={{
        flex: 1,
        marginTop: 24,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flex: 1, gap: 4, marginBottom: 8 }}>
        <Text
          style={{
            fontSize: 32,
            color: textSecondary,
            fontWeight: "bold",
          }}
        >
          SHOULDERS
        </Text>
        <View
          style={{
            borderBottomWidth: 2,
            opacity: 0.2,
            borderColor: textAccentSecondary,
          }}
        />
      </View>
      <View
        style={{
          flex: 8,
          flexDirection: "row",
          paddingHorizontal: 8,
        }}
      >
        <FlatListWithAvatar />
      </View>
    </View>
  );
};

export default CustomExerciseList;
