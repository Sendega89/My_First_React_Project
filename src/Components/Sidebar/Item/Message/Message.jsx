import React from "react";
import s from "./Message.module.css";
import {NavLink} from "react-router-dom";

function Message() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                <div className={s.dialog}>
                    <NavLink to="/Message/dialogs/1">Andrey </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/Message/dialogs/2"> Gleb</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/Message/dialogs/3"> Alosha</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/Message/dialogs/4"> Misha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/Message/dialogs/5"> Vitaxa</NavLink>
                </div>


            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Ho</div>
                <div className={s.message}>Hy</div>
                <div className={s.message}>He</div>
                <div className={s.message}>Ha</div>
            </div>
        </div>
    )
}

export default Message;