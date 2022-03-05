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
                ...action.payload,

            }
        default:
            return state;
    }
}


export const setAuthUserData = (id, login, email,isAuth) => ({type: SET_USER_DATA, payload:
        {id, email, login,isAuth}})

export const getAuthUserData = () => (dispatch) => {

    authAPI.me()
        .then(responce => {
        if (responce.data.resultCode === 0) {

            let {id,login,email} = responce.data.data
            dispatch(setAuthUserData(id,login,email,true))
        }
    })

}
export const login = (email,password,rememberMe,setStatus) => (dispatch) => {

    authAPI.login(email,password,rememberMe)
        .then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                setStatus({error:responce.data.messages})
            }
        })

}
export const logout = () =>(dispatch)=> {

    authAPI.logout()
        .then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(setAuthUserData(null,null,null,false))
            }
        })

}
export default authReducer;