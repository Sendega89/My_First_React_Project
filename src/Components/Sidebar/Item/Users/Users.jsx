import React from "react";
import s from "./Users.module.css";

function Users(props) {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://scontent-iev1-1.xx.fbcdn.net/v/t1.6435-9/238794638_3714455842112197_7316010721790369478_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=erT4bEjNd_QAX8HUV48&_nc_ht=scontent-iev1-1.xx&oh=8c86d05b1e6234f8cd60f026d595d348&oe=61A4D75B',
                    followed: false,
                    fullName: 'Mikhail',
                    status: 'Boss',
                    location: 'ZP',
                    country: 'Ukraine'
                },
                {
                    id: 2,
                    photoUrl: 'https://scontent-iev1-1.xx.fbcdn.net/v/t1.6435-9/238794638_3714455842112197_7316010721790369478_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=erT4bEjNd_QAX8HUV48&_nc_ht=scontent-iev1-1.xx&oh=8c86d05b1e6234f8cd60f026d595d348&oe=61A4D75B',
                    followed: true,
                    fullName: 'LizKo',
                    status: 'Nice fifa',
                    location: 'ZP',
                    country: 'Ukraine'
                },
                {
                    id: 3,
                    photoUrl: 'https://scontent-iev1-1.xx.fbcdn.net/v/t1.6435-9/238794638_3714455842112197_7316010721790369478_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=erT4bEjNd_QAX8HUV48&_nc_ht=scontent-iev1-1.xx&oh=8c86d05b1e6234f8cd60f026d595d348&oe=61A4D75B',
                    followed: false,
                    fullName: 'Tima',
                    status: 'littleBoss',
                    location: 'ZP',
                    country: 'Ukraine'
                }
            ]
        )
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.avatarItem} src={u.photoUrl} alt="avatar"/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.country}</div>
                        <div>{u.city}</div>
                    </span>
                </div>)
            }
        </div>


    )
}

export default Users;