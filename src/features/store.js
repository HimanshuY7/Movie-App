import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "./FetchLatestMovie/fetchSlice"
import genreReducer from "./AllGenreData/genreSlice"


export const store = configureStore({
    reducer: {
        latestMovie: fetchReducer,
        genre: genreReducer, 
    }
})