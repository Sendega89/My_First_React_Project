import s from "../ProfileInfo/ProfileInfo.module.css";
import React from "react";
import {Field, Form,Formik} from "formik";


const ProfileDataForm =({profile,saveProfile,setEditMode}) => {

    return <div className={s.profile_data_form}>
        <Formik initialValues={{
            fullName:profile.fullName,
            lookingForAJob: true,
           lookingForAJobDescription: profile.lookingForAJobDescription,
            AboutMe:profile.AboutMe,

        }} onSubmit={(values) => {
            saveProfile(values);
            setEditMode(false);
                }}>
            {({values,status}) => (
    <Form className={s.profile_description}>
            <div className={s.profile_description_button}>
                <button className={s.profile_description_form_button}
                        type={`submit`}>Save</button>
            </div>
        <b>fullName:</b>
            <div><Field className={s.profile_description_form_input}
                    type={"text"}
                    name={"fullName"}
                    placeholder={'fullName'}
                       value={values.fullName}/></div>
        <b>lookingForAJob:</b>
        <div><Field className={s.profile_description_form_input}
                    type={"checkbox"}
                    name={"lookingForAJob"}
                   /></div>
        <b>lookingForAJobDescription:</b>
        <div><Field className={s.profile_description_form_input}
                    component={"textarea"}
                    name={"lookingForAJobDescription"}
                    /*value={values.lookingForAJobDescription*//></div>
        <b>About me:</b>
        <div><Field className={s.profile_description_form_input}
                    name={"AboutMe"}
                    placeholder={'AboutMe'}
                    value={values.AboutMe}
                    component={"textarea"}/></div>
        <div>


        </div>
        {status && status.error && <div className={s.error}>
            {status.error}
        </div>}

    </Form>)}
        </Formik>
       {/* <ul className={s.profile_description_list}>
            <li>{profile.fullName && `fullName: ${profile.fullName} `}</li>
            <li>lookingForAJob: {profile.lookingForAJob}</li>
            <li>lookingForAJobDescription: {profile.lookingForAJobDescription}</li>
            <ul>contacts:
                <li> {profile.contacts.github && `github:${profile.contacts.github}`}</li>
                <li>vk: {profile.contacts.vk} </li>
                <li>facebook: {profile.contacts.facebook}</li>
                <li>instagram: {profile.contacts.instagram}</li>
                <li>mainLink: {profile.contacts.mainLink}</li>
            </ul>
        </ul>*/}
</div>
        }
export default ProfileDataForm