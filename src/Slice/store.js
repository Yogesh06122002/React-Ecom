import {configureStore} from "@reduxjs/toolkit"
import counterSlice from '../Slice/cart'
import  productSlice  from "./productType";
const store =  configureStore({
    reducer: {
        cart :counterSlice,
        product :productSlice
    }
})

export default store;