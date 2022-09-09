import  { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products.slice";
// import loginReduceer from "./slices/login.slice";

export default configureStore ({
    reducer: {
        products,
        // login: loginReduceer
    }
})