import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name:'product',
    initialState:"all",
    reducers:{
        setActiveCategory :(state,action) => action.payload
    }

})



export const {setActiveCategory} = productSlice.actions;

export default productSlice.reducer;