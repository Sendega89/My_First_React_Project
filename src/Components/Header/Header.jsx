import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logoImg from "../../assets/images/logoUkraine.png"
import style from "../../common/CSS Modules/ThemeStyle.module.scss"


const Header = (props) => {

    return (
        <header className={style.header}>

            <img className={style.header_logo}
                src={logoImg} alt="logo"/>

                {props.isAuth ? <div className={s.loginBlock}>
                        <div className={s.loginBlock_loginText}>{props.login}</div>
                <button className={s.loginBlock_button}
                onClick={props.logout}>Log-Out</button>
                </div>:
                    <NavLink to={'/login'} className={style.loginBlock_loginText}> Login</NavLink>
                }


        </header>
    )
}

export default Header;