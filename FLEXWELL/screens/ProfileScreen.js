import {
  View,
  Text,
  TextInput,
  Button,
  Pressable,
  ScrollView,
  Alert,
  Modal,
  StyleSheet,
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
import { useDispatch, useSelector } from "react-redux";
import { saveMeasurement } from "../action/profileCreator";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

const ProfileScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [messageModal, setModalMessage] = useState("");
  const dispatch = useDispatch();

  const [gender, setGender] = useState("");
  const [fullname, setFullname] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [textDate, setTextDate] = useState("");
  const [biceps, setBiceps] = useState(false);
  const [vbiceps, setvBiceps] = useState("");
  const [abs, setAbs] = useState(false);
  const [vabs, setvAbs] = useState("");
  const [waist, setWaist] = useState(false);
  const [vwaist, setvWaist] = useState("");
  const [chest, setChest] = useState(false);
  const [vchest, setvChest] = useState("");
  const [shoulders, setShoulders] = useState(false);
  const [vshoulders, setvShoulders] = useState("");
  const [thigh, setThigh] = useState(false);
  const [vthigh, setvThigh] = useState("");
  const [calf, setCalf] = useState(false);
  const [vcalf, setvCalf] = useState("");

  const { isLoading, profile, errorMsg } = useSelector(
    (state) => state.profileReducer
  );

  console.log(profile, "-- Measurement Screen --");

  const resetstate = () => {
    setBiceps(false);
    setAbs(false);
    setWaist(false);
    setChest(false);
    setShoulders(false);
    setThigh(false);
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
    setThigh(true);
  };

  const handleCalf = () => {
    resetstate();
    setCalf(true);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    console.log(date);
    setTextDate(date.toDateString().split(" ").slice(1).join(" "));
    hideDatePicker();
  };

  const dataGender = [
    { key: 1, value: "Male" },
    { key: 2, value: "Female" },
  ];

  const doSave = () => {
    if (vbiceps === "") {
      setModalVisible(true);
      setModalMessage("Biceps measurement must be filled !");
    } else if (vwaist === "") {
      setModalVisible(true);
      setModalMessage("Waist measurement must be filled !");
    } else if (vchest === "") {
      setModalVisible(true);
      setModalMessage("Chest measurement must be filled !");
    } else if (vshoulders === "") {
      setModalVisible(true);
      setModalMessage("Shoulders measurement must be filled !");
    } else if (vthigh === "") {
      setModalVisible(true);
      setModalMessage("Thigh measurement must be filled !");
    } else if (vcalf === "") {
      setModalVisible(true);
      setModalMessage("Calf measurement must be filled !");
    } else if (weight === "") {
      setModalVisible(true);
      setModalMessage("Weight measurement must be filled !");
    } else {
      dispatch(
        saveMeasurement(
          weight,
          vbiceps,
          vwaist,
          vchest,
          vshoulders,
          vthigh,
          vcalf
        )
      );
    }
  };

  const TheModal = ({ data }) => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        // Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{messageModal}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Ok</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );

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
            gap: 4,
          }}
        ></View>

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
          <TheModal data={"test 12"} />
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
                  numeric
                  keyboardType={"numeric"}
                  onChangeText={(value) => setvBiceps(value)}
                  onPressIn={handleBiceps}
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
                  numeric
                  keyboardType={"numeric"}
                  onChangeText={(value) => setvWaist(value)}
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
                  numeric
                  keyboardType={"numeric"}
                  onChangeText={(value) => setvChest(value)}
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
                  numeric
                  keyboardType={"numeric"}
                  onPressIn={handlShoulders}
                  onChangeText={(value) => setvShoulders(value)}
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
                  numeric
                  keyboardType={"numeric"}
                  onPressIn={handleThigh}
                  onChangeText={(value) => setvThigh(value)}
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
                  onChangeText={(value) => setvCalf(value)}
                />
              </View>
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
                Weight
              </Text>
              <TextInput
                numeric
                keyboardType={"numeric"}
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
          <Pressable
            onPress={() => {
              doSave();
            }}
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

export default ProfileScreen;
