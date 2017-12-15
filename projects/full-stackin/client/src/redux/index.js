import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import classes from "./classes";

const rootReducer = combineReducers({
  classes
});

export default createStore(rootReducer, applyMiddleware(thunk));
