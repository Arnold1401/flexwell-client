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

const challengeError = (errorMessage) => ({
  type: CHALLENGE_ERROR,
  payload: errorMessage,
});

const datanya = [
  {
    name: "Day 1:Introduction to Weightlifting",
    exercises: [
      {
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1369.gif",
        id: "1369",
        name: "band two legs calf raise - (band under both legs) v. 2",
        reps: 10,
        set: 3,
        challengeId: 1,
      },
      {
        id: "0009",
        name: "leverage machine",
        reps: 10,
        set: 3,
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0009.gif",
        challengeId: 1,
      },
      {
        id: "0968",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0968.gif",
        name: "band alternating biceps curl",
        reps: 10,
        set: 3,
        challengeId: 1,
      },
    ],
    activity: null,
  },
  {
    name: "Day 2:Rest and Recovery",
    exercises: null,
    activity: null,
  },
  {
    name: "Day 3:Lower Body Focus",
    exercises: [
      {
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1369.gif",
        id: "1369",
        name: "band two legs calf raise - (band under both legs) v. 2",
        reps: 10,
        set: 3,
        challengeId: 2,
      },
      {
        id: "0009",
        name: "leverage machine",
        reps: 10,
        set: 3,
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0009.gif",
        challengeId: 2,
      },
      {
        id: "0968",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0968.gif",
        name: "band alternating biceps curl",
        reps: 10,
        set: 3,
        challengeId: 2,
      },
    ],
    activity: null,
  },
];

const fetchChallenge = () => (dispatch, getState) => {
  dispatch(challengePending());
  try {
    console.log("masuk fetch challenge");
    dispatch(challengeSuccess(datanya));
  } catch (error) {
    dispatch(challengeError(error));
  }
};
export { challengePending, challengeError, challengeSuccess, fetchChallenge };
