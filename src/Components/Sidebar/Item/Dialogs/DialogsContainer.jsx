import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyCreator} from "../../../../redux/dialogs_Reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)