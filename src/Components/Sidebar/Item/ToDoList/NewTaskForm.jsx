import React from "react";
import {Field, Form, Formik} from "formik";
import s from "./ToDoList.module.scss"

const NewTaskForm = ({addTask}) => {
    return  <>
        <Formik
            initialValues={{
                taskText: '',
                required:false,
            }}
            onSubmit={(values, {resetForm}) => {
                if (values)
                addTask(values)
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
                        <span className={s.required} >required?</span>
                    </div>
                        <button type={`submit`}>Add Task</button>
                </Form>
            )}
        </Formik>
    </>
}
export default NewTaskForm