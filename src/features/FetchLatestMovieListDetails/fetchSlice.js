import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    latest:[],
    movieDetail:[],
}

const fetchSlice = createSlice({
    name: "fetch",
    initialState: initialState,
    reducers: {
        fetchMovieData : (state , {payload})=>{
            state.latest = payload;
        },
        getMovieDetails: (state ,{payload})=>{
            state.movieDetail = payload;
        },
    }
})

export const {fetchMovieData ,getMovieDetails} = fetchSlice.actions;
export default fetchSlice.reducer;