import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusHooks from "./ProfileStatusHooks";
import usersPhoto from "../../Users/Photo/usersPhoto.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const myPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )

    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || usersPhoto}
                     className={s.myPhoto}/>
                {isOwner &&
                    <div>
                <input type={'file'} onChange={myPhotoSelected}/>
                    </div>}
                {editMode
                    ? <ProfileDataForm
                        profile={profile}
                        onSubmit={onSubmit}
                        initialValues={profile}
                    />
                    : <ProfileData
                        profile={profile}
                        isOwner={isOwner}
                        toEditMode={() => {
                            setEditMode(true)
                        }}
                    />}
                <ProfileStatusHooks status={status}
                                    updateStatus={updateStatus}/>
            </div>
        </div>
    )

}
const ProfileData = ({profile, isOwner, toEditMode}) => {
    return <div>
        {isOwner && <div className={s.EditButton}>
            <button onClick={toEditMode}>edit</button>
        </div>}
        <div className={s.ProfileData}>
            <b>Full Name</b>: {profile.fullName}
        </div>
        <div className={s.ProfileData}>
            <b>Looking for a
                job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
        <div className={s.ProfileData}>
            <b>My skills</b>: {profile.lookingForAJobDescription}
        </div>
        }
        <div className={s.ProfileData}>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div className={s.ProfileData}>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact
                key={key}
                contactTitle={key}
                contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>

}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>:{contactValue}
    </div>
}

export default ProfileInfo;