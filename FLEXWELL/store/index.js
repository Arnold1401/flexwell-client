import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import challengeReducer from "../reducer/challengeReducer";

const rootReducers = combineReducers({
  fetchChallange: challengeReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
