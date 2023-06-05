import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import challengeReducer from "../reducer/challengeReducer";
import libraryReducer from "../reducer/libraryReducer";
import exerciseDetailReducer from "../reducer/detailExcerciseReducer";

const rootReducers = combineReducers({
  fetchChallange: challengeReducer,
  fetchLibrary: libraryReducer,
  fetchExerciseDetail: exerciseDetailReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
