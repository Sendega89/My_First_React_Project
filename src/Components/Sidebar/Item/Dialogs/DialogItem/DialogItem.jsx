import s from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";


function MessageItem(props) {
    let path = "/Dialogs/dialogs/"
    return (
        <div className={s.dialogs}>
            <span className={s.avatar}>
                    <img src={props.avatar} alt='user_avatar'/>
                </span>
            <NavLink to={path + props.id}>
                {props.name}

            </NavLink>

        </div>
    )
}

function DialogItem(props) {

    let dialogsElements = props.dialogsData.map(dialog => <MessageItem name={dialog.name} id={dialog.id}
                                                                       avatar={dialog.avatar}/>)

    return (

        <div className={s.dialogs_item}>
            {dialogsElements}

        </div>


    )
}

export default DialogItem;