import React from "react";
import s from './Sidebar.module.css';

function Sidebar() {
    return (
        <nav className={s.sidebar}>
            <div className={s.menuItems}>
                <div className={s.item}><a href='#Part1'>Profile</a></div>
                <div className={s.item}><a href='#Part2'>Message</a></div>
                <div className={s.item}><a href='#Part3'>News</a></div>
                <div className={s.item}><a href='#Part4'>Photo</a></div>
                <div className={`${s.item} ${s.settings}`}><a href='#Part5'>Settings</a></div>
            </div>
        </nav>
    )
}

export default Sidebar