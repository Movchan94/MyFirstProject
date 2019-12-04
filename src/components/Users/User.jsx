import React from 'react';
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";
import usersPhoto from './Photo/usersPhoto.png'
import Button from "@material-ui/core/Button";


let User = ({user, followingInProgress, unfollow, follow}) => {

    return (
        <div>
        <span>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img
                        src={user.photos.small != null ? user.photos.small : usersPhoto}
                        className={styles.userPhoto}
                    />
                </NavLink>
            </div>
            <div className={styles.UserNameButton}>
                {user.followed
                    ? <Button variant="contained" color="primary"
                              disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id);
                              }}>Unfollow</Button>
                    : <Button variant="contained" color="primary"
                              disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id);
                              }}>Follow</Button>}
            </div>
        </span>
            <span>
            <div className={styles.UserNameButton}>{user.name}</div><div>{user.status}</div>
        </span>
        </div>
    )
}
export default User;

