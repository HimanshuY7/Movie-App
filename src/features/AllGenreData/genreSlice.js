import { createSlice} from "@reduxjs/toolkit";

const initialState= {
    genreData: []
}

const genreSlice = createSlice({
    name: "genre",
    initialState: initialState,
    reducers: {
        fetchGenreData : (state , {payload})=>{
            state.genreData = payload
        }
    }
})

export const {fetchGenreData} = genreSlice.actions;
export default genreSlice.reducer;