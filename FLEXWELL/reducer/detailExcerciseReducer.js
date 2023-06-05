import {
  EXERCISEDETAIL_ERROR,
  EXERCISEDETAIL_SUCCESS,
  EXERCISEDETAIL_PENDING,
} from "../action/actionType";

const initalState = {
  isLoading: true,
  exercise: {},
  errorMsg: "",
};

const exerciseDetailReducer = (state = initalState, action) => {
  switch (action.type) {
    case EXERCISEDETAIL_SUCCESS:
      // console.log(action.payload, "reducer");
      return {
        ...state,
        isLoading: false,
        exercise: action.payload,
      };
    case EXERCISEDETAIL_PENDING:
      return {
        ...state,
      };
    case EXERCISEDETAIL_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default exerciseDetailReducer;
