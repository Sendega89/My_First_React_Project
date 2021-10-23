import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyCreator} from "../../../../redux/dialogs_Reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
       <Dialogs  onSendMessageClick={onSendMessageClick}
                 onNewMessageChange={onNewMessageChange}
                 state={state} />
    )
}

export default DialogsContainer;