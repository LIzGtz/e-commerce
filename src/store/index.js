import  { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products.slice";
import cartSlice from "./slices/cart.slice";
import categoriesSlice from "./slices/categories.slice";
// import loginReduceer from "./slices/login.slice";

export default configureStore ({
    reducer: {
        products,
        cart: cartSlice,
        categories: categoriesSlice
        // login: loginReduceer
    }
})