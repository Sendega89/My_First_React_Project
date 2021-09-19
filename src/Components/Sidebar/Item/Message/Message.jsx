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
    let dialogsData = [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Aloha'},
        {id: 3, name: 'Misha'},
        {id: 4, name: 'Gleb'},
        {id: 5, name: 'Tima'},
    ]
    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Ho'},
        {id: 3, message: 'He'},
        {id: 4, message: 'Hy'},
        {id: 5, message: 'Yo'},
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                <MessageItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <MessageItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <MessageItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <MessageItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <MessageItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={s.messages}>
                <MessageContent message={messageData[0].message}/>
                <MessageContent message={messageData[1].message}/>
                <MessageContent message={messageData[2].message}/>
                <MessageContent message={messageData[3].message}/>
                <MessageContent message={messageData[4].message}/>

            </div>
        </div>
    )
}

export default Message;