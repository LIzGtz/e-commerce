import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: null,
    reducers: {
        setCategories: (state, action) => action.payload
    }
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;

const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
export const getProductCategories = () => (dispatch) => {
    return axios.get(URL)
                .then(response => dispatch(setCategories(response.data.data.categories)));
};