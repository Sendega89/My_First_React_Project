import React from "react";
import {Field, Form, Formik} from "formik";



const NewCommentForm = (props) => {

    return  <>
        <Formik
            initialValues={{
                commentText: '',
            }}
            onSubmit={(values, {resetForm}) => {
                if (values)
                props.addCommentAC(values)
                resetForm({values: ''});
            }
            }>
            {({values}) => (
                <Form>
                    <div><Field
                        type={"text"}
                        name={"commentText"}
                        placeholder={'Enter new comment'}
                        value={values.commentText}/>
                    </div>
                        <button
                            type={`submit`}>Comment</button>
                </Form>
            )}
        </Formik>
    </>
}
export default NewCommentForm