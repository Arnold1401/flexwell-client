import {
  CUSTOMIZATION_PENDING,
  CUSTOMIZATION_ERROR,
  CUSTOMIZATION_SUCCESS,
} from "../action/actionType";

const initalState = {
  isLoading: true,
  customization: [],
  errorMsg: "",
};

const customizationReducer = (state = initalState, action) => {
  switch (action.type) {
    case CUSTOMIZATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        customization: action.payload,
      };
    case CUSTOMIZATION_PENDING:
      return {
        ...state,
      };
    case CUSTOMIZATION_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default customizationReducer;
