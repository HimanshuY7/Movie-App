import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "./FetchLatestMovieListDetails/fetchSlice"
import genreReducer from "./AllGenreData/genreSlice"
import searchReducer from "./FetchLatestMovieListDetails/searchSlice"
import favouriteReducer from "./FavouritePageRelatedQuery/favouriteSlice"


export const store = configureStore({
    reducer: {
        latestMovie: fetchReducer,
        genre: genreReducer, 
        search : searchReducer,
        favourite: favouriteReducer,
    }
})