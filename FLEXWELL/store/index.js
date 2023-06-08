import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import challengeReducer from "../reducer/challengeReducer";
import libraryReducer from "../reducer/libraryReducer";
import exerciseDetailReducer from "../reducer/detailExcerciseReducer";
import userReducer from "../reducer/userReducer";
import customizationReducer from "../reducer/customizationReducer";
import addExerciseReducer from "../reducer/addCustomExerciseReducer";
import newExerciseNameReducer from "../reducer/customeExerciseNameReducer";
import profileReducer from "../reducer/profileReducer";
import fetchActivitiesReducer from "../reducer/activitiesReducer";
import fetchDetailActivtyReducer from "../reducer/detailActivityReducer";
import measurementReducer from "../reducer/measurementReducer";
import weightReducer from "../reducer/weightReducer";
import customExercerciseDetail from "../reducer/customExerciseDetail";

const rootReducers = combineReducers({
  fetchChallange: challengeReducer,
  fetchLibrary: libraryReducer,
  fetchExerciseDetail: exerciseDetailReducer,
  userReducer: userReducer,
  fetchCustomization: customizationReducer,
  exerciseList: addExerciseReducer,
  newExerciseName: newExerciseNameReducer,
  profileReducer: profileReducer,
  activitiesReducer: fetchActivitiesReducer,
  detailActivityReducer: fetchDetailActivtyReducer,
  bodyMeasurement: measurementReducer,
  weightMeasurement: weightReducer,
  customerExerciseDetail: customExercerciseDetail,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
