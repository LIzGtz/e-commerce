import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addAuthorizationHeader } from "../../shared/authorization.util";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: null,
    reducers: {
        setCart: (state, action) => action.payload
    }
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;

const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart';
export const getCartThunk = () => (dispatch) => {
    let options = {
        headers: {}
    };
    options.headers = addAuthorizationHeader();
    return axios.get(URL, options)
                .then(response => {
                    dispatch(setCart(response.data.data.cart));
                })
                .catch(error => {
                    if (error.response.status === 401 || error.response.status === 404)
                    {
                        dispatch(setCart(null));
                    }
                });
};

export const addToCartThunk = (productId, quantity) => (dispatch) => {
    const product = { id: productId, quantity: quantity };
    let options = {
        headers: {}
    };
    options.headers = addAuthorizationHeader();

    return axios.post(URL, product, options)
                .then(() => dispatch(getCartThunk()));
}