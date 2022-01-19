import { createSlice } from "@reduxjs/toolkit";

const contactFormSlice = createSlice({
    name: "contactForm",
    initialState: {
        contact: []
    },
    reducers: {
        
    }
})

export const contactFormActions = contactFormSlice.actions;
export default contactFormSlice;
