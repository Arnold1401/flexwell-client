import axios from "axios";
import {
  LIBRARY_ERROR,
  LIBRARY_SUCCESS,
  LIBRARY_PENDING,
  EXERCISEDETAIL_SUCCESS,
  EXERCISEDETAIL_PENDING,
  EXERCISEDETAIL_ERROR,
} from "./actionType.js";
import { baseUrl } from "../config.js";
import { storeData, getData } from "../async/index.js";

const datanya = [
  {
    id: "1",
    name: "Lever Shoulder Press ",
    girUrl:
      "https://fitnessprogramer.com/wp-content/uploads/2021/04/Lever-Shoulder-Press.gif",
  },
  {
    id: "2",
    name: "Dumbbell Shoulder Press ",
    gifUrl:
      "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif",
  },
  {
    id: "3",
    name: "Rear Delt Fly Machine ",
    gifUrl:
      "https://fitnessprogramer.com/wp-content/uploads/2021/02/Rear-Delt-Machine-Flys.gif",
  },
  {
    id: "4",
    name: "Rear Delt Fly Machine ",
    gifUrl:
      "https://fitnessprogramer.com/wp-content/uploads/2021/02/Rear-Delt-Machine-Flys.gif",
  },
  {
    id: "5",
    name: "Rear Delt Fly Machine ",
    gifUrl:
      "https://fitnessprogramer.com/wp-content/uploads/2021/02/Rear-Delt-Machine-Flys.gif",
  },
];

const libraryPending = () => ({
  type: LIBRARY_PENDING,
});

const librarySucess = (responseJson) => ({
  type: LIBRARY_SUCCESS,
  payload: responseJson,
});

const libraryError = (errorMessage) => ({
  type: LIBRARY_ERROR,
  payload: errorMessage,
});

const fetchLibrary = (bodyPart) => async (dispatch, getState) => {
  console.log("---Library bodypart", bodyPart);
  dispatch(libraryPending());
  try {
    const { access_token } = JSON.parse(await getData("userData"));
    console.log(access_token, "ini akses Token");

    const { data } = await axios.get(
      `${baseUrl}/pub/bodyparts?target=${bodyPart}`,
      {
        headers: {
          access_token: access_token,
        },
      }
    );
    // console.log(data, "ini response dari backend");
    dispatch(librarySucess(data));
  } catch (error) {
    console.log(error);
    dispatch(libraryError(error));
  }
};

const detailExercisePendingCreator = () => ({
  type: EXERCISEDETAIL_PENDING,
});

const detailExerciseSuccessCreator = (responseJson) => ({
  type: EXERCISEDETAIL_SUCCESS,
  payload: responseJson,
});

const detailExerciseErrorCreatior = (errorMessage) => ({
  type: EXERCISEDETAIL_ERROR,
  payload: errorMessage,
});

export const fetchExerciseDetailMiddleware =
  (id) => async (dispatch, getState) => {
    console.log(id, "ini ID dari creator");
    dispatch(detailExercisePendingCreator());
    try {
      const { access_token } = JSON.parse(await getData("userData"));

      const { data } = await axios.get(`${baseUrl}/pub/bodyparts/${id}`, {
        headers: {
          access_token: access_token,
        },
      });
      console.log(data, "ini response dari backend");
      dispatch(detailExerciseSuccessCreator(data));
    } catch (error) {
      dispatch(detailExerciseErrorCreatior(error));
    }
  };
export { libraryPending, libraryError, librarySucess, fetchLibrary };
