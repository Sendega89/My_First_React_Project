import React from "react";
import s from "./Users.module.css";
import * as axios from 'axios';
import userPhoto from '../../../../assets/images/238794638_3714455842112197_7316010721790369478_n.jpg'

function Users(props) {
    if (props.users.length === 0) {

        axios.get ("https://social-network.samuraijs.com/api/1.0/users").then(response => {
debugger
            props.setUsers(response.data.items)
        });

    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.avatarItem} src={u.photos.small != null ? u.photos.small : userPhoto } alt="avatar"/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>UnFollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
                        }
                    </div>
                </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.country"}</div>
                        <div>{"u.city"}</div>
                    </span>
                </div>)
            }
        </div>


    )
}

export default Users;