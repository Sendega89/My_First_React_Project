import React from "react";
import s from "./Message.module.css";
import {NavLink} from "react-router-dom";

function MessageItem(props) {
    let path = "/Message/dialogs/"
    return (
        <div className={s.dialog}>
            <NavLink to={path + props.id}>{props.name} </NavLink>
        </div>
    )
}

function MessageContent(props) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

function Message(props) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                <MessageItem name="Andrey" id="1"/>
                <MessageItem name="Aloha" id="2"/>
                <MessageItem name="Misha" id="3"/>
                <MessageItem name="Gleb" id="4"/>
                <MessageItem name="Tima" id="5"/>
            </div>
            <div className={s.messages}>
                <MessageContent message="Hi"/>
                <MessageContent message="He"/>
                <MessageContent message="Ho"/>
                <MessageContent message="Hy"/>
                <MessageContent message="Yo"/>

            </div>
        </div>
    )
}

export default Message;