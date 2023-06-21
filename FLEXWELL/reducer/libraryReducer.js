import {
  LIBRARY_PENDING,
  LIBRARY_ERROR,
  LIBRARY_SUCCESS,
} from "../action/actionType";

const initalState = {
  isLoading: true,
  library: [],
  errorMsg: "",
};

const libraryReducer = (state = initalState, action) => {
  switch (action.type) {
    case LIBRARY_SUCCESS:
      // console.log(action.payload, "reducer");
      return {
        ...state,
        isLoading: false,
        library: action.payload,
      };
    case LIBRARY_PENDING:
      return {
        ...state,
      };
    case LIBRARY_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default libraryReducer;
