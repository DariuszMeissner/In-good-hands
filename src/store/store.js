import { configureStore } from "@reduxjs/toolkit";

import helpSlice from "./reducers/help-slice";
import contactFormSlice from "./reducers/contactForm-slice";
import uiSlice from "./reducers/uiSlice";

const store = configureStore({
    reducer: {
        help: helpSlice.reducer,
        contactForm: contactFormSlice.reducer,
        ui: uiSlice.reducer
    }
})



export default store;