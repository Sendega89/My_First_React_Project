import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../../../assets/images/238794638_3714455842112197_7316010721790369478_n.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


function Users(props) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }
                             }>{p} </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/Profile/" + u.id}>
                        <img className={s.avatarItem} src={u.photos.small != null ? u.photos.small : userPhoto}
                             alt="avatar"/>
                        </NavLink>
                     <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                    withCredentials: true,
                                    headers:{
                                        "API-KEY":"75b9535f-ac86-4688-992f-8643bc54bbe1"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    });
                            }}>UnFollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers:{
                                        "API-KEY":"75b9535f-ac86-4688-992f-8643bc54bbe1"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    });
                            }}>Follow</button>
                        }
                     </div></div>
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
    < /div>
}


export default Users;