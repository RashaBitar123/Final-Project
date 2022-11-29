import { combineReducers } from "redux";
import TeachersReducer from "./teachersReducer";

export default combineReducers({ TeachersReducer });

export type rootReducer = ReturnType<typeof combineReducers>;
