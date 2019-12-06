import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import styles from "./Users.module.css";


let Users = ({currentPage, onPageChanged, totalUserCount, pageSize, users, ...props}) => {
    return (
        <div className={styles.Paginator}>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalUserCount={totalUserCount}
                pageSize={pageSize}
            />
            {users.map(u =>
                <div className={styles.UsersCard}>
                    <User
                        key={u.id}
                        user={u}
                        followingInProgress={props.followingInProgress}
                        unfollow={props.unfollow}
                        follow={props.follow}
                    />
                </div>
            )
            }
        </div>
    )
}

export default Users;

