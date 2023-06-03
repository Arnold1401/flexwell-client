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

const fetchLibrary = () => (dispatch, getState) => {
  dispatch(libraryPending());
  try {
    console.log("dari Action Creator");
    dispatch(librarySucess());
  } catch (error) {
    dispatch(libraryError());
  }
};
export { libraryPending, libraryError, librarySucess, fetchLibrary };
