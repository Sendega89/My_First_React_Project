import React from "react";
import {authAPI, securityAPI} from "../api/api";


const SET_USER_DATA = 'my-first-project/auth/SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'my-first-project/security/GET_CAPTCHA_URL_SUCCESS'; //this is action


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null, // if null - then captcha is not required
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}
export const setAuthUserData = (id, login, email, isAuth) => ({
    type: SET_USER_DATA, payload:
        {id, email, login, isAuth}
})
export const getCaptchaUrlSuccess = (captchaUrl) => ({ //this is Action Creator
    type: GET_CAPTCHA_URL_SUCCESS ,
    payload: {captchaUrl}
})

export const getAuthUserData = () => async (dispatch) => {

    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}
export const login = (email, password, rememberMe, setStatus,captchaUrl) => async (dispatch) => {

    let response = await authAPI.login(email, password, rememberMe,captchaUrl)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        } else
        setStatus({error: response.data.messages})
    }
}
export const logout = () => async (dispatch) => {

    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaUrl = () => async (dispatch) => { //this is Thunk
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}
export default authReducer;