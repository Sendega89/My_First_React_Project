import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../../../assets/images/238794638_3714455842112197_7316010721790369478_n.jpg";


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
                                 props.onPageChanged(p)}
                             }>{p} </span>})}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.avatarItem} src={u.photos.small != null ? u.photos.small : userPhoto}
                             alt="avatar"/>
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
    < /div>
}


export default Users;