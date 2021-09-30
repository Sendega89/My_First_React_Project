import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


function MyPosts(props) {
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }
    let posts = props.postData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
    return (
        <div className={s.myPost}>
            <h1>My posts</h1>
            <div className={s.textArea}>
                <textarea ref={newPostElement}/>
            </div>
            <div>
                <button onClick={addPost} className={s.button}>Add post</button>
            </div>
            <div className={s.posts}>
                {posts}


            </div>
        </div>
    )
}

export default MyPosts