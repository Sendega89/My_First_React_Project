import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyCreator} from "../../../../redux/dialogs_Reducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onNewMessageChange: (e) => {
            let body = e.target.value;
            dispatch(updateNewMessageBodyCreator(body));
        },
        onSendMessageClick: () => {
            dispatch(sendMessageActionCreator());
        }

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;