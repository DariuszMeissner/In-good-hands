import { configureStore } from "@reduxjs/toolkit";

import helpSlice from "./reducers/help-slice";
import contactFormSlice from "./reducers/contactForm-slice";

const store = configureStore({
    reducer: {
        help: helpSlice.reducer,
        contactForm: contactFormSlice.reducer,
    }
})



export default store;