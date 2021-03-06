/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import {retrieveBugs} from '../bugController'

const reducerAction = (state, actions) => { };

const slice = createSlice({
    name: "bug",
    initialState: [],
    reducers: {
        getBugs: state => retrieveBugs(),
        createBugs: (state, actions) => {
            
        },
        updateBug: (state, actions) => {
        
        },
        markComplete: (state, action) => {
        
        }
    }
})

export default slice.reducer;

export const {getBugs, createBugs, updateBug, markComplete} = slice.actions;
