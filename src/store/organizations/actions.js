import { setOrganizations } from './slice'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { redirect } from "react-router-dom";
import { setOrganizationDashboard } from './slice'


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
    'organizationDashboard/fetchAll',
    async (_, thunkApi) => {
        const token = localStorage.getItem('token');

        try {
            let response = await fetch(
                'http://m-subscribe-dev.eba-kpdc2e68.eu-central-1.elasticbeanstalk.com/dashboard/organization/', {
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
                thunkApi.dispatch(setOrganizationDashboard(response))
                return response.data;
            }
        } catch (exception) {
            console.error(exception)
        }

    }
)