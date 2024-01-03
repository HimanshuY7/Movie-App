import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    latest:[]
}

const fetchSlice = createSlice({
    name: "fetch",
    initialState: initialState,
    reducers: {
        fetchMovieData : (state , {payload})=>{
            state.latest = payload
        }
    }
})

export const {fetchMovieData} = fetchSlice.actions;
export default fetchSlice.reducer;