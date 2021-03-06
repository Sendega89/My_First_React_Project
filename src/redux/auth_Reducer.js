import React from "react";
import {authAPI} from "../api/api";


const SET_USER_DATA = 'SET-USER-DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}


export const setAuthUserData = (id, login, email) => ({type: SET_USER_DATA, data: {id, email, login}})

export const getAuthUserData = () => (dispatch) => {

    authAPI.me()
        .then(responce => {
        if (responce.data.resultCode === 0) {
            let {id,login,email} = responce.data.data
            dispatch(setAuthUserData(id,login,email))
        }
    })

}

export default authReducer;