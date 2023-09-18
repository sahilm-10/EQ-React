import React from "react";
import rootReducer from "./reducers/index";
import { configureStore } from '@reduxjs/toolkit'
const store = configureStore(rootReducer, + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
