import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [
            {
                id: 1,
                name: "Fashion Shoes",
                price: 100,
                size: 8,
                color: "Blue",
                imgUrl: "https://api.lorem.space/image/shoes?w=500&h=500",
                quantity: 1,
            },
            {
                id: 2,
                name: "Casual Shoes",
                price: 300,
                size: 10,
                color: "Red",
                imgUrl: "https://api.lorem.space/image/shoes?w=500&h=500",
                quantity: 3,
            },
        ],
    },
    reducers: {},
});

export const actions = cartSlice.actions;
const store = configureStore({ reducer: cartSlice.reducer });
export default store;
