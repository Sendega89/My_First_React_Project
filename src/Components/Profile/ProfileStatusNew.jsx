import React, {useEffect, useState} from "react";
import s from "./Profile.module.css";
import style from "../../common/CSS Modules/ThemeStyle.module.scss";

const ProfileStatusNew = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    },[props.status]);

    const activateEditMode = () => {
        return setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        return setStatus(e.currentTarget.value)
    }

    return (
        <div className={style.statusContainer}>
            <div className={s.statusBox}>
                {!editMode &&
                    <div className={s.statusInfo}>
                        <button onClick={activateEditMode}> {props.status || "Enter status"}</button>
                    </div>}
                {editMode &&
                    <div className={s.statusInput}>
                        <input onBlur={deActivateEditMode}
                               onChange={onStatusChange}
                               autoFocus={true}
                               value={status}/>
                    </div>}
            </div>

        </div>
    )

}

export default ProfileStatusNew;
