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

const CustomWorkouts = ({ navigation }) => {
  const [status, setStatus] = useState(true);
  const [title, setTitle] = useState("Workout ala Arnold");

  const animation = require("../assets/lottie/custom-empty.json");

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

  const filled = (
    <Text
      style={{
        color: textAccentSecondary,
        fontFamily: "Poppins",
        fontSize: 16,
        paddingVertical: 6,
      }}
    >
      {title}
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
          source={{ uri: item.avatar }}
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
          3 sets x 12 reps x 10 kg
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
          SHOULDERS
        </Text>
      </View>
    </View>
  );

  const FlatListWithAvatar = () => (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
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
        {status ? filled : empty}

        <View
          style={{
            borderBottomWidth: 2,
            width: "100%",
            borderColor: textAccent,
          }}
        />
      </View>
      <View
        style={{ flex: 12, width: "100%", display: !status ? "flex" : "none" }}
      >
        <LottieView source={animation} autoPlay loop />
      </View>
      <View
        style={{ flex: 6, width: "100%", display: status ? "flex" : "none" }}
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
          navigation.navigate("CustomLibrary");
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
