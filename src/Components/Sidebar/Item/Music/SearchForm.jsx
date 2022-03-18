import React from "react";
import {Field, Form, Formik} from "formik";
import s from "../../../Profile/Login/Login.module.css";

const SearchForm = () => {
    return <div>
        <Formik
            initialValues={{
               search: '',

            }}
            onSubmit={(values, submitProps) => {

            }}>
            {({values}) => (
                <Form className={s.search_form}>
                    <div><Field className={s.search_form_input}
                                type={"text"}
                                name={"search"}
                                placeholder={'search'}
                                value={values.search}/>
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