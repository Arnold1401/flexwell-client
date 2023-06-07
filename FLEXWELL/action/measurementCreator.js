import axios from "axios";
import {
  PROFILEMEASUREMENT_PENDING,
  PROFILEMEASUREMENT_ERROR,
  PROFILEMEASUREMENT_SUCCESS,
  PROFILEWEIGHT_SUCCESS,
} from "./actionType.js";
import { baseUrl } from "../config.js";
import { getData } from "../async/index.js";

function reformatDate(dateStr) {
  let dArr = dateStr.split("-"); // ex input: "2010-01-18"
  return dArr[2] + "/" + dArr[1]; //ex output: "18/01/10"
}

const profileMeasurementPendingAction = () => ({
  type: PROFILEMEASUREMENT_PENDING,
});

const profileMeasurementSuccessAction = (responseJson) => ({
  type: PROFILEMEASUREMENT_SUCCESS,
  payload: responseJson,
});

const profileWeightSuccessAction = (responseJson) => ({
  type: PROFILEWEIGHT_SUCCESS,
  payload: responseJson,
});

const profileMeasurementErrorAction = (errorMessage) => ({
  type: PROFILEMEASUREMENT_ERROR,
  payload: errorMessage,
});

export const fetchMeasurementMiddleware =
  (category) => async (dispatch, getState) => {
    dispatch(profileMeasurementPendingAction);
    try {
      const { access_token } = JSON.parse(await getData("userData"));
      const { data } = await axios.get(`${baseUrl}/pub/profiles/bodies`, {
        headers: {
          access_token: access_token,
        },
      });

      let categoryLowerCase = category.toLowerCase();

      const filteredMeasurement = data.filter((obj) => {
        return obj[categoryLowerCase] !== null;
      });

      let labels = filteredMeasurement.map((obj) => obj.date.split("T")[0]);
      labels = labels.map((date) => {
        return reformatDate(date);
      });

      if (labels.length > 7) {
        labels = labels.slice(0, 7);
      }
      let datasets = filteredMeasurement.map((obj) => obj[categoryLowerCase]);

      if (datasets.length > 7) {
        datasets = datasets.slice(0, 7);
      }

      const weightMeasurement = data.filter((obj) => {
        return obj.weight !== null;
      });

      let weightLabel = weightMeasurement.map((obj) => obj.date.split("T")[0]);
      weightLabel = weightLabel.map((date) => {
        return reformatDate(date);
      });

      if (weightLabel.length > 7) {
        weightLabel = weightLabel.slice(0, 7);
      }
      let weightDatasets = weightMeasurement.map((obj) => obj.weight);

      if (weightDatasets.length > 7) {
        weightDatasets = weightDatasets.slice(0, 7);
      }

      console.log({ weightLabel, weightDatasets }, "weighttt");
      dispatch(profileWeightSuccessAction({ weightLabel, weightDatasets }));
      dispatch(profileMeasurementSuccessAction({ labels, datasets }));
    } catch (error) {
      console.log(error);
      dispatch(profileMeasurementErrorAction);
    }
  };
