import s from "../ProfileInfo/ProfileInfo.module.css";
import React from "react";
import {Field, Form, Formik} from "formik";


const ProfileDataForm = ({profile, saveProfile, setEditMode}) => {

    return <div className={s.profile_data_form}>
        <Formik initialValues={{
            fullName: profile.fullName,
            lookingForAJob: true,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            AboutMe: profile.AboutMe,

        }} onSubmit={(values,submitProps) => {
            saveProfile(values,submitProps.setStatus).then(
                ()=>{
                    setEditMode(false);
                }
            )

        }}>
            {({values, status}) => (
                <Form className={s.profile_description}>
                    <div className={s.profile_description_button}>
                        <button className={s.profile_description_form_button}
                                type={`submit`}>Save
                        </button>
                        <div className={s.error}>

                            {status && status.error &&
                                 <b>{status.error}</b>
                            }

                        </div>
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

                                name={"lookingForAJobDescription"}
                        value={values.lookingForAJobDescription}/></div>
                    <b>About me:</b>
                    <div><Field className={s.profile_description_form_input}
                                name={"AboutMe"}
                                placeholder={'AboutMe'}
                                value={values.AboutMe}
                                /></div>
                    <div>
                        <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
                        return <div key={key}>
                            <b>{key}</b>
                            <div><Field className={s.profile_description_form_input}
                                        name={'contacts.' + key}
                                        placeholder={key}
                                        value={values.key}
                                        key={key}/>
                            </div>
                        </div>
                    })}


                    </div>


                </Form>)}
        </Formik>
    </div>
}
export default ProfileDataForm