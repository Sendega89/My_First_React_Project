import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    postData: [
        {id: 1, message: "Hi,how are you", likesCount: '2'},
        {id: 2, message: 'It is my first post', likesCount: '4'},
        {id: 3, message: 'It is my second post', likesCount: '23'},
        {id: 4, message: 'It is my last post', likesCount: '8'},
    ],
    newPostText: 'Enter text here',
    profile: null
}
const profile_Reducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: '1'
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response=> {
        dispatch(setUserProfile(response.data));
    });

}
export default profile_Reducer;