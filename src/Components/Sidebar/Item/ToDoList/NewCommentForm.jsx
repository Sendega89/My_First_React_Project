import React from "react";
import {Field, Form, Formik} from "formik";
import s from "./ToDoList.module.scss"


const NewCommentForm = ({addCommentAC,id}) => {

    return  <div>
        <Formik
            initialValues={{
                commentText: '',
            }}
            onSubmit={(values, {resetForm}) => {
                if (values)
                addCommentAC(values,id)
              resetForm({values: ''});
            }
            }>
            {({values}) => (
                <Form>
                    <div><Field className={s.commentForm_wrapper}
                        type={"text"}
                        name={"commentText"}
                        placeholder={'Enter new comment'}
                        value={values.commentText}/>
                    </div>
                        <button className={s.commentForm_wrapper}
                            type={`submit`}>Comment</button>
                </Form>
            )}
        </Formik>
    </div>
}
export default NewCommentForm