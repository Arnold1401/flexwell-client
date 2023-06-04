import {
  LIBRARY_ERROR,
  LIBRARY_SUCCESS,
  LIBRARY_PENDING,
} from "./actionType.js";

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
    avatar:
      "https://fitnessprogramer.com/wp-content/uploads/2021/04/Lever-Shoulder-Press.gif",
  },
  {
    id: "2",
    name: "Dumbbell Shoulder Press ",
    avatar:
      "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif",
  },
  {
    id: "3",
    name: "Rear Delt Fly Machine ",
    avatar:
      "https://fitnessprogramer.com/wp-content/uploads/2021/02/Rear-Delt-Machine-Flys.gif",
  },
  {
    id: "4",
    name: "Rear Delt Fly Machine ",
    avatar:
      "https://fitnessprogramer.com/wp-content/uploads/2021/02/Rear-Delt-Machine-Flys.gif",
  },
  {
    id: "5",
    name: "Rear Delt Fly Machine ",
    avatar:
      "https://fitnessprogramer.com/wp-content/uploads/2021/02/Rear-Delt-Machine-Flys.gif",
  },
];

const fetchLibrary = (bodyPart) => (dispatch, getState) => {
  console.log("---Library bodypart", bodyPart);
  dispatch(libraryPending());
  try {
    console.log("---dari Action Creator---", datanya);
    dispatch(librarySucess(datanya));
  } catch (error) {
    dispatch(libraryError(error));
  }
};
export { libraryPending, libraryError, librarySucess, fetchLibrary };
