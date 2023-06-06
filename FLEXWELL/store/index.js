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
import profileReducer from "../reducer/profileReducer";

const rootReducers = combineReducers({
  fetchChallange: challengeReducer,
  fetchLibrary: libraryReducer,
  fetchExerciseDetail: exerciseDetailReducer,
  userReducer: userReducer,
  fetchCustomization: customizationReducer,
  profileReducer: profileReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
