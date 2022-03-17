import React from "react";
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "../Frends/friends";

function Sidebar() {
    return (
        <nav className={s.sidebar}>
            <div className={s.menuItems}>
                <div className={s.item}>
                    <NavLink to="/Profile" activeClassName={s.activeLink}> Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/Dialogs" activeClassName={s.activeLink}>Dialogs</NavLink></div>
                <div className={s.item}>
                    <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink></div>
                <div className={s.item}>
                    <NavLink to="/Music" activeClassName={s.activeLink}>Music</NavLink></div>
                <div className={s.item}>
                    <NavLink to="/News" activeClassName={s.activeLink}>News</NavLink></div>
                <div className={s.item}>
                    <NavLink to="/Photo" activeClassName={s.activeLink}> Photo</NavLink></div>
                <div className={`${s.item} ${s.settings}`}>
                    <NavLink to="/Settings" activeClassName={s.activeLink}> Settings</NavLink></div>
                <div className={`${s.item}`}>
                    <Friends />
                </div>

            </div>
        </nav>
    )
}

export default Sidebar