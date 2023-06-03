import {
  CHALLENGE_ERROR,
  CHALLENGE_SUCCESS,
  CHALLENGE_PENDING,
} from "./actionType.js";

const challengePending = () => ({
  type: CHALLENGE_PENDING,
});

const challengeSuccess = (responseJson) => ({
  type: CHALLENGE_SUCCESS,
  payload: responseJson,
});

const challengeEror = (errorMessage) => ({
  type: CHALLENGE_ERROR,
  payload: errorMessage,
});

const fetchChallenge = () => (dispatch, getState) => {
  dispatch(challengePending());
  try {
    console.log("dari Action Creator");
    dispatch(challengeSucess());
  } catch (error) {
    dispatch(ChallengeError());
  }
};
export { challengePending, challengeEror, challengeSuccess, fetchChallenge };
