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

const datanya = [
  {
    id: 1,
    name: "Day 1:Introduction to Weightlifting",
    exercises: [
      {
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1369.gif",
        id: "1369",
        name: "band two legs calf raise - (band under both legs) v. 2",
        reps: 10,
        set: 3,
        challengeId: 1,
        bodyPart: "legs",
      },
      {
        id: "0009",
        name: "leverage machine",
        reps: 10,
        set: 3,
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0009.gif",
        challengeId: 1,
        bodyPart: "chest",
      },
      {
        id: "0968",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0968.gif",
        name: "band alternating biceps curl",
        reps: 10,
        set: 3,
        challengeId: 1,
        bodyPart: "biceps",
      },
    ],
    activity: null,
  },
  {
    id: 2,
    name: "Day 2:Rest and Recovery",
    exercises: null,
    activity: null,
  },
  {
    id: 3,
    name: "Day 3:Lower Body Focus",
    exercises: [
      {
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1369.gif",
        id: "1369",
        name: "band two legs calf raise - (band under both legs) v. 2",
        reps: 10,
        set: 3,
        bodyPart: "legs",
        challengeId: 2,
      },
      {
        id: "0009",
        name: "leverage machine",
        reps: 10,
        set: 3,
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0009.gif",
        bodyPart: "chest",
        challengeId: 2,
      },
      {
        id: "0968",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0968.gif",
        name: "band alternating biceps curl",
        reps: 10,
        set: 3,
        bodyPart: "biceps",
        challengeId: 2,
      },
    ],
    activity: null,
  },
];

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
