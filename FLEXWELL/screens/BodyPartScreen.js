import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";

const BodyPartScreen = ({ route, navigation }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        paddingHorizontal: 20,
        alignItems: "center",
        gap: 8,
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <Text>BodyPartScreen</Text>
      </View>
      <View
        style={{
          flex: 10,
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ExercisesScreen");
              }}
            >
              <Text>Biceps</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity>
              <Text>Triceps</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1 }}>
            <TouchableOpacity>
              <Text>Shoulder</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 3 }}>
          <Image
            source={{ uri: "https://picsum.photos/id/237/200/300" }}
            style={{ flex: 1 }}
          />
        </View>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity>
              <Text>Biceps</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity>
              <Text>Triceps</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1 }}>
            <TouchableOpacity>
              <Text>Shoulder</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BodyPartScreen;
