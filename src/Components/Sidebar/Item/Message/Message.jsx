import React from "react";
import s from "./Message.module.css";
import {NavLink} from "react-router-dom";

function MessageItem(props) {
    let path = "/Message/dialogs/"
    return (
        <div className={s.dialogs}>
            <NavLink to={path + props.id}>{props.name} </NavLink>
        </div>
    )
}


function MessageContent(props) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

function Message() {
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

    let dialogsElements = dialogsData.map(dialog => <MessageItem name={dialog.name} id={dialog.id}/>)
    let messageElements = messageData.map(message => <Message message={message.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsElements}

            </div>
            <div className={s.messages}>


            </div>
        </div>
    )
}

export default Message;