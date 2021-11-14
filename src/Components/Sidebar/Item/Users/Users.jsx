import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../../../assets/images/238794638_3714455842112197_7316010721790369478_n.jpg";
import {NavLink} from "react-router-dom";







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
                             onClick={(e) => {
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