import React from "react";
import s from './Login.module.css'
import {Formik, Form, Field} from "formik";
import {connect} from "react-redux";
import {login} from "../../../redux/auth_Reducer";
import {Redirect} from "react-router-dom";


const LoginForm = ({login, captchaUrl}) => {

    return <div>
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false,
                captcha: null,
            }}
            onSubmit={(values, submitProps) => {
                login(values.email,
                    values.password,
                    values.rememberMe,
                    submitProps.setStatus,
                   values.captcha);
            }}>
            {({values, status}) => (
                <Form className={s.login_form}>

                    <div><Field className={s.login_form_input}
                                type={"Login"}
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

                    {status && status.error && (
                        <div className={s.error}>
                            {status.error}
                        </div>)}
                    <div>
                        {captchaUrl && <img src={captchaUrl} alt={'captcha'}/>}
                    </div>
                    <div>
                        {captchaUrl && <Field className={s.login_form_input}
                                              name={`captcha`}
                                              />}
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
const Login = ({isAuth, ...props}) => {

    if (isAuth) {
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
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl,
    })

export default connect(mapToProps, {login})(Login);