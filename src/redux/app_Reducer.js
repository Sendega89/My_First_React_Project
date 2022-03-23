import React from "react";
import {getAuthUserData} from "./auth_Reducer";




const INITIALIZED_SUCCESS = 'my-first-project/app/INITIALIZED_SUCCESS';


let initialState = {
    initialized: false
}

function appReducer(state = initialState, action) {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}


export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
let promise = dispatch(getAuthUserData());
Promise.all([promise])
    .then (() => {
        dispatch(initializedSuccess());
    });
}

export default appReducer;