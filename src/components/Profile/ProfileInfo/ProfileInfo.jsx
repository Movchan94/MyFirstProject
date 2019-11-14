import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg'/>
            </div>
            <div className ={s.descriptionBlock}>

                <img src = {profile.photos.large}/>
                <div>
                    <ProfileStatusHooks status = {status} updateStatus ={updateStatus}/>
                </div>
                <div>
                    {profile.fullName}
                </div>
                <div>
                    {profile.contacts.facebook}
                </div>
                <div>
                    {profile.aboutMe}
                </div>
                <div>
                    {profile.contacts.instagram}
                </div>
            </div>

        </div>
    )
}
export default ProfileInfo;