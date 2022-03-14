import React, {useState} from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../../common/Preloader/Preloader";
import fishAvatar from "../../../assets/images/238794638_3714455842112197_7316010721790369478_n.jpg"
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
                {props.isOwner && <input className={s.profile_avatar_loadInput}
                                         type={'file'}
                                         onChange={onMainPhotoSelected}/>}
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
        {isOwner &&
            <div className={s.profile_description_button}>
                <button onClick={goToEditMode}>Edit profile</button>
            </div>}
        <ul  className={s.profile_description_list}>
            <li>{profile.fullName || "No name"}</li>
            <li>lookingForAJob: {profile.lookingForAJob && "Yes" || !profile.lookingForAJob && 'No'}</li>
            <li> {profile.lookingForAJobDescription ? `JobDescription:${profile.lookingForAJobDescription}` : ''}</li>
            <li> About me: {profile.AboutMe}</li>


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