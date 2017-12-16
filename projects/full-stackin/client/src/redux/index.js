import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import classes from "./classes";
import students from "./classDetail";

const rootReducer = combineReducers({
  classes,
  students
});

export default createStore(rootReducer, applyMiddleware(thunk));
