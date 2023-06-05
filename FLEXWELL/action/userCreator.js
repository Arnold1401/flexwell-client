import axios from "axios";
import { baseUrl } from ".././config";
import { USER_ERROR, USER_SUCCESS, USER_PENDING } from "./actionType.js";
import { storeData, getData } from "../async";

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

const doLogin = (username, password) => async (dispatch, getState) => {
  //PENDING
  dispatch(userPending());
  try {
    const response = await axios.post(`${baseUrl}/pub/login`, {
      username,
      password,
    });
    const { data } = response;
    const accessToken = data.access_token;
    dispatch(userSucess("Logged"));

    const value = {
      access_token: accessToken,
    };
    await storeData("userData", JSON.stringify(value));
    console.log(await getData("userData"), "ini di dalam asyncstorage");
    //SUCCESS
  } catch (err) {
    //ERROR
    const { data } = err.response;

    const message = data.message;
    console.log(message, "-- error Login --");
    dispatch(userError(message));
  } finally {
    // Bisa menggunakan getState
    console.log("Finally", getState());
  }
};

const doRegister =
  (email, username, password) => async (dispatch, getState) => {
    dispatch(userPending());
    try {
      const response = await axios.post(`${baseUrl}/pub/register`, {
        username,
        email,
        password,
      });
      console.log(response, "test--");
      const { data, status } = response;

      console.log(data);
      dispatch(userSucess({ msg: data.message, status }));
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
