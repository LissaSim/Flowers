
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartIcon: false,
    cart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = { ...action.payload, quantity: 1 };
            state.cart.push(item);
            state.cartIcon = true;
        },
        deleteItem: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
            state.cartIcon = state.cart.length > 0;
        },
        incItemQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decItemQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        }
    }
});

const { actions, reducer } = cartSlice;

export default reducer;

export const {
    addItem,
    deleteItem,
    incItemQuantity,
    decItemQuantity
} = actions;
