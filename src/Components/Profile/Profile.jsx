import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileStatus from "./ProfileStatus"

const Profile =(props) => {
    return (
        <div className={s.Profile}>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </div>
    )
}
export default Profile