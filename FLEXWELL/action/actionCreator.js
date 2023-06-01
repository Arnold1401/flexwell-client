import {
  USER_ERROR,
  USER_SUCCESS,
  USER_PENDING,
  USER_REGISTER,
  USER_LOGIN,
} from "./actionType.js";

export const userPending = () => ({
  type: PRODUCT_PENDING,
});

export const productSuccess = (responseJson) => ({
  type: PRODUCT_SUCCESS,
  payload: responseJson,
});

export const productError = (errorMessage) => ({
  type: PRODUCT_ERROR,
  payload: errorMessage,
});

export const loginHandler = (username, password) => (dispatch, getState) => {
  console.log(username, password, "dari action");
};

export const doLogin = () => async (dispatch, getState) => {
  //PENDING
  dispatch(productPending());
  try {
    const response = await fetch("http://localhost:3000/Products");
    const responseJson = await response.json();
    console.log(responseJson);
    //SUCCESS
    dispatch(productSuccess(responseJson));
  } catch (err) {
    //ERROR
    dispatch(productError(err));
  } finally {
    // Bisa menggunakan getState
    console.log("Finally", getState());
  }
};
