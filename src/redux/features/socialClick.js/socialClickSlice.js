import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id:0,
    title:"",
    body:""
}

const socialClickSlice = createSlice({
    name:"socialClick",
    initialState,
    reducers:{
      cardClicked:(state,action) => {
        state.id = action.payload.id
        state.title = action.payload.title
        state.body = action.payload.body
      }
    }
})

export const {cardClicked} = socialClickSlice.actions;
export default socialClickSlice.reducer;