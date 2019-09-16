import React from 'react';
import s from './Sidebar.module.css';




const Friends = (props) =>{



	return(
			<div className={s.friends}>
				<img className={s.avaUsers} src = {props.avaUser} />

			</div>

	)};
export default Friends;