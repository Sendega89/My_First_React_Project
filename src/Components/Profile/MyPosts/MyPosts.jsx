import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

debugger;
function MyPosts(props) {

    let posts =props.postData.map(p => <Post message={p.message}
                                              likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
}
let onPostChange= () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);

}

    return (
        <div className={s.myPost}>
            <h1>My posts</h1>
            <div className={s.textArea}>
                <textarea ref={newPostElement}
                          value={props.newPostText}
                          onChange={onPostChange}/>
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