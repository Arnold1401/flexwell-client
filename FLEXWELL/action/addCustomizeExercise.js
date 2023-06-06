import {
  ADDECUSTOMIZEEXERCISE_SUCCESS,
  ADDECUSTOMIZEEXERCISE_ERROR,
  ADDECUSTOMIZEEXERCISE_PENDING,
} from "./actionType.js";

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

export const addCustomizeExerciseMiddleware = () => (dispatch, getState) => {
  dispatch(addCustomExercisePendingAction());
  try {
    console.log("masuk middleware addCustomize");

    //   dispatch(addCustomExerciseSuccessAction(datanya));
    console.log(datanya, "-- Customization Creator --");
  } catch (error) {
    dispatch(addCustomExerciseErrorAction(error));
  }
};
