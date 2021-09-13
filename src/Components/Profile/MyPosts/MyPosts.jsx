import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>My posts
            <div>New Post</div>
            <Post/>
            <Post/>


        </div>
    )
}

export default MyPosts