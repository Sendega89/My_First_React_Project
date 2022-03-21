import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUSSES = 'SAVE_PHOTO_SUSSES';


let initialState = {
    postData: [
        {id: 1, message: "Hi,how are you", likesCount: '2'},
        {id: 2, message: 'It is my first post', likesCount: '4'},
        {id: 3, message: 'It is my second post', likesCount: '23'},
        {id: 4, message: 'It is my last post', likesCount: '8'},
    ],
    newPostText: '',
    profile: null,
    status: ' ',
}
const profile_Reducer = (state = initialState, action) => {


    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: state.postData.length + 1,
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
            return {
                ...state,
                status: action.status
            }
        }
        case SAVE_PHOTO_SUSSES: {
            return {
                ...state,
                profile: {...state.profile,
                    photos: action.photos}
            }

        }
        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const addPostActionCreator = (values) => ({type: ADD_POST, action: values});
export const setStatusAC = (status) => ({type: SET_STATUS, status});
export const setPhotoSusses = (photos) => ({type: SAVE_PHOTO_SUSSES, photos});



export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(setPhotoSusses(response.data.data.photos))
    }
}
export const saveProfile = (valuesProfileForm,setStatus) => async (dispatch,getState) => {

    const userId = getState().auth.id;
    let response = await profileAPI.saveProfile(valuesProfileForm)
    if (response.data.resultCode === 0) {

       dispatch(getUserProfile(userId));
    } else {
        setStatus({error:response.data.messages});
        return Promise.reject();
    }
}
export default profile_Reducer;