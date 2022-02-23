import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, Form, Formik} from "formik";



function AddNewPostForm(props) {
    return <>
        <Formik
            initialValues={{
                postText: '',
            }}

            onSubmit={(values, {resetForm}) => {
                props.onSubmit(values);
                resetForm({values:''});
            }
        }>
            {({values, handleChange, handleSubmit}) => (
                <Form className={s.login_form}>
                    <div><Field type={"text"}
                                name={"postText"}
                                placeholder={'Enter post text here'}
                                onChange={handleChange}
                                value={values.login}/></div>
                    <div>
                        <button type={`submit`}
                                className={s.button}
                                onClick={handleSubmit}
                        >Add Post
                        </button>
                    </div>

                </Form>
            )}
        </Formik>
    {/*<textarea ref={props.ref}
              value={props.value}
              onChange={props.onChange}
              placeholder="Enter text here"/>
    <div>
        <button onClick={props.onClick} >Add post</button>
    </div>;*/}
</>
}


const MyPosts=(props)=> {


    let posts = props.postData.map(p => <Post message={p.message}
                                              likesCount={p.likesCount}/>);
    //let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values);

    }

    return (
        <div className={s.myPost}>
            <h1>My posts</h1>
            <div className={s.textArea}>
                <AddNewPostForm onSubmit={onAddPost}/>
                <div className={s.posts}>
                    {posts}
                </div>
            </div>
        </div>
            )
}





export default MyPosts