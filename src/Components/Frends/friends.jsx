import React from "react";
import s from "./frends.module.css";

const Friends = () => {
    return <div className={s.wrapper}>

            <h2>Friends</h2>
            <div className={s.friends_item_name}>
                <span>Tima</span>
                <span>Gleb</span>
                <span>Andrey</span>
            </div>

    </div>


}
export default Friends;