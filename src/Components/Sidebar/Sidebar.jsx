import React from "react";
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

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
                    <NavLink to="/News" activeClassName={s.activeLink}>News</NavLink></div>
                <div className={s.item}>
                    <NavLink to="/Photo" activeClassName={s.activeLink}> Photo</NavLink></div>
                <div className={`${s.item} ${s.settings}`}>
                    <NavLink to="/Settings" activeClassName={s.activeLink}> Settings</NavLink></div>
                <div className={`${s.item} ${s.friends}`}>
                <h2>Friends</h2>
                    <div className={s.friends_item}>
                        <span>Tima</span>
                        <span>Gleb</span>
                        <span>Andrey</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar