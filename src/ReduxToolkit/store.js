import { configureStore } from "@reduxjs/toolkit";
import numberChange from "./action-reducers/numberChange";

export const store = configureStore({
    reducer:{
        numberChange
    },
})
