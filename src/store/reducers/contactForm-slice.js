import { createSlice } from "@reduxjs/toolkit";

const contactFormSlice = createSlice({
    name: "contactForm",
    initialState: {
        entry: []
    },
    reducers: {
        addFormMessage(state, action) {
            const newMsg = action.payload
            state.entry.push({
                id: newMsg.id,
                name: newMsg.name,
                email: newMsg.email,
                message: newMsg.message,
            })
        }
    }
})

export const contactFormActions = contactFormSlice.actions;
export default contactFormSlice;
