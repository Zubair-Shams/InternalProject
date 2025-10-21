// @import dependencies
import { combineReducers } from "@reduxjs/toolkit";
// @import slices
import commonReducer from "./slices/commonSlice";
import loaderReducer from "./slices/loaderSlice";

export const rootReducer = combineReducers({
  loader: loaderReducer,
  commonState: commonReducer,
});
