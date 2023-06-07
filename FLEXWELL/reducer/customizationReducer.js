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
      // console.log(action.payload, "-- customization Reducer--");
      return {
        ...state,
        isLoading: false,
        customization: action.payload,
      };
    case CUSTOMIZATION_PENDING:
      // console.log(action.payload, "-- customization Reducer--");
      return {
        ...state,
      };
    case CUSTOMIZATION_ERROR:
      // console.log(action.payload, "-- customization Reducer--");
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
