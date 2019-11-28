import React from "react";
import {
    createField,
    Input, Textarea
} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from './ProfileInfo.module.css';
import style from "../../common/FormsControls/FormsControls.module.css";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
            </div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <b>Full Name</b>: {createField("Full name:", "fullName", Input, null, null, null)}
            </div>
            <div>
                <b>Looking for a job</b>:{createField("", 'lookingForAJob', Input, null, 'checkbox', null)}
            </div>
            <div>
                <b>My skills</b>:
                {createField("My skills", 'lookingForAJobDescription', Textarea, null, null, null)}
            </div>
            <div>
                <b>About me</b>:
                {createField("About me", 'aboutMe', Textarea, null, null, null)}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key = {key} className={s.contact}>
                    <b>{key}: {createField(key, "contacts." + key, Input, null, null, null)}</b>
                </div>
            })}
            </div>
        </form>
    )
}
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm