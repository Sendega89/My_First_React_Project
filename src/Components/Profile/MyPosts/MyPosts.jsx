import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    let postData = [
        {id: 1, message: "Hi,how are you", likesCount: '23'},
        {id: 2, message: 'It is my first post', likesCount: '22'},
    ]
    return (
        <div className={s.myPost}>
            <h1>My posts</h1>
            <div className={s.textArea}>
                <textarea/>
            </div>
            <div>
                <button className={s.button}>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>

            </div>
        </div>
    )
}

export default MyPosts