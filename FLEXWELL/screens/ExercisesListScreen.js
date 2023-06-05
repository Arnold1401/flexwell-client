import React, { useState, useEffect } from "react";
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
import loadingAnimation from "../assets/lottie/loading.json";

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
import { useDispatch, useSelector } from "react-redux";
import { fetchLibrary } from "../action/libraryCreator";
import LottieView from "lottie-react-native";

const ExercisesScreen = ({ route, navigation }) => {
  const { muscle } = route.params;

  const [favorite, setFavorite] = useState(false);

  // Data untuk flatlist
  const { isLoading, library, errorMsg } = useSelector(
    (state) => state.fetchLibrary
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLibrary(muscle.bodyPart));
  }, []);

  const toOneExercise = (id) => {
    console.log(id);
    navigation.navigate("ExerciseDetailScreen", { id });
  };

  //buat list item untuk persatuan yang dicustom berdasarkan data darai flat list
  const ListItem = ({ item }) => (
    <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{
          width: 160,
          height: 200,
          borderWidth: 0.5,
          borderColor: textAccent,
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
          onPress={() => toOneExercise(item.id)}
        >
          <Image
            source={{ uri: item.gifUrl }}
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
    <View
      style={{
        flex: 1,
        // backgroundColor: "blue",
        // alignItems: "center",
        // width: "100%",
      }}
    >
      <FlatList
        data={library}
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
        paddingHorizontal: 8,
        marginVertical: 24,
        alignItems: "center",
      }}
    >
      <View style={{ flex: 1, gap: 4 }}>
        <Text
          style={{
            fontSize: 32,
            color: textSecondary,
            fontWeight: "bold",
          }}
        >
          {muscle.name}
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
          flex: 7,
          flexDirection: "row",
        }}
      >
        {isLoading ? (
          <LottieView
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 150,
              height: 150,
              alignSelf: "center",
              // backgroundColor: "blue",
            }}
            source={loadingAnimation}
            autoPlay
            loop
          />
        ) : (
          <FlatListWithAvatar />
        )}
      </View>
    </View>
  );
};

export default ExercisesScreen;
