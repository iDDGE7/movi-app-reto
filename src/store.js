import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "state";

// Global Store
const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;
