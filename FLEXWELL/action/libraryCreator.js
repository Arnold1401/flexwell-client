import axios from "axios";
import {
  LIBRARY_ERROR,
  LIBRARY_SUCCESS,
  LIBRARY_PENDING,
} from "./actionType.js";
import { baseUrl } from "../config.js";

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

const fetchLibrary = (bodyPart) => async (dispatch, getState) => {
  console.log("---Library bodypart", bodyPart);
  dispatch(libraryPending());
  try {
    console.log("---dari Action Creator---");
    console.log(`${baseUrl}/pub/bodyparts?target=${bodyPart}`);

    const { data } = await axios.get(
      `${baseUrl}/pub/bodyparts?target=${bodyPart}`,
      {
        headers: {
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJjbGllbnQxQGNjYy5jb20iLCJ1c2VybmFtZSI6ImNsaWVudDEiLCJpYXQiOjE2ODU5MzQ5NDl9.X6Q2fHDrmlkOxKY0sWcASIA8a5IVpLQ8Erjxhegwp8Y",
        },
      }
    );
    // console.log(data, "ini response dari backend");
    dispatch(librarySucess(data));
  } catch (error) {
    // console.log(error);
    dispatch(libraryError(error));
  }
};
export { libraryPending, libraryError, librarySucess, fetchLibrary };
