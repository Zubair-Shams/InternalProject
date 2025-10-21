// src/app/store.js

import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
});
