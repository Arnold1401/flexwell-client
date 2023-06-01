import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("@storage_Key", value);
    console.log("masuk async storage");
  } catch (e) {
    // saving error
    console.log("ini error di store", error);
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("@storage_Key");
    if (value !== null) {
      return value;
    } else {
      return "kosong";
    }
  } catch (e) {
    console.log(e);
  }
};

export { storeData, getData };
