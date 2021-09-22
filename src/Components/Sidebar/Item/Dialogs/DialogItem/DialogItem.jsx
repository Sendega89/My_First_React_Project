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



function DialogItem() {


    let dialogsData = [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Aloha'},
        {id: 3, name: 'Misha'},
        {id: 4, name: 'Gleb'},
        {id: 5, name: 'Tima'},
    ]


    let dialogsElements = dialogsData.map(dialog => <MessageItem name={dialog.name} id={dialog.id} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsElements}

            </div>

        </div>
    )
}

export default DialogItem;