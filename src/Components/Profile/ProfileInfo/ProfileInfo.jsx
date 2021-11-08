import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../../common/Preloader/Preloader";

function ProfileInfo(props) {

    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        <div className={s.Profile}>

            <div className={s.avatar}>
                <img src={props.profile.photos.large} alt="avatar"/>
            </div>

            <div className={s.description}>
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