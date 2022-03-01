import React from "react";
import s from './Login.module.css'
import {Formik, Form, Field} from "formik";
import {requiredField} from "../../../utils/validators/validator";

const LoginForm = () => {

    return <div>
        <Formik
            initialValues={{
                login: '',
                password: '',
                remember: false
            }}
            validate={requiredField}
            onSubmit={(values) => {
                console.log(values)
            }}>
            {({values}) => (
                <Form className={s.login_form}>
                    <div><Field type={"login"}
                                validate={requiredField}
                                name={"login"}
                                placeholder={'Login'}
                                value={values.login}/></div>

                    <div><Field type={`password`}
                                name={`password`}
                                placeholder={'Password'}
                                value={values.password} /></div>

                    <div><Field type={`checkbox`} name={`remember`}/> remember me?</div>

                    <div> <button type={`submit`}>Log-In</button></div>

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