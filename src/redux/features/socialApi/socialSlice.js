import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading:false,
    posts:[],
    error:null
}

export const fetchData = createAsyncThunk("socialApi/fetchData",()=>{
     return axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.data);
});

const socialSlice = createSlice({
    name:"social",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{state.loading = true})
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.loading = false
            state.posts = action.payload
            state.error = ""
        })
        builder.addCase(fetchData.rejected,(state,action)=>{
            state.loading = false
            state.posts = []
            state.error = action.payload
        })
    }
})

export default socialSlice.reducer;
