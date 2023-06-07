import {
  ACTIVITIES_ERROR,
  ACTIVITIES_SUCCESS,
  ACTIVITIES_PENDING,
} from "../action/actionType";

const initalState = {
  isLoading: true,
  activities: [],
  errorMsg: "",
};

const fetchActivitiesReducer = (state = initalState, action) => {
  switch (action.type) {
    case ACTIVITIES_SUCCESS:
      console.log(action.payload, "-- customization Reducer--");
      return {
        ...state,
        isLoading: false,
        activities: action.payload,
      };
    case ACTIVITIES_PENDING:
      console.log(action.payload, "-- customization Reducer--");
      return {
        ...state,
      };
    case ACTIVITIES_ERROR:
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

export default fetchActivitiesReducer;
