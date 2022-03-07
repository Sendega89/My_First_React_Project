import React from "react";
import s from "./frends.module.css";

const Friends = () => {
    return <div className={s.friends_wrapper}>
            <h2 className={s.friends_title}>
                Friends</h2>
            <div className={s.friends_item}>
                <span>Tima</span>
                <span>Gleb</span>
                <span>Andrey</span>
            </div>

    </div>


}
export default Friends;