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
    date: "2023-06-22",
  },
  {
    date: "2023-06-24",
  },
  {
    date: "2023-06-30",
  },
];

const dataActivity = {
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
      activity: [
        {
          totalSet: "integer",
          repetition: "integer",
          duration: "integer",
          status: "enum",
          weight: "integer",
          userId: "integer",
          activityId: "integer",
          exerciseDetailId: "integer",
        },
      ],
    },
    {
      id: 53,
      name: "band alternating biceps curl",
      bodyPartId: "0968",
      bodyPart: "upper arms",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0968.gif",
      totalSet: 3,
      repetition: 10,
      weight: null,
      exerciseId: 31,
      activity: [
        {
          totalSet: "integer",
          repetition: "integer",
          duration: "integer",
          status: "enum",
          weight: "integer",
          userId: "integer",
          activityId: "integer",
          exerciseDetailId: "integer",
        },
      ],
    },
    {
      id: 54,
      name: "band alternating biceps curl",
      bodyPartId: "0968",
      bodyPart: "upper arms",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0968.gif",
      totalSet: 3,
      repetition: 10,
      weight: null,
      exerciseId: 31,
      activity: [
        {
          totalSet: "integer",
          repetition: "integer",
          duration: "integer",
          status: "enum",
          weight: "integer",
          userId: "integer",
          activityId: "integer",
          exerciseDetailId: "integer",
        },
      ],
    },
  ],
  activity: [
    {
      status: "enum",
      date: "date",
      duration: "integer",
      userId: "integer",
      exerciseId: "integer",
    },
  ],
  totalSet: 12,
  totalDuration: 42,
};

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
    // const { access_token } = JSON.parse(await getData("userData"));
    // console.log(access_token, "ini akses Token");
    // const { data } = await axios.get(
    //   `${baseUrl}/pub/bodyparts?target=${bodyPart}`,
    //   {
    //     headers: {
    //       access_token: access_token,
    //     },
    //   }
    // );
    // console.log(data, "ini response dari backend");
    dispatch(activitiesSuccessAction(datanya));
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

export const fetchDetailActivityMiddleware =
  (date) => async (dispatch, getState) => {
    console.log(date, "<<<<--->>>>Fetch Activities Creator");
    dispatch(detailActivityPendingAction());
    try {
      // const { access_token } = JSON.parse(await getData("userData"));
      // console.log(access_token, "ini akses Token");
      // const { data } = await axios.get(
      //   `${baseUrl}/pub/bodyparts?target=${bodyPart}`,
      //   {
      //     headers: {
      //       access_token: access_token,
      //     },
      //   }
      // );
      // console.log(data, "ini response dari backend");
      dispatch(detailActivitySuccessAction(dataActivity));
    } catch (error) {
      console.log(error, "ini error");
      dispatch(detailActivityErrorAction(error));
    }
  };
