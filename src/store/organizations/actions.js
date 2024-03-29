import { setOrganizationDashboard, setOrganizations, deleteOrganization } from './slice'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { redirect } from "react-router-dom";
import axiosInstance from "../../axios.js";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export const fetchOrganizations = createAsyncThunk(
    'organizations/fetchAll',
    async (search, thunkApi) => {
        const token = localStorage.getItem('token');
        try {
            let response = await fetch(
                'http://m-subscribe-dev.eba-kpdc2e68.eu-central-1.elasticbeanstalk.com/organizations/organizations/', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${token}`
                },
            })
            if (response.status === 401){
                document.location = "/login"
            }else {
                response = await response.json()
                thunkApi.dispatch(setOrganizations(response))
                return response.data;
            }
        } catch (exception) {
            console.error(exception)
        }
       
    }
);

export const fetchOrganizationDashboard = createAsyncThunk(
    'organizationsDashboard/fetchAll',
    async (_, thunkApi) => {
        axiosInstance()
        .get("/dashboard/organization")
        .then(function (response) {
          console.log(response);
          console.log("hi");
          thunkApi.dispatch(
            setOrganizationDashboard(response.data)
            )
        })
        .catch(function (error) {
          console.log(error);
        });
    }
)



export const addOrganization = createAsyncThunk(
    'addorganizations/fetchAll', 
    async (_, thunkApi) => {
        axiosInstance()
        .post("/organizations/organizations/")
        .then(function (response) {
          console.log(response);
          console.log("hi");
          thunkApi.dispatch(
            setOrganizations(response.data)
          )
        })
        .catch(function (error) {
          console.log(error);
        });
    }
)

export const deleteOrganizations = createAsyncThunk (
    'deleteorganization/deleteOne',
    async (id, thunkApi) => {
        axiosInstance()
        .delete(`/organizations/organizations/${id}/`)
        .then(function (response) {
            console.log(response)
            thunkApi.dispatch(
                deleteOrganization(response)

            )
        })
        .catch(function (error) {
            console.log(error);
        })
    }
)