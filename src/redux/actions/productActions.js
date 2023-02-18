import {ActionTypes} from "../constants/action-types.js"

export const setOrganization = (organization) =>{
    return {
        type: ActionTypes.SET_ORGANIZATION
        payload: organization,
    };
};

export const selectedOrganization = (organization) =>{
    return {
        type: ActionTypes.SELECTED_ORGANIZATION
        payload: organization,
    };
};