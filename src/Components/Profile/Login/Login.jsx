import React from "react";
import s from './Login.module.css'
import {Formik, Form, Field} from "formik";

const LoginForm = () => {

    return <div>
        <Formik
            initialValues={{
                login: '',
                password: '',
                remember: false
            }}
            validateOnBlur
            onSubmit={(values) => {
                console.log(values)
            }}>
            {({values, handleChange, handleSubmit}) => (
                <Form className={s.login_form}>
                    <div><Field type={"login"}
                                name={"login"}
                                placeholder={'Login'}
                                onChange={handleChange}
                                value={values.login}/></div>
                    <div><Field type={`password`}
                                name={`password`}
                                placeholder={'Password'}
                                onChange={handleChange}
                                value={values.password}
                    /></div>
                    <div><Field type={`checkbox`} name={`remember`}/> remember me?</div>
                    <div>
                        <button type={`submit`}
                                onClick={handleSubmit}
                        >Log-In
                        </button>
                    </div>

                </Form>
            )}
        </Formik>
    </div>
}
const Login = () => {

    return <div>
        <div className={s.login_container}>
            <h1> Welcome </h1>
            <LoginForm/>
        </div>
    </div>
}


export default Login;