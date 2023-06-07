import { PROFILEWEIGHT_SUCCESS } from "../action/actionType";

const initalState = {
  loadingWeightMeasurement: true,
  weightMeasurment: {},
  errorMsgWeightMeasurement: "",
};

const weightReducer = (state = initalState, action) => {
  switch (action.type) {
    case PROFILEWEIGHT_SUCCESS:
      // console.log(action.payload, "reducer");
      return {
        ...state,
        loadingWeightMeasurement: false,
        weightMeasurment: action.payload,
      };

    default:
      return state;
  }
};

export default weightReducer;
