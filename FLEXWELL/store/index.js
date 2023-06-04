import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import userReducer from "../reducer/userReducer";
import challengeReducer from "../reducer/challengeReducer";

const rootReducers = combineReducers({
  user: userReducer,
  challenge: challengeReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
