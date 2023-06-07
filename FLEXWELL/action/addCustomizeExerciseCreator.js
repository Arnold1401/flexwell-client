import axios from "axios";
import {
  ADDECUSTOMIZEEXERCISE_SUCCESS,
  ADDECUSTOMIZEEXERCISE_ERROR,
  ADDECUSTOMIZEEXERCISE_PENDING,
  CREATECUSTOMIZEEXERCISE_PENDING,
  CREATECUSTOMIZEEXERCISE_SUCCESS,
} from "./actionType.js";
import { baseUrl } from "../config.js";
import { getData } from "../async/index.js";

const addCustomExercisePendingAction = () => ({
  type: ADDECUSTOMIZEEXERCISE_PENDING,
});

const addCustomExerciseSuccessAction = (responseJson) => ({
  type: ADDECUSTOMIZEEXERCISE_SUCCESS,
  payload: responseJson,
});

const addCustomExerciseErrorAction = (errorMessage) => ({
  type: ADDECUSTOMIZEEXERCISE_ERROR,
  payload: errorMessage,
});

const createNewCustomExercisePendingAction = () => ({
  type: CREATECUSTOMIZEEXERCISE_PENDING,
});

const createNewCustomExercisePendingSuccess = (responseJson) => ({
  type: CREATECUSTOMIZEEXERCISE_SUCCESS,
  payload: responseJson,
});

const createNewCustomExercisePendingError = (errorMessage) => ({
  type: CREATECUSTOMIZEEXERCISE_PENDING,
  payload: errorMessage,
});

export const addCustomizeExerciseMiddleware =
  (payload) => (dispatch, getState) => {
    console.log(payload, "<< payload");
    const { exerciseDetail } = getState().exerciseList || [];
    console.log(exerciseDetail, "<< curr");
    const findBodyPart = exerciseDetail?.find(
      (val) => val?.bodyPartId == payload?.bodyPartId
    );
    let currExerciseDetail = [];
    if (findBodyPart) {
      currExerciseDetail = exerciseDetail.map((val) => {
        if (val?.bodyPartId == payload?.bodyPartId) {
          return payload;
        }
        return val;
      });
    } else {
      currExerciseDetail = [...exerciseDetail, payload];
    }
    dispatch(addCustomExerciseSuccessAction(currExerciseDetail));
    // dispatch(addCustomExercisePendingAction());
    // try {
    //   console.log("masuk middleware addCustomize");

    //   //   dispatch(addCustomExerciseSuccessAction(datanya));
    //   console.log(datanya, "-- Customization Creator --");
    // } catch (error) {
    //   dispatch(addCustomExerciseErrorAction(error));
    // }
  };

export const createCustomExerciseMiddleware =
  () => async (dispatch, getState) => {
    console.log("masuk create custom exercise");
    try {
      const { exerciseDetail } = getState().exerciseList || [];
      const { newCustomExercise } = getState().newExerciseName || {};
      console.log(exerciseDetail);
      console.log(newCustomExercise.id, "<< ini ID");

      const { access_token } = JSON.parse(await getData("userData"));

      const { data } = await axios.post(
        `${baseUrl}/pub/exercises/${newCustomExercise.id}/details`,
        { exerciseDetails: exerciseDetail },
        {
          headers: {
            access_token: access_token,
          },
        }
      );

      console.log(data);
      dispatch(addCustomExerciseSuccessAction([]));
      dispatch(createNewCustomExercisePendingSuccess({}));
    } catch (error) {
      console.log(error);
    }
  };

export const createCustomExerciseNameMiddleware =
  (name) => async (dispatch, getState) => {
    try {
      const { erroMsg, isLoading, newCustomExercise } =
        getState().newExerciseName;

      if (Object.keys(newCustomExercise).length === 0) {
        const { access_token } = JSON.parse(await getData("userData"));
        console.log(name, "dari middleware");

        const { data } = await axios.post(
          `${baseUrl}/pub/exercises`,
          { name: name },
          {
            headers: {
              access_token: access_token,
            },
          }
        );

        console.log("masuk if");
        dispatch(
          createNewCustomExercisePendingSuccess({ id: data.id, name: name })
        );
      } else {
        console.log("masuk else");
      }

      // console.log(data, "ini response");
    } catch (error) {
      console.log(error);
    }
  };
