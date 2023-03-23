import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from "../../axios.js";

const initialState = {
    user: {},
    changePassword: [],
};

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setChangedPassword: (state, action) => {
            state.changePassword = action.payload;
        }
    },
}); 



// Actions
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

export const postChangePassword = createAsyncThunk(
    'changepassword',
    async (changePasswordData, thunkApi) => {
        // console.log(_);
        axiosInstance()
        .post("/accounts/change-password", changePasswordData
        )
        .then(function (response) {
            console.log(response);
            thunkApi.dispatch(
                setChangedPassword(response)
            )
        })
        .catch(function (error) {
            console.log(error)
        });
        
    }
)


export const {
    setUser,
    setChangedPassword
} = userSlice.actions;

export default userSlice.reducer;