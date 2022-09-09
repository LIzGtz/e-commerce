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
export const getAllProducts = ({ category, filter, priceFrom, priceTo }) => (dispatch) => {
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
        .then(res => {
            let products = res.data.data.products;
            if (priceFrom && priceTo) {
                products = products?.filter(p => +p.price >= priceFrom && +p.price <= priceTo);
            }
            dispatch(setProducts(products));
        })
        .catch(err => console.log(err))
}