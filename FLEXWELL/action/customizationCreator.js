import {
  CUSTOMIZATION_ERROR,
  CUSTOMIZATION_SUCCESS,
  CUSTOMIZATION_PENDING,
} from "./actionType.js";

const customizationPending = () => ({
  type: CUSTOMIZATION_PENDING,
});

const customizationSuccess = (responseJson) => ({
  type: CUSTOMIZATION_SUCCESS,
  payload: responseJson,
});

const customizationEror = (errorMessage) => ({
  type: CUSTOMIZATION_ERROR,
  payload: errorMessage,
});

const fetchcustomization = () => (dispatch, getState) => {
  dispatch(customizationPending());
  try {
    console.log("dari Action Creator");
    dispatch(customizationSucess());
  } catch (error) {
    dispatch(customizationError());
  }
};
export {
  customizationPending,
  customizationEror,
  customizationSuccess,
  fetchcustomization,
};
