import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../../../assets/images/businessman-avatar-male-face-icon-600w-538980163.webp";
import {NavLink} from "react-router-dom";

function Users(props) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div className={s.users_wrapper}>
        <div className={s.users_number_page}>
            {pages.map(p => {

                return <span className={props.currentPage === p && s.selectedPage}
                             key={Math.random()+pages}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }
                             }>{p} </span>
            })}
        </div>
        <div className={s.user_container}>
        {
            props.users.map(u => <div key={u.id}>

                <span>
                    <div>
                        <NavLink to={"/Profile/" + u.id}>
                        <img className={s.avatarItem}
                             src={u.photos.small != null ? u.photos.small : userPhoto}
                             alt="avatar"/>
                        </NavLink>
                     <div>
                         {u.followed
                             ? <button disabled={props.followingInProgress
                                 .some(id => id === u.id)}
                                       onClick={() => {
                                           props.unfollow(u.id) }}>
                                 Unfollow</button>
                             : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                       onClick={() => { props.follow(u.id) }}>
                                 Follow</button>}
                     </div></div>
                </span>
                <div className={s.user_description_wrapper}>
                <span className={s.user_description}>
                        <div className={s.user_description_name}>{u.name}</div>
                        <div className={s.user_description_status}>{u.status}</div>
                        <div>{"u.country"}</div>
                        <div>{"u.city"}</div>
                    </span>
                </div>
            </div>)
        }</div>
    < /div>
}
export default Users;