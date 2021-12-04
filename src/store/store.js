import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./reducers/counterReducer";
import authReducer from "./reducers/authReducer";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})



export default store;