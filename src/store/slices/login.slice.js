// import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const userSlice = createSlice({
//     name: 'login',
//     initialState: null,
//     reducers: {
//         setLogin: (state, action) => action.payload
//     }
// });

// export const { setLogin } = userSlice.actions;

// export default userSlice.reducer;

export const loginThunk = (email, password) => (dispatch) => {
    const url = "https://ecommerce-api-react.herokuapp.com/api/v1/users/login";
    const data = {
        email: email,
        password: password
    };
    return axios.post(url, data)
                .then(response => {                   
                    sessionStorage.setItem('login.token', response.data.data.token);
                    sessionStorage.setItem('login.user.id', response.data.data.user.id);
                    sessionStorage.setItem('login.user.firstName', response.data.data.user.firstName);
                    sessionStorage.setItem('login.user.lastName', response.data.data.user.lastName);
                    sessionStorage.setItem('login.user.email', response.data.data.user.email);
                });
}