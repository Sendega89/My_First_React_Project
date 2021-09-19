import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
    return (
        <div className={s.Profile}>
            <div className={s.fonImage}>
                <img
                    src='https://st3.depositphotos.com/1194063/18197/i/600/depositphotos_181977680-stock-photo-two-red-hearts-on-rustic.jpg'
                    alt='TopImage'/>
            </div>
            <ProfileInfo />
            <MyPosts/>
        </div>
    )
}

export default Profile