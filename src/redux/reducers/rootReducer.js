import { combineReducers } from "redux";
import countReducer from "./countReducer";
import personReducer from "./personReducer";

export default combineReducers({ count: countReducer, persons: personReducer });
