import React from "react";
import s from './Login.module.css'
import {Formik, Form, Field} from "formik";
import {connect} from "react-redux";
import {login} from "../../../redux/auth_Reducer";
import {Redirect} from "react-router-dom";


const LoginForm = (props) => {

    return <div>
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false
            }}

            onSubmit={(values) => {

                props.login(values.email, values.password, values.rememberMe);
                console.log('go')
            }}>
            {({values}) => (
                <Form className={s.login_form}>
                    <div><Field className={s.login_form_input}
                                type={"login"}
                                name={"email"}
                                placeholder={'Login'}
                                value={values.email}/></div>

                    <div><Field className={s.login_form_input} type={`password`}
                                name={`password`}
                                placeholder={'Password'}
                                value={values.password}/></div>

                    <div><Field className={s.login_form_input} type={`checkbox`}
                                name={`rememberMe`}/> remember me?
                    </div>

                    <div>
                        <button
                            className={s.login_form_button}
                            type={`submit`}>Log-In
                        </button>
                    </div>

                </Form>
            )}
        </Formik>
    </div>
}
const Login = (props) => {

    if (props.isAuth) {
        return <Redirect to={"/Profile"}/>
    }
    return <div>
        <div className={s.login_container}>
            <h1> Welcome </h1>
            <LoginForm {...props} />
        </div>
    </div>
}
let mapToProps = (state) => (
    {
        isAuth: state.auth.isAuth
    })

export default connect(mapToProps, {login})(Login);