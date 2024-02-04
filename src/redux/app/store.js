import { configureStore } from "@reduxjs/toolkit";
import socialReducer from "../features/socialApi/socialSlice";
import socialClickReducer from "../features/socialClick.js/socialClickSlice";
const store = configureStore({
    reducer:{
       socialApi:socialReducer,
       socialClick:socialClickReducer
    }
})

export default store;