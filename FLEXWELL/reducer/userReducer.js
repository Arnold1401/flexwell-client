import {
  USER_PENDING,
  USER_ERROR,
  USER_SUCCESS,
  USER_CLEAR,
} from "../action/actionType";

const initalState = {
  isLoading: true,
  user: {},
  errorMsg: "",
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case USER_PENDING:
      return {
        ...state,
      };
    case USER_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };
    case USER_CLEAR:
      return {
        ...state,
        isLoading: false,
        errorMsg: "",
        user: "",
      };
    default:
      return state;
  }
};

export default userReducer;
