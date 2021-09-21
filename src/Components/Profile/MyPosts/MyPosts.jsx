import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    let postData = [
        {id: 1, message: "Hi,how are you", likesCount: '222'},
        {id: 2, message: 'It is my first post', likesCount: '22'},
    ]
    let posts = postData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
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
                {posts}


            </div>
        </div>
    )
}

export default MyPosts