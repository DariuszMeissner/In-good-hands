import { configureStore } from "@reduxjs/toolkit";

import helpSlice from "./reducers/help-slice";

const store = configureStore({
    reducer: {
        help: helpSlice.reducer,
    }
})



export default store;