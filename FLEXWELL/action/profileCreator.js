import axios from "axios";
import { baseUrl } from "../config";
import {
  PROFILE_ERROR,
  PROFILE_SUCCESS,
  PROFILE_PENDING,
  PROFILE_CLEAR,
} from "./actionType.js";
import { storeData, getData } from "../async";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const profilePending = () => ({
  type: PROFILE_PENDING,
});

const profileSucess = (responseJson) => ({
  type: PROFILE_SUCCESS,
  payload: responseJson,
});

const profileError = (errorMessage) => ({
  type: PROFILE_ERROR,
  payload: errorMessage,
});

const profileClear = (responseJson) => ({
  type: PROFILE_CLEAR,
  payload: "",
});

const saveMeasurement =
  (weight, biceps, waist, chest, shoulders, thigh, calf) =>
  async (dispatch, getState) => {
    dispatch(profilePending());
    try {
      // console.log(
      //   {
      //     weight,
      //     biceps,
      //     waist,
      //     chest,
      //     shoulders,
      //     thigh,
      //     calf,
      //   },
      //   "-- Masuk Profile Creator --"
      // );

      const { access_token } = JSON.parse(await getData("userData"));
      const response = await axios.post(
        `${baseUrl}/pub/profiles/bodies`,
        {
          biceps,
          waist,
          shoulders,
          thigh,
          calf,
          weight,
          chest,
        },
        {
          headers: {
            access_token: access_token,
          },
        }
      );
      console.log("-- bodyprofile requst post --", response);

      if (response.status === 201) {
        dispatch(profileSucess({ status: 201, message: "created" }));
      }
    } catch (error) {
      profileError(error);
    }
  };

const saveProfile =
  (fullName, gender, dateOfBirth) => async (dispatch, getState) => {
    dispatch(profilePending());
    try {
      const { access_token } = JSON.parse(await getData("userData"));
      const response = await axios.post(
        `${baseUrl}/pub/profiles`,
        {
          fullName,
          gender,
          dateOfBirth,
        },
        {
          headers: {
            access_token: access_token,
          },
        }
      );
      console.log("-- setting profile requst post --", response);
      if (response.status === 201) {
        dispatch(profileSucess({ status: 201, message: "updated" }));
        let userData = JSON.parse(await getData("userData"));
        userData.username = fullName;
        await storeData("userData", JSON.stringify(userData));
      }
    } catch (error) {
      profileError(error);
    }
  };

export {
  profilePending,
  profileError,
  profileSucess,
  saveMeasurement,
  saveProfile,
  profileClear,
};
