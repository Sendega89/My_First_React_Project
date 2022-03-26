import React from "react";
import {Field, Form, Formik} from "formik";
import s from "./ToDoList.module.scss"


const NewTaskForm = (props) => {

    return  <>
        <Formik
            initialValues={{
                taskText: '',
                required:false,
            }}
            onSubmit={(values, {resetForm}) => {
                if (values)

                props.addTask(values)
                resetForm({values: ''});
            }
            }>
            {({values}) => (
                <Form>
                    <div><Field
                        type={"text"}
                        name={"taskText"}
                        placeholder={'Enter new task'}
                        value={values.taskText}/>
                        <Field type="checkbox" name='required' className={s.checkboxStyle}/>
                    </div>
                        <button
                            type={`submit`}> Add Task </button>
                </Form>
            )}
        </Formik>
    </>
}
export default NewTaskForm