import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_Reducer";
import MyPosts from "./MyPosts";
import StoreContecst from "../../../StoreContecst";


function MyPostsContainer() {
    return (
        <StoreContecst.Consumer>
            {
            (store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }
                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }
                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                postData={state.profilePage.postData}
                                newPostText={state.profilePage.newPostText}/>
            }
        }
        </StoreContecst.Consumer>
    )
}

export default MyPostsContainer