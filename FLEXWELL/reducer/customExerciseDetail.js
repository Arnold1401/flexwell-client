import {
  CUSTOMIZEEXERCISEDETAIL_ERROR,
  CUSTOMIZEEXERCISEDETAIL_SUCCESS,
  CUSTOMIZEEXERCISEDETAIL_PENDING,
} from "../action/actionType";

const initalState = {
  isLoading: true,
  custom: {},
  errorMsg: "",
};

const customExercerciseDetail = (state = initalState, action) => {
  switch (action.type) {
    case CUSTOMIZEEXERCISEDETAIL_SUCCESS:
      // console.log(action.payload, "reducer");
      return {
        ...state,
        isLoading: false,
        custom: action.payload,
      };
    case CUSTOMIZEEXERCISEDETAIL_PENDING:
      return {
        ...state,
      };
    case CUSTOMIZEEXERCISEDETAIL_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default customExercerciseDetail;
