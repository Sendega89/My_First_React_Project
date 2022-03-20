import React from "react";
//import style from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
//import Friends from "../Friends/friends";
import style from '../../common/CSS Modules/ThemeStyle.module.scss'
function Sidebar() {
    return (
        <nav className={style.sidebar}>

                <div className={style.item}>
                    <NavLink to="/Profile" activeClassName={style.activeLink}> Profile</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/Dialogs" activeClassName={style.activeLink}>Dialogs</NavLink></div>
                <div className={style.item}>
                    <NavLink to="/users" activeClassName={style.activeLink}>Users</NavLink></div>
                <div className={style.item}>
                    <NavLink to="/Music" activeClassName={style.activeLink}>Music</NavLink></div>
                <div className={style.item}>
                    <NavLink to="/News" activeClassName={style.activeLink}>News</NavLink></div>
                <div className={style.item}>
                    <NavLink to="/Photo" activeClassName={style.activeLink}> Photo</NavLink></div>
                <div className={`${style.item} ${style.settings}`}>
                    <NavLink to="/Settings" activeClassName={style.activeLink}> Settings</NavLink></div>
                {/*<div className={`${style.item}`}>
                    <Friends />
                </div>*/}


        </nav>
    )
}

export default Sidebar