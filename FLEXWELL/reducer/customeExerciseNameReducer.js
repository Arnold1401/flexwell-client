import {
  CREATECUSTOMIZEEXERCISE_ERROR,
  CREATECUSTOMIZEEXERCISE_PENDING,
  CREATECUSTOMIZEEXERCISE_SUCCESS,
} from "../action/actionType";

const initialState = {
  isLoading: true,
  newCustomExercise: {},
  errorMsg: "",
};

const newExerciseNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATECUSTOMIZEEXERCISE_SUCCESS:
      console.log(action.payload, "-- name Reducer Success--");
      return {
        ...state,
        isLoading: false,
        newCustomExercise: action.payload,
      };
    case CREATECUSTOMIZEEXERCISE_PENDING:
      console.log(action.payload, "-- name Reducer--");
      return {
        ...state,
      };
    case CREATECUSTOMIZEEXERCISE_ERROR:
      console.log(action.payload, "-- name Reducer--");
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default newExerciseNameReducer;
