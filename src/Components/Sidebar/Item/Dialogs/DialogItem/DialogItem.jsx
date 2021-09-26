import s from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";


function MessageItem(props) {
    let path = "/Dialogs/dialogs/"
    return (
        <div className={s.dialogs}>
            <NavLink to={path + props.id}>{props.name} </NavLink>
        </div>
    )
}
function DialogItem(props) {

    let dialogsElements = props.dialogsData.map(dialog => <MessageItem name={dialog.name} id={dialog.id}/>)

    return (
        /*<div className={s.dialogs}></div>*/
        <div className={s.dialogs_item}>
            {dialogsElements}
        </div>


    )
}

export default DialogItem;