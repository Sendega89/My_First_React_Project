import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../../common/Preloader/Preloader";
import fishAvatar from "../../../assets/images/238794638_3714455842112197_7316010721790369478_n.jpg"

function ProfileInfo (props) {

    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {

       if (e.target.files.length){
           props.savePhoto(e.target.files[0])
       };
    };
    return <div className={s.wrapper}>

        <div className={s.profile}>
            <div className={s.profile_avatar}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large  :
                    fishAvatar}
                     alt='avatar'/>
                {props.isOwner && <input className={s.profile_avatar_loadInput}
                    type={'file'}
                    onChange={onMainPhotoSelected}/>}
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