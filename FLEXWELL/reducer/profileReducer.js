import {
  PROFILE_PENDING,
  PROFILE_ERROR,
  PROFILE_SUCCESS,
} from "../action/actionType";

const initalState = {
  isLoading: true,
  profile: {},
  errorMsg: "",
};

const profileReducer = (state = initalState, action) => {
  switch (action.type) {
    case PROFILE_SUCCESS:
      console.log("-- succeed update  --");
      return {
        ...state,
        isLoading: false,
        profile: action.payload,
      };
    case PROFILE_PENDING:
      return {
        ...state,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
