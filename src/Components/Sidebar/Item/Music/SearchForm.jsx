import React from "react";
import {Field, Form, Formik} from "formik";
import s from "../../../Profile/Login/Login.module.css";

const SearchForm = (props) => {
    return <div>
        <Formik
            initialValues={{
               search: '',

            }}
            onSubmit={(values, submitProps) => {
           props.getMusicList(values.search, submitProps.setStatus)
            }}>
            {({values,status}) => (
                <Form className={s.search_form}>
                    <div><Field className={s.search_form_input}
                                type={"text"}
                                name={"search"}
                                placeholder={'search'}
                                value={values.search}/>
                        {status && status.error && <div className={s.error}> {status.error} </div>}
                        <button
                            className={s.search_form_button}
                            type={`submit`}>Search
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
}
export default SearchForm
