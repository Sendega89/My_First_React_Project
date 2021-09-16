import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post value='Hi,how are you?' likesCount='0'/>
                <Post value='It is my first post' likesCount='22'/>

            </div>
        </div>
    )
}

export default MyPosts