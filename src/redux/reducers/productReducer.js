import {ActionTypes} from "../constants/action-types.js"

const initialState = {
    organization:[
    {
        id:1,
        title:"Carol",
        category:"Singer"
    }
    ]
}


export const productReducer =(state=initialState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_ORGANIZATION:
            return state;
        default:
            return state;
    }
}