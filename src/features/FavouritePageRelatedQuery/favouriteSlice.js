import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favour: [],
}

const favouriteSlice = createSlice({
    name: 'favourite',
    initialState: initialState,
    reducers: {
        updateFavourite: (state, action)=>{
            state.favour = action.payload;
        },
        clearFavourite: (state)=>{
            state.favour = [];
        },
    }
})

export const {updateFavourite, clearFavourite} = favouriteSlice.actions;

export default favouriteSlice.reducer