import React from "react";
import s from "./Message.module.css"


function MessageContent(props) {
    return (
        <div className={s.message}>
            {props.id}
            {props.message}
        </div>)
}


function Message() {
    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Ho'},
        {id: 3, message: 'He'},
        {id: 4, message: 'Hy'},
        {id: 5, message: 'Yo'},
    ]


    let messageElements = messageData.map(mess => <MessageContent message={mess.message} id={mess.id}/>)
    return (

        <div className={s.messages}>

            {messageElements}

        </div>
    )
}

export default Message;