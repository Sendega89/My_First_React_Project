import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logoImg from "../../assets/images/Free_Sample_By_Wix-removebg-preview.png"
import style from "../../common/CSS Modules/ThemeStyle.module.scss"


const Header = (props) => {

    return (
        <header className={style.header}>

            <img className={style.header_logo}
                src={logoImg} alt="logo"/>

                {props.isAuth ? <div className={s.loginBlock}>
                        <div className={s.loginBlock_loginText}>Hello{props.login}</div>
                <div className={s.loginBlock_button}>
                    <button onClick={props.logout}>Out</button>
               </div>
                </div>: <div className={s.loginBlock}>
                    <NavLink to={'/login'} className={s.loginBlock_loginText}>Login</NavLink>
                </div>
                }


        </header>
    )
}

export default Header;