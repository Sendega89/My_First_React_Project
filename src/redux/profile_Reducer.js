import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    postData: [
        {id: 1, message: "Hi,how are you", likesCount: '2'},
        {id: 2, message: 'It is my first post', likesCount: '4'},
        {id: 3, message: 'It is my second post', likesCount: '23'},
        {id: 4, message: 'It is my last post', likesCount: '8'},
    ],
    newPostText: '',
    profile: null,
    status:' ',
}
const profile_Reducer = (state = initialState, action) => {


    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id:state.postData.length+1,
                message: action.action.postText,
                likesCount: '1'
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state,
                status:action.status}
        }
        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const addPostActionCreator = (values) => ({type: ADD_POST,action:values})
export const setStatus = (status) => ({type: SET_STATUS,status})

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(response=> {
        dispatch(setUserProfile(response.data));
    });
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response=> {
        dispatch(setStatus(response.data));
    });
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response=> {
        if(response.data.resultCode === 0){
            dispatch(setStatus(status))
        }
    });
}
export default profile_Reducer;