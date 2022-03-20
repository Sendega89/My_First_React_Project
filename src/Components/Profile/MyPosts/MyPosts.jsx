import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, Form, Formik} from "formik";
import {lengthValidator} from "../../../utils/validators/validator";
import style from "../../../common/CSS Modules/Error.module.scss"
import ButtonStyle from "../../../common/CSS Modules/ButtonStyle.module.css"

const maxLength = lengthValidator(10)

function AddNewPostForm(props) {

    return <>
        <Formik
            initialValues={{
                postText: '',
            }}
            onSubmit={(values, {resetForm}) => {
                if (values)
                    props.onSubmit(values);
                resetForm({values: ''});
            }

            }>
            {({values, errors, touched, isValid, dirty}) => (
                <Form className={s.myPost_form}>
                    <div><Field
                        className={s.login_form_input + " " + `${errors.postText && touched && dirty ? style.error : ''}`}
                        type={"text"}
                        name={"postText"}
                        validate={maxLength}
                        placeholder={'Enter post text here'}
                        value={values.postText}/></div>
                    <div className={ButtonStyle.login_form_button}>
                        <button  type={`submit`}>Add Post </button>
                        {errors.postText && dirty && <span className={style.error}> Error Length! </span>}

                    </div>

                </Form>
            )}
        </Formik>
    </>
}

const MyPosts = (props) => {
    let posts = props.postData.map(p => <Post message={p.message}
                                              likesCount={p.likesCount}
                                              key={p.id + 1}/>);
    let onAddPost = (values) => {
        props.addPost(values);

    }
    return <div className={s.myPost_wrapper}>
        <h2 className={s.myPosts_title}>
            My posts</h2>
        <div className={s.myPosts_form}>
            <AddNewPostForm onSubmit={onAddPost}/>
        </div>
        <div className={s.myPosts_posts}>
            {posts}
        </div>

    </div>
}
export default MyPosts