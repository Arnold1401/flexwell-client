import axios from "axios";
import {
  CUSTOMIZATION_ERROR,
  CUSTOMIZATION_SUCCESS,
  CUSTOMIZATION_PENDING,
  CUSTOMIZEEXERCISEDETAIL_ERROR,
  CUSTOMIZEEXERCISEDETAIL_PENDING,
  CUSTOMIZEEXERCISEDETAIL_SUCCESS,
} from "./actionType.js";
import { baseUrl } from "../config.js";
import { getData } from "../async/index.js";

const datanya = [
  {
    id: 99,
    name: "Push Day",
    exercises: [
      {
        id: 1,
        name: "band two legs calf raise - (band under both legs) v. 2",
        bodyPartId: "1369",
        bodyPart: "lower legs",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1369.gif",
        totalSet: 2,
        repetition: 7,
        weight: null,
        duration: 50,
        status: "Finished",
        exerciseId: 1,
      },
      {
        id: 2,
        name: "leverage machine",
        bodyPartId: "0009",
        bodyPart: "chest",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0009.gif",
        totalSet: 3,
        repetition: 8,
        weight: null,
        duration: 50,
        status: "Finished",
        exerciseId: 1,
      },
    ],
    activity: null,
    totalSet: 9,
    totalDuration: 32,
  },
];

const customizationPending = () => ({
  type: CUSTOMIZATION_PENDING,
});

const customizationSuccess = (responseJson) => ({
  type: CUSTOMIZATION_SUCCESS,
  payload: responseJson,
});

const customizationError = (errorMessage) => ({
  type: CUSTOMIZATION_ERROR,
  payload: errorMessage,
});

const fetchCustomization = () => async (dispatch, getState) => {
  dispatch(customizationPending());
  try {
    console.log("-- Customization Creator --");

    const { access_token } = JSON.parse(await getData("userData"));

    console.log(access_token);

    const { data } = await axios.get(`${baseUrl}/pub/exercises`, {
      headers: {
        access_token: access_token,
      },
    });

    console.log(data, "ini response");
    // const hasil = data.map((challenge) => {
    //   const exercises = challenge.exercises.map((exercise) => {
    //     exercise.duration = { status: "none", duration: "" };
    //     return exercise;
    //   });
    //   challenge.exercises = exercises;
    //   return challenge;
    // });
    // console.log(data, "ini data dari fetchCustomization");
    dispatch(customizationSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(customizationError(error));
  }
};

const customizationDetailPending = () => ({
  type: CUSTOMIZEEXERCISEDETAIL_PENDING,
});

const customizationDetailSuccess = (responseJson) => ({
  type: CUSTOMIZEEXERCISEDETAIL_SUCCESS,
  payload: responseJson,
});

const customizationDetailError = (errorMessage) => ({
  type: CUSTOMIZEEXERCISEDETAIL_ERROR,
  payload: errorMessage,
});

export const fetchCustomizationDetail = (id) => async (dispatch, getState) => {
  dispatch(customizationDetailPending());
  try {
    console.log("-- XXXXXX --");

    const { access_token } = JSON.parse(await getData("userData"));

    console.log(access_token);

    const { data } = await axios.get(`${baseUrl}/pub/exercises/${id}`, {
      headers: {
        access_token: access_token,
      },
    });

    console.log(data.exercises, "-()-");

    const hasil = data.exercises.map((challenge) => {
      challenge.duration = { status: "none", duration: "" };
      return challenge;
    });

    const value = {
      exercises: hasil,
      id: data.id,
    };

    console.log(value, "ini data dari fetchCustomizationcre");
    dispatch(customizationDetailSuccess(value));
  } catch (error) {
    console.log(error);
    dispatch(customizationDetailError(error));
  }
};
export {
  customizationPending,
  customizationError,
  customizationSuccess,
  fetchCustomization,
};
