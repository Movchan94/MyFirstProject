import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";
import styles from './Profile.module.css'

const Profile = (props) => {
    return (
        <div className= {styles.Profile} >
            <ProfileInfo savePhoto={props.savePhoto}
                         isOwner = {props.isOwner}
                         profile ={props.profile}
                         status = {props.status}
                         updateStatus  = {props.updateStatus}
                         saveProfile = {props.saveProfile}
            />
                <MyPostsContainer/>
        </div>
    )
}
export default Profile;