import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from "../../axios.js";


const initialState = {
    services: [],
    service: {

    },
    addService: [],
};
 

export const serviceSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        setServices: (state, action) => {
            state.services = action.payload;
        },
        setService: (state, action) => {
            state.service = action.payload; 
        },
        postService: (state, action) => {
          state.addService = action.payload;
        }
    },
    
});


export const {
    setServices,
    setService,
    postService,
} = serviceSlice.actions;


export const fetchServices = createAsyncThunk(
    'services/fetchAll',
    async (_, thunkApi) => {
        axiosInstance()
        .get("/services/services/")
        .then(function (response) {
          console.log(response);
          console.log("hi");
          thunkApi.dispatch(
            setServices(response.data)
          )
        })
        .catch(function (error) {
          console.log(error);
        });
    }
)

// Fetch one service
export const fetchService = createAsyncThunk(
    'services/fetchOne',
    async (id, thunkApi) => {
        axiosInstance()
        .get(`/services/services/${id}`)
        .then(function (response) {
          console.log(response);
          console.log("hi");
          thunkApi.dispatch(
            setService(response.data)
          )
        })
        .catch(function (error) {
          console.log(error);
        });
    }
)

// Post services

// export const postServices = createAsyncThunk(
//     'services/post',
//     async (serviceData, thunkApi) => {
//       axiosInstance()
//       .post('/services/services/', serviceData)
//       .then(function(response) {
//         console.log(serviceData)
//         thunkApi.dispatch(
//           postService(response)

//         )
//       })
//       .catch(function (error) {
//         console.log(error)
//       })
//     }

// )

export const postServices = createAsyncThunk(
  'services/post',
  async (serviceData, thunkApi) => {
      // console.log(_);
      axiosInstance()
      .post('/services/services/', serviceData
      )
      .then(function (response) {
          console.log(response);
          thunkApi.dispatch(
            postService(response)
          )
      })
      .catch(function (error) {
          console.log(error)
      });
      
  }
)

export default serviceSlice.reducer;

