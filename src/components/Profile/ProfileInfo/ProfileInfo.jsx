import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg'/>
            </div>
            <div className ={s.descriptionBlock}>
                <img src = {props.profile.photos.large}/>
                <div>
                    {props.profile.fullName}
                </div>
                <div>
                    {props.profile.contacts.facebook}
                </div>
                <div>
                    {props.profile.aboutMe}
                </div>
                <div>
                    {props.profile.contacts.instagram}
                </div>


            </div>

        </div>
    )
}
export default ProfileInfo;