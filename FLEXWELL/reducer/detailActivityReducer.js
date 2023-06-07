import {
  DETAILACTIVITY_ERROR,
  DETAILACTIVITY_SUCCESS,
  DETAILACTIVITY_PENDING,
} from "../action/actionType";

const initalState = {
  isLoading: true,
  activity: {},
  errorMsg: "",
};

const fetchDetailActivtyReducer = (state = initalState, action) => {
  switch (action.type) {
    case DETAILACTIVITY_SUCCESS:
      console.log(action.payload, "-- customization Reducer--");
      return {
        ...state,
        isLoading: false,
        activity: action.payload,
      };
    case DETAILACTIVITY_PENDING:
      console.log(action.payload, "-- customization Reducer--");
      return {
        ...state,
      };
    case DETAILACTIVITY_ERROR:
      console.log(action.payload, "-- customization Reducer--");
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default fetchDetailActivtyReducer;
