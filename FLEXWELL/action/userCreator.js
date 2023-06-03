import {
  USER_ERROR,
  USER_SUCCESS,
  USER_PENDING,
  USER_REGISTER,
  USER_LOGIN,
} from "./actionType.js";

const userPending = () => ({
  type: USER_PENDING,
});

const userSucess = (responseJson) => ({
  type: USER_SUCCESS,
  payload: responseJson,
});

const userError = (errorMessage) => ({
  type: USER_ERROR,
  payload: errorMessage,
});

// const loginHandler = (username, password) => (dispatch, getState) => {
//   console.log(username, password, "dari action");
// };

const doLogin = () => async (dispatch, getState) => {
  //PENDING
  dispatch(userPending());
  try {
    const response = await fetch("http://localhost:3000/Products");
    const responseJson = await response.json();
    console.log(responseJson);
    //SUCCESS
    dispatch(userSucess(responseJson));
  } catch (err) {
    //ERROR
    dispatch(userError(err));
  } finally {
    // Bisa menggunakan getState
    console.log("Finally", getState());
  }
};

const doRegister =
  (email, username, password, passwordCheck) => (dispatch, getState) => {
    dispatch(userPending());
    try {
      console.log(
        email,
        username,
        password,
        passwordCheck,
        "dari Action Creator"
      );
      dispatch(userSucess());
    } catch (error) {
      dispatch(userError());
    }
  };

const saveRecord =
  (
    fullname,
    gender,
    dob,
    height,
    weight,
    biceps,
    abs,
    waist,
    chest,
    shoulders,
    thight,
    calf
  ) =>
  (dispatch, getState) => {
    dispatch(userPending());
    try {
      console.log({
        fullname,
        gender,
        dob,
        height,
        weight,
        biceps,
        abs,
        waist,
        chest,
        shoulders,
        thight,
        calf,
      });
      dispatch(userSucess());
    } catch (error) {
      userError(error);
    }
  };

export { userPending, userError, userSucess, doLogin, doRegister, saveRecord };
