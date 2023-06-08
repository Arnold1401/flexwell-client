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
    console.log(data, "ini response dari backend");

    console.log(data[0]?.activity, "TTTT");

    const filteredDatanya = data.filter((exercise) => {
      return exercise.activity.status === "Finished";
    });

    const dateArray = filteredDatanya.map((exercise) => ({
      date: exercise.activity.date.split("T")[0],
    }));
    console.log(filteredDatanya, "data filter");
    console.log(dateArray, "weyyyyyyyyyy");

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
