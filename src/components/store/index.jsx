import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Store"
export const store = configureStore({
    reducer:
    {
        cart: cartReducer
    }
})