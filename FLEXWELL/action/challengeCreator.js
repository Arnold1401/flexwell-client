import axios from "axios";
import {
  CHALLENGE_ERROR,
  CHALLENGE_SUCCESS,
  CHALLENGE_PENDING,
} from "./actionType.js";
import { baseUrl } from "../config.js";
import { getData } from "../async/index.js";

const challengePending = () => ({
  type: CHALLENGE_PENDING,
});

const challengeSuccess = (responseJson) => ({
  type: CHALLENGE_SUCCESS,
  payload: responseJson,
});

const challengeError = (errorMessage) => ({
  type: CHALLENGE_ERROR,
  payload: errorMessage,
});

const fetchChallenge = () => async (dispatch, getState) => {
  dispatch(challengePending());
  try {
    console.log("masuk fetch challenge");

    const { access_token } = JSON.parse(await getData("userData"));

    console.log(access_token);

    const { data } = await axios.get(
      `${baseUrl}/pub/exercises?type=Challenge`,
      {
        headers: {
          access_token: access_token,
        },
      }
    );
    console.log(data, "ini data");

    dispatch(challengeSuccess(data));
  } catch (error) {
    dispatch(challengeError(error));
  }
};

export { challengePending, challengeError, challengeSuccess, fetchChallenge };
