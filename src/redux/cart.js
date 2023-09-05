import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    cartlist: [],
    cartCount: 0,
}

const cartSlice = createSlice({
 name: "cart",
 initialstate : INITIAL_STATE,
 reducers: {
    increment: (state) => {
        state.cartCount += 1;
        
    },
    decrement: (state) => {
        state.cartCount -= 1;
    },
    addtocart: (state)  => {
        state.addtocart = 1

    },

 },
});
export const {increment ,decrement, addtocart} = createSlice.actions;
export default cartSlice.reducer