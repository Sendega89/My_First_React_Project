import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../../common/Preloader/Preloader";
import fishAvatar from "../../../assets/images/businessman-avatar-male-face-icon-600w-538980163.webp"

function ProfileInfo(props) {

    if (!props.profile) {
        return <Preloader/>
    }
    return <div className={s.wrapper}>

        <div className={s.profile}>
            <div className={s.profile_avatar}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large  :
                    fishAvatar}
                     alt='avatar'/>
            </div>
            <div className={s.profile_description}>
                <ul>
                    <li>fullName: {props.profile.fullName}</li>
                    <li>lookingForAJob: {props.profile.lookingForAJob}</li>
                    <li>lookingForAJobDescription: {props.profile.lookingForAJobDescription}</li>
                    <ul>contacts:
                        <li>github: {props.profile.contacts.github}</li>
                        <li>vk: {props.profile.contacts.vk} </li>
                        <li>facebook: {props.profile.contacts.facebook}</li>
                        <li>instagram: {props.profile.contacts.instagram}</li>
                        <li>mainLink: {props.profile.contacts.mainLink}</li>
                    </ul>
                </ul>
            </div>
        </div>

    </div>

}

export default ProfileInfo