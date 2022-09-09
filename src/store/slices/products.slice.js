import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers: {
        setProducts: (state, action) => action.payload

    }
})

export const { setProducts } = productsSlice.actions

export default productsSlice.reducer

const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products'
export const getAllProducts = ({category, filter}) => (dispatch) => {
    const configObj = {
        params: {}
    };

    if (category) {
        configObj.params['category'] = category
    }

    if (filter) {
        configObj.params['query'] = filter
    }

    return axios.get(URL, configObj)
        .then(res => dispatch(setProducts(res.data.data.products)))
        .catch(err => console.log(err))
}