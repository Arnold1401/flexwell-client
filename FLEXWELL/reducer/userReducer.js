import { USER_PENDING, USER_ERROR, USER_SUCCESS } from "../action/actionType";

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
        users: action.payload,
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
    default:
      return state;
  }
};

export default userReducer;
