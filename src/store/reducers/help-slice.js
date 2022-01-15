import { createSlice } from "@reduxjs/toolkit";

const helpSlice = createSlice({
    name: "help",
    initialState: {
        category: []
    },
    reducers: {
        replaceData(state, action) {
            state.category = action.payload.category;
        }
    }
})

export const helpActions = helpSlice.actions;
export default helpSlice;