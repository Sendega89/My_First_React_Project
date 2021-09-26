import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageContent from "./Message/Message";




function Dialogs(props) {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                <DialogItem dialogsData={props.dialogsData}/>
            </div>
            <div className={s.messages}>
                <MessageContent messageData={props.messageData}/>
            </div>
        </div>
    )
}

export default Dialogs;