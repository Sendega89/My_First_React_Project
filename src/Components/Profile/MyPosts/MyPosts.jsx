import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, Form, Formik} from "formik";
import {lengthValidator} from "../../../utils/validators/validator";
//import * as Yup from 'yup';


const maxLength = lengthValidator(10)
function AddNewPostForm(props) {

    return <>
        <Formik
            initialValues={{
                postText: '',
            }}
            onSubmit={(values, {resetForm}) => {
                if(values)
                props.onSubmit(values);
                resetForm({values: ''});
            }

            }>
            {({values,errors,touched,isValid,dirty}) => (
                <Form className={s.myPost_form}>
                    <div><Field className={s.login_form_input+" "+`${errors.postText && touched && dirty ? s.error: ''}`}
                                type={"text"}
                                name={"postText"}
                                validate={maxLength}
                                placeholder={'Enter post text here'}
                                value={values.postText}/></div>
                    <div className={s.login_form_button} >
                        <button type={`submit`} className={s.login_form_button}>Add Post</button>
                        {errors.postText && dirty && <span >Error Length! </span>  }

                    </div>

                </Form>
            )}
        </Formik>
    </>
}
const MyPosts = (props) => {
    let posts = props.postData.map(p => <Post message={p.message}
                                              likesCount={p.likesCount}
                                              key={p.id+1}/>);
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