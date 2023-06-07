import {
  ADDECUSTOMIZEEXERCISE_SUCCESS,
  ADDECUSTOMIZEEXERCISE_PENDING,
  ADDECUSTOMIZEEXERCISE_ERROR,
} from "../action/actionType";

const initalState = {
  isLoading: true,
  exerciseDetail: [],
  errorMsg: "",
};

const addExerciseReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADDECUSTOMIZEEXERCISE_SUCCESS:
      console.log(action.payload, "-- customization Reducer--");
      return {
        ...state,
        isLoading: false,
        exerciseDetail: action.payload,
      };
    case ADDECUSTOMIZEEXERCISE_PENDING:
      console.log(action.payload, "-- customization Reducer--");
      return {
        ...state,
      };
    case ADDECUSTOMIZEEXERCISE_ERROR:
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

export default addExerciseReducer;
