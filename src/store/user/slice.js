import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from "../../axios.js";

const initialState = {
    user: {}
};

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
}); 

export const {
    setUser,
} = userSlice.actions;

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (_, thunkApi) => {
        axiosInstance()
        .get("/accounts/users/authenticated-user/")
        .then(function (response) {
            console.log(response.data.data);
            console.log("hi");
            thunkApi.dispatch(
                setUser(response.data.data)
            )
        }) 
        .catch(function (error) {
            console.log(error);
          });
    }

)

export default userSlice.reducer;