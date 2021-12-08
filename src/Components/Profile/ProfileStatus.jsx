import React from "react";
import s from "./Profile.module.css";


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    activateEditMode = () => {
        this.setState({
                editMode: true
            }
        )
    }
    deActivateEditMode = () => {
        this.setState({
                editMode: false
            }
        )
    }

    render() {
        return (
            <div className={s.statusContainer}>
                <div className={s.statusBox}>
                    {!this.state.editMode &&
                        <div className={s.statusInfo}>
                            <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                        </div>}
                    {this.state.editMode &&
                        <div className={s.statusInput}>
                            <input autoFocus={true} onBlur={this.deActivateEditMode.bind(this)} value={this.props.status}/>
                        </div>}
                </div>

            </div>
        )
    }
}

export default ProfileStatus;
