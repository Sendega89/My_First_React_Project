import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusNew from "./ProfileStatusNew";

const Profile =(props) => {
    return (
        <div className={s.profile}>
            <ProfileStatusNew status={props.status} updateStatus={props.updateStatus}/>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </div>
    )
}
export default Profile