import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileStatusNew from "./ProfileStatusNew";

const Profile =(props) => {
    return (
        <div className={s.profile}>

            <ProfileInfo
                profile={props.profile}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}/>
            <ProfileStatusNew status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile