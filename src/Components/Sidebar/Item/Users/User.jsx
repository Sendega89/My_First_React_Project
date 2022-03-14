import React from "react";
import s from "./Users.module.css";
import userFish from "../../../../assets/images/businessman-avatar-male-face-icon-600w-538980163.webp";
import {NavLink} from "react-router-dom";


function User({users,followingInProgress,unfollow,follow}) {


    return  <div >

                    <div>
                        <NavLink to={"/Profile/" + users.id}>
                        <img className={s.avatarItem}
                             src={users.photos.small != null ? users.photos.small : userFish}
                             alt="avatar"/>
                        </NavLink>
                     <div>
                         {users.followed
                             ? <button disabled={followingInProgress
                                 .some(id => id === users.id)}
                                       onClick={() => {
                                          unfollow(users.id) }}>
                                 Unfollow</button>
                             : <button disabled={followingInProgress.some(id => id === users.id)}
                                       onClick={() => {follow(users.id) }}>
                                 Follow</button>}
                     </div></div>

                <div className={s.user_description_wrapper}>
                <span className={s.user_description}>
                        <div className={s.user_description_name}>{users.name}</div>
                        <div className={s.user_description_status}>{users.status}</div>
                        <div>{"u.country"}</div>
                        <div>{"u.city"}</div>
                    </span>
                </div>
            </div>

}
export default User;