import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageBodyCreator} from "../../../../redux/dialogs_Reducer";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    let messagesElements = state.messageData.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());

    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;