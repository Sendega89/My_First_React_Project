import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logoImg from "../../assets/images/logoUkraine.png"
function Header(props) {

    return (
        <header className={s.header}>

            <img className={s.header_logo}
                src={logoImg} alt="logo"/>
            <div className={s.loginBlock} >
                {props.isAuth ? <div className={s.loginBlock_login}>{props.login}
                <span className={s.loginBlock_button}
                onClick={props.logout}>Log-Out</span>
                </div>:
                    <NavLink to={'/login'} className={s.loginBlock_loginText}> Login</NavLink>
                }

            </div>
        </header>
    )
}

export default Header;