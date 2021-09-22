import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageContent from "./Message/Message";




function Dialogs() {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                <DialogItem />
            </div>
            <div className={s.messages}>
                <MessageContent />
            </div>
        </div>
    )
}

export default Dialogs;