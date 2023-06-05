import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import challengeReducer from "../reducer/challengeReducer";
import libraryReducer from "../reducer/libraryReducer";
import userReducer from "../reducer/userReducer";

const rootReducers = combineReducers({
  fetchChallange: challengeReducer,
  fetchLibrary: libraryReducer,
  userReducer: userReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
