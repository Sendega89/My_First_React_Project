import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyCreator} from "../../../../redux/dialogs_Reducer";
import Dialogs from "./Dialogs";
import StoreContecst from "../../../../StoreContecst";


const DialogsContainer = () => {
    return <StoreContecst.Consumer>
        {
        (store) => {
            let state = store.getState().dialogsPage;

            let onSendMessageClick = () => {
                store.dispatch(sendMessageActionCreator());
            }
            let onNewMessageChange = (e) => {
                let body = e.target.value;
                store.dispatch(updateNewMessageBodyCreator(body));
            }
            return <Dialogs onSendMessageClick={onSendMessageClick}
                            onNewMessageChange={onNewMessageChange}
                            state={state}/>
        }
    }
    </StoreContecst.Consumer>
}

export default DialogsContainer;