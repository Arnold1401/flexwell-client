import axios from "axios";
import {
  CUSTOMIZATION_ERROR,
  CUSTOMIZATION_SUCCESS,
  CUSTOMIZATION_PENDING,
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

    // console.log(data, "ini data dari fetchCustomization");
    dispatch(customizationSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(customizationError(error));
  }
};
export {
  customizationPending,
  customizationError,
  customizationSuccess,
  fetchCustomization,
};