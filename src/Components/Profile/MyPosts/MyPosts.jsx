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
                resetForm({values: ''});
            }
            }>
            {({values}) => (
                <Form className={s.login_form}>
                    <div><Field type={"text"}
                                name={"postText"}
                                placeholder={'Enter post text here'}
                                value={values.postText}/></div>
                    <div>
                        <button type={`submit`} className={s.button}>Add Post</button>


                    </div>

                </Form>
            )}
        </Formik>
    </>
}


const MyPosts = (props) => {


    let posts = props.postData.map(p => <Post message={p.message}
                                              likesCount={p.likesCount}/>);

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