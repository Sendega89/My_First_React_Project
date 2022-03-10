import React from "react";
import s from "./Users.module.css";
import Paginator from "../../../../common/Paginator/Paginator";
import User from "./User";


function Users({totalUsersCount, pageSize, onPageChanged, currentPage, ...props}) {


    return <div className={s.users_wrapper}>
        <Paginator totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
                   onPageChanged={onPageChanged}
                   currentPage={currentPage}
        />
        <div className={s.user_container}>
            {props.users.map(u => <User users={u}
                                           key={u.id}
                                           follow={props.follow}
                                           unfollow={props.unfollow}
                                           followingInProgress={props.followingInProgress}/>)
            }
        </div>
    </div>
}

export default Users;