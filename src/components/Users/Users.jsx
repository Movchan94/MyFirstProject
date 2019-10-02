import React from 'react';
import styles from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 'user_1',
                    photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz6UZjQ2K19UO-WC51BmuO3RbyZG0GQPYJYmGYTTna18i1d2Lx',
                    followed: false,
                    name: 'Vasya Pupkin',
                    status: 'hi!',
                    location: {country: 'Ukraine', city: 'Dnipro'}
                },
                {
                    id: 'user_2',
                    photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz6UZjQ2K19UO-WC51BmuO3RbyZG0GQPYJYmGYTTna18i1d2Lx',
                    followed: true,
                    name: 'Elena Kozlova',
                    status: 'hi world!',
                    location: {country: 'Czech Republic', city: 'Praha'}
                },
                {
                    id: 'user_3',
                    photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz6UZjQ2K19UO-WC51BmuO3RbyZG0GQPYJYmGYTTna18i1d2Lx',
                    followed: false,
                    name: 'Stew Cook',
                    status: 'hi!',
                    location: {country: 'USA', city: 'LA'}
                }
            ]
        )

    }


    return <div>
        {
            props.users.map(u => <div key={u.id}>
			<span>
				<div>
					<img src={u.photoURL} className={styles.usersPhoto}/>
				</div>
				<div>
					{u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}

				</div>
			</span>
                <span>
				<div>{u.name}</div><div>{u.status}</div>
			</span>
                <span>
				<div>
					{u.location.country}
				</div>
				<div>{u.location.city}
				</div>
			</span>
            </div>)
        }
    </div>
}


    export default Users;