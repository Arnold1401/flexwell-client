import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import userReducer from "../reducer/userReducer";

const rootReducers = combineReducers({ user: userReducer });

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
