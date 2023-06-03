import {
  View,
  Text,
  TextInput,
  Button,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Calendar } from "react-native-calendars";
import {
  buttonTextSize,
  primaryColor,
  textAccent,
  textAccentSecondary,
  textPrimary,
  textSecondary,
} from "../color-and-size.config";

const Personalize = () => {
  const [gender, setGender] = useState("");
  const [fullname, setFullname] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [textDate, setTextDate] = useState("");
  const [biceps, setBiceps] = useState(false);
  const [abs, setAbs] = useState(false);
  const [waist, setWaist] = useState(false);
  const [chest, setChest] = useState(false);
  const [shoulders, setShoulders] = useState(false);
  const [thigh, setTigh] = useState(false);
  const [calf, setCalf] = useState(false);

  const resetstate = () => {
    setBiceps(false);
    setAbs(false);
    setWaist(false);
    setChest(false);
    setShoulders(false);
    setTigh(false);
    setCalf(false);
  };

  const handleBiceps = () => {
    resetstate();
    setBiceps(true);
  };

  const handleAbs = () => {
    resetstate();
    setAbs(true);
  };

  const handleWaist = () => {
    resetstate();
    setWaist(true);
  };

  const handleChest = () => {
    resetstate();
    setChest(true);
  };

  const handlShoulders = () => {
    resetstate();
    setShoulders(true);
  };

  const handleThigh = () => {
    resetstate();
    setTigh(true);
  };

  const handleCalf = () => {
    resetstate();
    setCalf(true);
  };

  const showDatePicker = () => {
    setDatePickerVisibility("true");
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setTextDate(date.dateString);
    hideDatePicker();
  };

  const dataGender = [
    { key: 1, value: "Male" },
    { key: 2, value: "Female" },
  ];

  const doSave = () => {
    console.log(`
      ${fullname},
      ${gender}
      ${textDate}
      ${height}
      ${weight}
      ${gender}
      ${gender}
      ${gender}
      ${gender}
    `);
  };

  return (
    <ScrollView>
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
            width: "100%",
            alignItems: "center",
            marginTop: 24,
            gap: 4,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              width: "100%",
              paddingHorizontal: 8,
            }}
          >
            <Text
              style={{
                color: textSecondary,
                fontFamily: "Montserrat-Bold",
              }}
            >
              Full Name
            </Text>
          </View>
          <TextInput
            value={fullname}
            onChangeText={(fullname) => setFullname(fullname)}
            placeholder={"Full Name"}
            style={{
              width: "100%",
              height: 44,
              borderWidth: 0.8,
              borderRadius: 16,
              borderColor: textAccentSecondary,
              paddingHorizontal: 22,
            }}
            placeholderTextColor={textAccent}
          />
        </View>
        <View
          style={{
            width: "100%",
            gap: 4,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              width: "100%",
              paddingHorizontal: 8,
            }}
          >
            <Text
              style={{
                color: textSecondary,
                fontFamily: "Montserrat-Bold",
              }}
            >
              Gender
            </Text>
          </View>
          <SelectList
            setSelected={(val) => setGender(val)}
            data={dataGender}
            save="value"
            search={false}
            boxStyles={{
              borderRadius: 16,
              borderColor: textSecondary,
              borderWidth: 0.8,
            }}
            defaultOption={{
              key: "10",
              value: "Select Gender",
              disabled: true,
            }}
          />
        </View>
        <View
          style={{
            width: "100%",
            gap: 4,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "flex-start",
              paddingHorizontal: 8,
            }}
          >
            <Text
              style={{
                fontFamily: "Montserrat-Bold",
              }}
            >
              Date of Birth
            </Text>
          </View>
          <View
            style={{
              borderWidth: 0.8,
              borderRadius: 16,
              overflow: "hidden",
              height: isDatePickerVisible ? "auto" : 45,
              width: "100%",
              alignSelf: "baseline",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                paddingVertical: 5,
                marginTop: isDatePickerVisible ? 7 : 0,
              }}
            >
              <Pressable
                onPress={isDatePickerVisible ? hideDatePicker : showDatePicker}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    marginLeft: 20,
                    color: textDate !== "" ? textSecondary : textAccent,
                  }}
                >
                  {textDate !== "" ? textDate : "Select Date"}
                </Text>
                <FontAwesome
                  name={isDatePickerVisible ? "chevron-up" : "chevron-down"}
                  size={12}
                  color={textAccentSecondary}
                  style={{ marginRight: 20, opacity: 0.4 }}
                />
              </Pressable>
            </View>
            <Calendar
              style={{ display: !isDatePickerVisible ? "none" : "flex" }}
              onDayPress={handleConfirm}
            />
          </View>
        </View>
        <View
          style={{
            width: "100%",
            gap: 4,
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <View style={{ flex: 1, gap: 4 }}>
            <Text style={{ marginLeft: 10, fontFamily: "Montserrat-Bold" }}>
              Height
            </Text>
            <TextInput
              onChangeText={(height) => {
                setHeight(height);
              }}
              style={{
                borderWidth: 0.8,
                borderRadius: 12,
                height: 45,
                paddingHorizontal: 20,
              }}
              placeholder="e.g. 180"
              placeholderTextColor={textAccent}
            />
          </View>
          <View style={{ flex: 1, gap: 4 }}>
            <Text style={{ marginLeft: 10, fontFamily: "Montserrat-Bold" }}>
              Weight
            </Text>
            <TextInput
              onChangeText={(weight) => setWeight(weight)}
              style={{
                borderWidth: 0.8,
                borderRadius: 12,
                height: 45,
                paddingHorizontal: 20,
              }}
              placeholder="e.g. 60"
              placeholderTextColor={textAccent}
            />
          </View>
        </View>
        <View
          style={{
            width: "100%",
            gap: 4,
            marginTop: 24,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins",
              fontSize: 20,
              alignSelf: "flex-start",
            }}
          >
            Muscle Measurement
          </Text>
          <View
            style={{
              width: "100%",
              gap: 12,
              flexDirection: "row",
              height: 450,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                backgroundColor: biceps
                  ? "red"
                  : abs
                  ? "yellow"
                  : waist
                  ? "green"
                  : chest
                  ? "blue"
                  : shoulders
                  ? "purple"
                  : thigh
                  ? "grey"
                  : calf
                  ? "pink"
                  : "white",
                borderWidth:
                  !biceps &&
                  !abs &&
                  !waist &&
                  !chest &&
                  !shoulders &&
                  !thigh &&
                  !calf
                    ? 0.8
                    : 0,
                flex: 3,
                borderRadius: 16,
              }}
            ></View>
            <View style={{ flex: 1, gap: 8 }}>
              <View style={{ gap: 2 }}>
                <Text style={{ fontFamily: "Montserrat-Bold", marginLeft: 4 }}>
                  Biceps
                </Text>
                <TextInput
                  style={{
                    borderWidth: 0.8,
                    borderRadius: 8,
                    paddingHorizontal: 8,
                    height: 32,
                    fontSize: 20,
                    paddingVertical: 4,
                  }}
                  onPressIn={handleBiceps}
                />
              </View>
              <View style={{ gap: 2 }}>
                <Text style={{ fontFamily: "Montserrat-Bold", marginLeft: 4 }}>
                  ABS
                </Text>
                <TextInput
                  style={{
                    borderWidth: 0.8,
                    borderRadius: 8,
                    paddingHorizontal: 8,
                    height: 32,
                    fontSize: 20,
                    paddingVertical: 4,
                  }}
                  onPressIn={handleAbs}
                />
              </View>
              <View style={{ gap: 2 }}>
                <Text style={{ fontFamily: "Montserrat-Bold", marginLeft: 4 }}>
                  Waist
                </Text>
                <TextInput
                  style={{
                    borderWidth: 0.8,
                    borderRadius: 8,
                    paddingHorizontal: 8,
                    height: 32,
                    fontSize: 20,
                    paddingVertical: 4,
                  }}
                  onPressIn={handleWaist}
                />
              </View>
              <View style={{ gap: 2 }}>
                <Text style={{ fontFamily: "Montserrat-Bold", marginLeft: 4 }}>
                  Chest
                </Text>
                <TextInput
                  style={{
                    borderWidth: 0.8,
                    borderRadius: 8,
                    paddingHorizontal: 8,
                    height: 32,
                    fontSize: 20,
                    paddingVertical: 4,
                  }}
                  onPressIn={handleChest}
                />
              </View>
              <View style={{ gap: 2 }}>
                <Text style={{ fontFamily: "Montserrat-Bold", marginLeft: 4 }}>
                  Shoulders
                </Text>
                <TextInput
                  style={{
                    borderWidth: 0.8,
                    borderRadius: 8,
                    paddingHorizontal: 8,
                    height: 32,
                    fontSize: 20,
                    paddingVertical: 4,
                  }}
                  onPressIn={handlShoulders}
                />
              </View>
              <View style={{ gap: 2 }}>
                <Text style={{ fontFamily: "Montserrat-Bold", marginLeft: 4 }}>
                  Thigh
                </Text>
                <TextInput
                  style={{
                    borderWidth: 0.8,
                    borderRadius: 8,
                    paddingHorizontal: 8,
                    height: 32,
                    fontSize: 20,
                    paddingVertical: 4,
                  }}
                  onPressIn={handleThigh}
                />
              </View>
              <View style={{ gap: 2 }}>
                <Text style={{ fontFamily: "Montserrat-Bold", marginLeft: 4 }}>
                  Calf
                </Text>
                <TextInput
                  style={{
                    borderWidth: 0.8,
                    borderRadius: 8,
                    paddingHorizontal: 8,
                    height: 32,
                    fontSize: 20,
                    paddingVertical: 4,
                  }}
                  onPressIn={handleCalf}
                />
              </View>
            </View>
          </View>
          <Pressable
            onPress={doSave()}
            style={{
              backgroundColor: primaryColor,
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              marginTop: 40,
              marginBottom: 20,
              borderRadius: 16,
              width: "100%",
            }}
          >
            <Text
              style={{
                fontFamily: "Montserrat-Bold",
                fontSize: 16,
                color: textPrimary,
              }}
            >
              Save Record
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Personalize;
