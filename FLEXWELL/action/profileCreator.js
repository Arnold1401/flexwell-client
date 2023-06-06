import axios from "axios";
import { baseUrl } from "../config";
import {
  PROFILE_ERROR,
  PROFILE_SUCCESS,
  PROFILE_PENDING,
} from "./actionType.js";
import { storeData, getData } from "../async";

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

const saveMeasurement =
  (weight, biceps, waist, chest, shoulders, thigh, calf) =>
  (dispatch, getState) => {
    dispatch(profilePending());
    try {
      console.log(
        {
          weight,
          biceps,
          waist,
          chest,
          shoulders,
          thigh,
          calf,
        },
        "-- Masuk Profile Creator --"
      );
      dispatch(profileSucess("-- Measurement add Succed --"));
    } catch (error) {
      profileError(error);
    }
  };

const saveProfile = (fullname, gender, dob) => (dispatch, getState) => {
  dispatch(profilePending());
  try {
    console.log(
      {
        fullname,
        gender,
        dob,
      },
      "-- Masuk Profile Creator --"
    );
    dispatch(profileSucess("-- profile edit Succeed --"));
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
};
