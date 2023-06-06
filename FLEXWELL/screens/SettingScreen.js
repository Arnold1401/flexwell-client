import {
  View,
  Text,
  TextInput,
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Alert,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";
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
import { saveProfile } from "../action/profileCreator";
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

const SettingScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [messageModal, setModalMessage] = useState("");
  const dispatch = useDispatch();
  const [gender, setGender] = useState("");
  const [fullname, setFullname] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [textDate, setTextDate] = useState("");

  const { isLoading, profile, errorMsg } = useSelector(
    (state) => state.profileReducer
  );

  useEffect(() => {
    if (errorMsg) {
      console.warn(errorMsg);
    }
    if (profile) {
      console.log(profile, "-- Profile edit Screen --");
    }
  }, []);

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
    if (fullname === "") {
      setModalVisible(true);
      setModalMessage("Fullname must be filled !");
    } else if (gender === "") {
      setModalVisible(true);
      setModalMessage("Gender must be filled !");
    } else if (textDate === "") {
      setModalVisible(true);
      setModalMessage("Date of Birth must be filled !");
    } else {
      dispatch(saveProfile(fullname, gender, textDate));
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
        <TheModal />
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
            {/* <Calendar
              style={{ display: !isDatePickerVisible ? "none" : "flex" }}
              onDayPress={handleConfirm}
            /> */}
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
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
        ></View>
        <View
          style={{
            width: "100%",
            gap: 4,
            alignItems: "center",
          }}
        >
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

export default SettingScreen;
