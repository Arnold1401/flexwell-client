import axios from "axios";
import { baseUrl } from ".././config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  USER_ERROR,
  USER_SUCCESS,
  USER_PENDING,
  USER_REGISTER,
  USER_LOGIN,
} from "./actionType.js";

const userPending = () => ({
  type: USER_PENDING,
});

const userSucess = (responseJson) => ({
  type: USER_SUCCESS,
  payload: responseJson,
});

const userError = (errorMessage) => ({
  type: USER_ERROR,
  payload: errorMessage,
});

// const loginHandler = (username, password) => (dispatch, getState) => {
//   console.log(username, password, "dari action");
// };

const doLogin = () => async (dispatch, getState) => {
  //PENDING
  dispatch(userPending());
  try {
    const response = await axios.post(`${baseUrl}/login`);

    console.log(response, "-- doLoginCreator --");
    // const value={
    //   access_token:response
    // }
    // const jsonValue = JSON.stringify(value)
    // await AsyncStorage.setItem('@storage_Key', jsonValue)
    //SUCCESS
  } catch (err) {
    //ERROR
    dispatch(userError(err));
  } finally {
    // Bisa menggunakan getState
    console.log("Finally", getState());
  }
};

const doRegister =
  (email, username, password, passwordCheck) => (dispatch, getState) => {
    dispatch(userPending());
    try {
      console.log(
        email,
        username,
        password,
        passwordCheck,
        "dari Action Creator"
      );
      const test = "";
      dispatch(userSucess(test));
    } catch (error) {
      dispatch(userError(error));
    }
  };

const saveRecord =
  (
    fullname,
    gender,
    dob,
    height,
    weight,
    biceps,
    abs,
    waist,
    chest,
    shoulders,
    thigh,
    calf
  ) =>
  (dispatch, getState) => {
    dispatch(userPending());
    try {
      console.log(
        {
          fullname,
          gender,
          dob,
          height,
          weight,
          biceps,
          abs,
          waist,
          chest,
          shoulders,
          thigh,
          calf,
        },
        "masuk creator"
      );
      dispatch(userSucess());
    } catch (error) {
      userError(error);
    }
  };

export { userPending, userError, userSucess, doLogin, doRegister, saveRecord };
