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
                    <input className={s.visually_hidden} type="file" id="file" onChange={onMainPhotoSelected}/>
                    <label for="file">
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
        {isOwner && <div>
            <div >
                <button onClick={goToEditMode}>Edit profile</button>
            </div>
            </div>}
        <ul  className={s.profile_description_list}>
            <li>{profile.fullName || "No name"}</li>
            <li>{profile.AboutMe}</li>
            <li>lookingForAJob: {profile.lookingForAJob && "Yes" || !profile.lookingForAJob && 'No'}</li>
            <li> {profile.lookingForAJobDescription ? `JobDescription:${profile.lookingForAJobDescription}` : ''}</li>



            <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
    </ul>

    </div>
}
const Contact = ({contactTitle,contactValue}) => {
    return <li>
       {contactTitle}:{contactValue}</li>
}
export default ProfileInfo