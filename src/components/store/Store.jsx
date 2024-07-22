import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: []
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:
    {
        addToCart(state, action) {
            const { carId, quantity } = action.payload;
            const indexProductId = (state.items).findIndex(item => item.carId === carId);
            if (indexProductId >= 0) {
                state.items[indexProductId].quantity += quantity;
            }
            else {
                state.items.push({ carId, quantity });
            }
        }
    }
})
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;