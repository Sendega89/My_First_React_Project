import React from "react";
import s from "./Message.module.css"


function MessageContent(props) {
    return (
        <div className={s.message}>
            {props.message}
        </div>)


}

function Message(props) {


    let newMessageElement = React.createRef();

    let addNewMessage = () => {
        let messageText = newMessageElement.current.value;
     props.addMessage(messageText);

        newMessageElement.current.value = "";
    }
    let onMessageChange = () => {
        let messageText = newMessageElement.current.value;
        props.updateMessageText(messageText);
    }
    let messageElements = props.messageData.map(mess => <MessageContent message={mess.message} id={mess.id} />)
    return (
        <div>
            <div className={s.messages}>
                <div className={s.message_elements}>
                    {messageElements}
                </div>
            </div>
            <div className={s.input_text}>
                <textarea className={s.text_area}
                          ref={newMessageElement}
                          onChange={onMessageChange}
                          value={props.newMessageText}/>
                <button onClick={addNewMessage} className={s.button}>Send message</button>
            </div>
        </div>
    )
}

export default Message;