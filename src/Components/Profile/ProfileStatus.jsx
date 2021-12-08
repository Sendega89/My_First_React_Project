import React from "react";
import s from "./Profile.module.css";


class ProfileStatus extends React.Component {
state = {
    editMode: false
}
activateEditMode = () => {
this.state.editMode = true;

}
    render() {
        return (
            <div className={s.statusContainer}>
                <div className={s.statusBox}>
                    {!this.state.editMode &&
                    <div className={s.statusInfo}>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>}
                    {this.state.editMode &&
                    <div className={s.statusInput}>
                        <input value={this.props.status}/>
                    </div>}
                </div>

            </div>
        )
    }
}

export default ProfileStatus;
