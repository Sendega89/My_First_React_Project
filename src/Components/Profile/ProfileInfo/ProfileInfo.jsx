import React, {useState} from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../../common/Preloader/Preloader";
import fishAvatar from "../../../assets/images/businessman-avatar-male-face-icon-600w-538980163.webp"
import ProfileDataForm from "../ProfileDataForm/ProfileDataForm";


function ProfileInfo(props) {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {

        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    };
    return <div className={s.wrapper_description}>

        <div className={s.profile}>
            <div className={s.profile_avatar}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large :
                    fishAvatar}
                     alt='avatar'/>
                {props.isOwner && <div>
                    <label>
                        <input className={s.visually_hidden} type="file" id="file" onChange={onMainPhotoSelected}/>
                    <div className={s.addImageButton}>Change photo</div>
                    </label>
                    </div>}
                </div>
            {editMode ?
                <ProfileDataForm profile={props.profile}
                                 saveProfile={props.saveProfile}
                                 setEditMode={setEditMode}
                                 /> :
                <ProfileData profile={props.profile}
                             isOwner={props.isOwner}
                             goToEditMode={() => {
                                 setEditMode(true)
                             }}/>}

        </div>

    </div>
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {

    return <div className={s.profile_description}>
        <div>
             <div> {isOwner && <button onClick={goToEditMode}>Edit</button>}</div>
            <div>{profile.fullName || "No name"}</div>
            <div>{profile.AboutMe}</div>
            <div>lookingForAJob: {profile.lookingForAJob && "Yes" || !profile.lookingForAJob && 'No'}</div>
            <div> {profile.lookingForAJobDescription ? `JobDescription:${profile.lookingForAJobDescription}` : ''}</div>
    </div>
             <div>
            <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/> })}
             </div>
    </div>
}
const Contact = ({contactValue}) => {
    return <div>
       {contactValue}</div>
}
export default ProfileInfo