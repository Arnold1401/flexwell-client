import {
  CHALLENGE_PENDING,
  CHALLENGE_ERROR,
  CHALLENGE_SUCCESS,
} from "../action/actionType";

const initalState = {
  isLoading: true,
  challenge: [],
  errorMsg: "",
};

const challengeReducer = (state = initalState, action) => {
  switch (action.type) {
    case CHALLENGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        challenge: action.payload,
      };
    case CHALLENGE_PENDING:
      return {
        ...state,
      };
    case CHALLENGE_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default challengeReducer;
