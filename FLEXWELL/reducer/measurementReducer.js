import {
  PROFILEMEASUREMENT_PENDING,
  PROFILEMEASUREMENT_SUCCESS,
  PROFILEMEASUREMENT_ERROR,
} from "../action/actionType";

const initalState = {
  loadingMeasurement: true,
  measurement: {},
  errorMsgMeasurement: "",
};

const measurementReducer = (state = initalState, action) => {
  switch (action.type) {
    case PROFILEMEASUREMENT_SUCCESS:
      // console.log(action.payload, "reducer");
      return {
        ...state,
        loadingMeasurement: false,
        measurement: action.payload,
      };
    case PROFILEMEASUREMENT_PENDING:
      return {
        ...state,
      };
    case PROFILEMEASUREMENT_ERROR:
      return {
        ...state,
        loadingMeasurement: false,
        errorMsgMeasurement: action.payload,
      };
    default:
      return state;
  }
};

export default measurementReducer;
