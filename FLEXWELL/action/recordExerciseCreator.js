import axios from "axios";
import {
  RECORDEXERCISE_ERROR,
  RECORDEXERCISE_PENDING,
  RECORDEXERCISE_SUCCESS,
} from "./actionType.js";
import { baseUrl } from "../config.js";
import { storeData, getData } from "../async/index.js";

const recordExercisePendingAction = () => ({
  type: RECORDEXERCISE_PENDING,
});

const recordExerciseSuccessAction = (responseJson) => ({
  type: RECORDEXERCISE_SUCCESS,
  payload: responseJson,
});

const recordExerciseErrorAction = (errorMessage) => ({
  type: RECORDEXERCISE_ERROR,
  payload: errorMessage,
});

export const recordExerciseMiddleware =
  (exerciseData) => async (dispatch, getState) => {
    console.log("---Hit RecordExerciseMiddleware");
    dispatch(recordExercisePendingAction());
    try {
      console.log(exerciseData, "dari middleware");

      const { access_token } = JSON.parse(await getData("userData"));

      for (let i = 0; i < exerciseData.exercises.length; i++) {
        let { data } = await axios.post(
          `${baseUrl}/pub/exercises/${exerciseData.id}/activities`,
          {
            duration: exerciseData.exercises[i].duration.duration,
            exerciseDetailId: exerciseData.exercises[i].id,
          },
          {
            headers: {
              access_token: access_token,
            },
          }
        );

        console.log(data);
      }

      //   const { access_token } = JSON.parse(await getData("userData"));
      //   console.log(access_token, "ini akses Token");
      //   const { data } = await axios.get(
      //     `${baseUrl}/pub/bodyparts?target=${bodyPart}`,
      //     {
      //       headers: {
      //         access_token: access_token,
      //       },
      //     }
      //   );
      //   console.log(data, "ini response dari backend");
      // dispatch(recordExerciseSuccessAction(data));
    } catch (error) {
      console.log(error, "ini error");
      dispatch(recordExerciseErrorAction(error));
    }
  };
