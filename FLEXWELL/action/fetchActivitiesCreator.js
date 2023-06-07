import axios from "axios";
import {
  ACTIVITIES_PENDING,
  ACTIVITIES_ERROR,
  ACTIVITIES_SUCCESS,
  DETAILACTIVITY_PENDING,
  DETAILACTIVITY_SUCCESS,
  DETAILACTIVITY_ERROR,
} from "./actionType.js";
import { baseUrl } from "../config.js";
import { storeData, getData } from "../async/index.js";

const datanya = [
  {
    id: 31,
    name: "Push Day",
    exercises: [
      {
        id: 52,
        name: "band alternating biceps curl",
        bodyPartId: "0968",
        bodyPart: "upper arms",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0968.gif",
        totalSet: 3,
        repetition: 10,
        weight: null,
        exerciseId: 31,
      },
      {
        id: 53,
        name: "band one arm single leg split squat",
        bodyPartId: "0987",
        bodyPart: "upper legs",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0987.gif",
        totalSet: 3,
        repetition: 10,
        weight: null,
        exerciseId: 31,
      },
      {
        id: 54,
        name: "barbell lateral lunge",
        bodyPartId: "1410",
        bodyPart: "upper legs",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1410.gif",
        totalSet: 3,
        repetition: 10,
        weight: null,
        exerciseId: 31,
      },
      {
        id: 55,
        name: "lever alternate leg press",
        bodyPartId: "2287",
        bodyPart: "upper legs",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/2287.gif",
        totalSet: 3,
        repetition: 10,
        weight: null,
        exerciseId: 31,
      },
    ],
    activity: {
      id: 1,
      status: "Finished",
      date: "2023-06-22T09:11:56.637Z",
      duration: 32,
      exerciseId: 31,
      userId: 1,
    },
    totalSet: 12,
    totalDuration: 42,
  },
  {
    id: 32,
    name: "Pull Day",
    exercises: [
      {
        id: 52,
        name: "band alternating biceps curl",
        bodyPartId: "0968",
        bodyPart: "upper arms",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0968.gif",
        totalSet: 3,
        repetition: 10,
        weight: null,
        exerciseId: 31,
      },
      {
        id: 53,
        name: "band one arm single leg split squat",
        bodyPartId: "0987",
        bodyPart: "upper legs",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0987.gif",
        totalSet: 3,
        repetition: 10,
        weight: null,
        exerciseId: 31,
      },
      {
        id: 54,
        name: "barbell lateral lunge",
        bodyPartId: "1410",
        bodyPart: "upper legs",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1410.gif",
        totalSet: 3,
        repetition: 10,
        weight: null,
        exerciseId: 31,
      },
      {
        id: 55,
        name: "lever alternate leg press",
        bodyPartId: "2287",
        bodyPart: "upper legs",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/2287.gif",
        totalSet: 3,
        repetition: 10,
        weight: null,
        exerciseId: 31,
      },
    ],
    activity: {
      id: 1,
      status: null,
      date: "2023-06-07T09:11:56.637Z",
      duration: 32,
      exerciseId: 31,
      userId: 1,
    },
    totalSet: 12,
    totalDuration: 42,
  },
];

const activitiesPendingAction = () => ({
  type: ACTIVITIES_PENDING,
});

const activitiesSuccessAction = (responseJson) => ({
  type: ACTIVITIES_SUCCESS,
  payload: responseJson,
});

const activitiesErrorAction = (errorMessage) => ({
  type: ACTIVITIES_ERROR,
  payload: errorMessage,
});

export const fetchActivities = () => async (dispatch, getState) => {
  console.log("---Fetch Activities Creator");
  dispatch(activitiesPendingAction());
  try {
    const { access_token } = JSON.parse(await getData("userData"));
    console.log(access_token, "ini akses Token");
    const { data } = await axios.get(`${baseUrl}/pub/exercises`, {
      headers: {
        access_token: access_token,
      },
    });
    // console.log(data, "ini response dari backend");

    const filteredDatanya = data.filter((exercise) => {
      return exercise.activity.status === "Finished";
    });

    const dateArray = filteredDatanya.map((exercise) => ({
      date: exercise.activity.date.split("T")[0],
    }));
    // console.log(filteredDatanya, "data filter");
    // console.log(dateArray, "weyyyyyyyyyy");

    dispatch(activitiesSuccessAction(dateArray));
    dispatch(detailActivitySuccessAction(filteredDatanya));
  } catch (error) {
    console.log(error, "ini error");
    dispatch(activitiesErrorAction(error));
  }
};

const detailActivityPendingAction = () => ({
  type: DETAILACTIVITY_PENDING,
});

const detailActivitySuccessAction = (responseJson) => ({
  type: DETAILACTIVITY_SUCCESS,
  payload: responseJson,
});

const detailActivityErrorAction = (errorMessage) => ({
  type: DETAILACTIVITY_ERROR,
  payload: errorMessage,
});

// export const fetchDetailActivityMiddleware =
//   (date) => async (dispatch, getState) => {
//     console.log(date, "<<<<--->>>>Fetch Activities Creator");
//     dispatch(detailActivityPendingAction());
//     try {
//       //   const { access_token } = JSON.parse(await getData("userData"));
//       //   console.log(access_token, "ini akses Token");
//       //   const { data } = await axios.get(
//       //     `${baseUrl}/pub/bodyparts?target=${bodyPart}`,
//       //     {
//       //       headers: {
//       //         access_token: access_token,
//       //       },
//       //     }
//       //   );
//       // console.log(data, "ini response dari backend");
//     //   dispatch(detailActivitySuccessAction(dataActivity));
//     } catch (error) {
//       console.log(error, "ini error");
//       dispatch(detailActivityErrorAction(error));
//     }
//   };
