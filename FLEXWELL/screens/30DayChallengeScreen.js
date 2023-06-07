import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChallenge } from "../action/challengeCreator";
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
import {
  primaryColor,
  secondaryColor,
  textAccent,
  textAccentSecondary,
  textSecondary,
} from "../color-and-size.config";
import LottieView from "lottie-react-native";

const sleepingAnimation = require("../assets/lottie/rest-bell.json");

const ThirtyDayChallenge = ({ route, navigation }) => {
  // Data untuk flatlist

  const { isLoading, challenge, errorMsg } = useSelector(
    (state) => state.fetchChallange
  );

  console.log(challenge);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChallenge());
  }, []);

  console.log(challenge, "--30daychallengescreen--");

  const toDetailDay = (challenge) => {
    console.log(challenge, "--go to detail--");
    navigation.navigate("ChallengeDetail", { challenge });
  };

  //buat list item untuk persatuan yang dicustom berdasarkan data darai flat list
  const ListItem = ({ item }) => (
    <TouchableOpacity
      disabled={item.name === "Rest and Recovery" ? true : false}
      onPress={() => {
        toDetailDay(item);
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            paddingVertical: 8,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            {item?.activity?.status === "Finished" ? (
              <FontAwesome name="check-circle" size={16} color={"green"} />
            ) : (
              <FontAwesome
                name="circle-o"
                size={16}
                color={textAccentSecondary}
              />
            )}
          </View>
          <View
            style={{
              // borderWidth: 2,
              borderRadius: 16,
              height: 75,
              flex: 15,
              justifyContent: "center",
              backgroundColor:
                item.name === "Rest and Recovery" ? textAccent : secondaryColor,
              // opacity: ,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingLeft: 0,
                gap: 4,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 24,
                  color: textSecondary,
                  marginLeft: 4,
                }}
              >
                Day {item.id} :
              </Text>
              <Text
                style={{
                  fontSize: 16,
                }}
              >
                {item.name}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  //flat list with avatar
  const FlatListWithAvatar = () => (
    <View style={{ flex: 1 }}>
      <FlatList
        data={challenge}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </View>
  );

  // Styles
  const styles = {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 24,
      marginRight: 16,
    },
    name: {
      flex: 1,
      fontSize: 16,
    },
    button: {
      padding: 8,
    },
    icon: {
      width: 24,
      height: 24,
    },
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        marginHorizontal: 16,
      }}
    >
      <View
        style={{
          marginTop: 32,
          marginBottom: 8,
          gap: 8,
        }}
      >
        <Text
          style={{
            fontFamily: "Montserrat-Bold",
            fontSize: 24,
          }}
        >
          30 Days Challenge
        </Text>
        <View
          style={{
            width: "70%",
            borderWidth: 0.2,
            opacity: 0.2,
          }}
        />
      </View>
      <FlatListWithAvatar />
    </View>
  );
};

export default ThirtyDayChallenge;
