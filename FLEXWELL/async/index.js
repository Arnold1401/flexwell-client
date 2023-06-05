import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log("masuk async storage");
  } catch (e) {
    // saving error
    console.log("ini error di store", error);
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
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
