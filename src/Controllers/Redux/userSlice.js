/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: "user",
    initialState: [{}],
    reducers: {
        getUser: (state) => {
            state.push({ name: "Roger Rangel" })
            state.push({name: "James Bond"})
        },
        
    }
})

export default slice.reducer;

export const {getUser } = slice.actions;
