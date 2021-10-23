import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    let messagesElements = props.state.messageData.map(m => <Message message={m.message}/>);
    let newMessageBody = props.state.newMessageBody;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={props.onNewMessageChange}
                                   placeholder='Enter your message'/></div>
                    <div>
                        <button onClick={props.onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;