import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from "../../axios.js";


const initialState = {
    services: [],
    service: {

    },
    addService:[],
    deleteServiceDetails: [],
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
        },
        deleteService: (state, action) => {
          state.deleteServiceDetails = action.payload;
        }
    },
    
});


export const {
    setServices,
    setService,
    postService,
    deleteService,
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

<<<<<<< Updated upstream
=======
// Post services

>>>>>>> Stashed changes

export const postServices = createAsyncThunk(
  'services/post',
  async (_, thunkApi) => {
      console.log(_);
      axiosInstance()
      .post('/services/services/', _
      )
      .then(function (response) {
          console.log(response);
          thunkApi.dispatch(
            fetchServices(response)
          )
      })
      .catch(function (error) {
          console.log(error)
      });
      
  }
)

// Delete Services

export const deleteServices = createAsyncThunk(
  'deleteService',
  async (id, thunkApi) => {
      console.log(id);
      axiosInstance()
      .delete(`/services/services/${id}/`
      )
      .then(function (response) {
          console.log("response");
          thunkApi.dispatch(
            fetchServices(response)
          )
      })
      .catch(function (error) {
          console.log(error)
      });
      
  }
)


export default serviceSlice.reducer;

