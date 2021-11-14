import React from "react";
import s from './Login.module.css'


function Login() {

    return <div>
        <div className={s.login_container}>

                <div className={s.image}>
                    <div>
                        <h1>Image</h1>
                    </div>
                </div>
                <div className={s.area}>
                    <div>
                        <h1>Avtorization</h1>
                    </div>
                </div>

        </div>
    </div>
}

export default Login;