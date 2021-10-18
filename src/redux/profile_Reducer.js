const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
            postData: [
                {id: 1, message: "Hi,how are you", likesCount: '2'},
                {id: 2, message: 'It is my first post', likesCount: '4'},
                {id: 3, message: 'It is my second post', likesCount: '23'},
                {id: 4, message: 'It is my last post', likesCount: '8'},
            ],
            newPostText: ''
}
const profile_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: '1'
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default :
            return state
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}
export default profile_Reducer;