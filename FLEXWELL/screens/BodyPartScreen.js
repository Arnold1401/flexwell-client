import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  primaryColor,
  secondaryColor,
  textAccent,
  textAccentSecondary,
  textSecondary,
} from "../color-and-size.config";
import bicep from "../assets/body-libraries/biceps.png";
import triceps from "../assets/body-libraries/triceps.png";
import shoulders from "../assets/body-libraries/shoulders.png";
import chest from "../assets/body-libraries/chest.png";
import back from "../assets/body-libraries/back.png";
import abs from "../assets/body-libraries/abs.png";
import legs from "../assets/body-libraries/legs.png";

const BodyPartScreen = ({ route, navigation }) => {
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "column",
          flex: 1,
          alignItems: "center",
          paddingVertical: 16,
          gap: 16,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 94,
            marginHorizontal: 16,
            gap: 8,
          }}
          onPress={() => {
            // console.log("jalan Biceps");
            navigation.navigate("ExerciseListScreen", {
              muscle: { bodyPart: "biceps", name: "Biceps" },
            });
          }}
        >
          <View
            style={{
              flex: 2,
              height: 94,
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              borderWidth: 0.8,
              borderRadius: 16,
              borderColor: textAccent,
            }}
          >
            <Image
              source={bicep}
              style={{ height: 90, width: 90 }}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              flex: 3,
              flexDirection: "column",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <Text
              style={{ fontSize: 32, fontWeight: "bold", color: textSecondary }}
            >
              Biceps
            </Text>
            <Text
              style={{
                backgroundColor: secondaryColor,
                alignSelf: "baseline",
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderRadius: 16,
              }}
            >
              12 exercise
            </Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <FontAwesome name={"info-circle"} size={32} color={textSecondary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 94,
            marginHorizontal: 16,
            gap: 8,
          }}
          onPress={() => {
            navigation.navigate("ExerciseListScreen", {
              muscle: { bodyPart: "triceps", name: "Triceps" },
            });
          }}
        >
          <View
            style={{
              flex: 2,
              height: 94,
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              borderWidth: 0.8,
              borderRadius: 16,
              borderColor: textAccent,
            }}
          >
            <Image
              source={triceps}
              style={{ height: 90, width: 90 }}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              flex: 3,
              flexDirection: "column",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <Text
              style={{ fontSize: 32, fontWeight: "bold", color: textSecondary }}
            >
              Triceps
            </Text>
            <Text
              style={{
                backgroundColor: secondaryColor,
                alignSelf: "baseline",
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderRadius: 16,
              }}
            >
              12 exercise
            </Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <FontAwesome name={"info-circle"} size={32} color={textSecondary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ExerciseListScreen", {
              muscle: { bodyPart: "delts", name: "Shoulders" },
            });
          }}
          style={{
            flexDirection: "row",
            height: 94,
            marginHorizontal: 16,
            gap: 8,
          }}
        >
          <View
            style={{
              flex: 2,
              height: 94,
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              borderWidth: 0.8,
              borderRadius: 16,
              borderColor: textAccent,
            }}
          >
            <Image
              source={shoulders}
              style={{ height: 90, width: 90 }}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              flex: 3,
              flexDirection: "column",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <Text
              style={{ fontSize: 32, fontWeight: "bold", color: textSecondary }}
            >
              Shoulders
            </Text>
            <Text
              style={{
                backgroundColor: secondaryColor,
                alignSelf: "baseline",
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderRadius: 16,
              }}
            >
              12 exercise
            </Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <FontAwesome name={"info-circle"} size={32} color={textSecondary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ExerciseListScreen", {
              muscle: { bodyPart: "pectorals", name: "Chest" },
            });
          }}
          style={{
            flexDirection: "row",
            height: 94,
            marginHorizontal: 16,
            gap: 8,
          }}
        >
          <View
            style={{
              flex: 2,
              height: 94,
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              borderWidth: 0.8,
              borderRadius: 16,
              borderColor: textAccent,
            }}
          >
            <Image
              source={chest}
              style={{ height: 90, width: 90 }}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              flex: 3,
              flexDirection: "column",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <Text
              style={{ fontSize: 32, fontWeight: "bold", color: textSecondary }}
            >
              Chest
            </Text>
            <Text
              style={{
                backgroundColor: secondaryColor,
                alignSelf: "baseline",
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderRadius: 16,
              }}
            >
              12 exercise
            </Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <FontAwesome name={"info-circle"} size={32} color={textSecondary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ExerciseListScreen", {
              muscle: { bodyPart: "lats", name: "Back" },
            });
          }}
          style={{
            flexDirection: "row",
            height: 94,
            marginHorizontal: 16,
            gap: 8,
          }}
        >
          <View
            style={{
              flex: 2,
              height: 94,
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              borderWidth: 0.8,
              borderRadius: 16,
              borderColor: textAccent,
            }}
          >
            <Image
              source={back}
              style={{ height: 90, width: 90 }}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              flex: 3,
              flexDirection: "column",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <Text
              style={{ fontSize: 32, fontWeight: "bold", color: textSecondary }}
            >
              Back
            </Text>
            <Text
              style={{
                backgroundColor: secondaryColor,
                alignSelf: "baseline",
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderRadius: 16,
              }}
            >
              12 exercise
            </Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <FontAwesome name={"info-circle"} size={32} color={textSecondary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ExerciseListScreen", {
              muscle: { bodyPart: "abs", name: "Abs" },
            });
          }}
          style={{
            flexDirection: "row",
            height: 94,
            marginHorizontal: 16,
            gap: 8,
          }}
        >
          <View
            style={{
              flex: 2,
              height: 94,
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              borderWidth: 0.8,
              borderRadius: 16,
              borderColor: textAccent,
            }}
          >
            <Image
              source={abs}
              style={{ height: 90, width: 90 }}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              flex: 3,
              flexDirection: "column",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <Text
              style={{ fontSize: 32, fontWeight: "bold", color: textSecondary }}
            >
              ABS
            </Text>
            <Text
              style={{
                backgroundColor: secondaryColor,
                alignSelf: "baseline",
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderRadius: 16,
              }}
            >
              12 exercise
            </Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <FontAwesome name={"info-circle"} size={32} color={textSecondary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ExerciseListScreen", {
              muscle: { bodyPart: "quads", name: "Legs" },
            });
          }}
          style={{
            flexDirection: "row",
            height: 94,
            marginHorizontal: 16,
            gap: 8,
          }}
        >
          <View
            style={{
              flex: 2,
              height: 94,
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              borderWidth: 0.8,
              borderRadius: 16,
              borderColor: textAccent,
            }}
          >
            <Image
              source={legs}
              style={{ height: 90, width: 90 }}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              flex: 3,
              flexDirection: "column",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <Text
              style={{ fontSize: 32, fontWeight: "bold", color: textSecondary }}
            >
              Legs
            </Text>
            <Text
              style={{
                backgroundColor: secondaryColor,
                alignSelf: "baseline",
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderRadius: 16,
              }}
            >
              12 exercise
            </Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <FontAwesome name={"info-circle"} size={32} color={textSecondary} />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BodyPartScreen;
