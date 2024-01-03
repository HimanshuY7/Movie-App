import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "./FetchLatestMovie/fetchSlice"


export const store = configureStore({
    reducer: {
        latestMovie: fetchReducer,
    }
})