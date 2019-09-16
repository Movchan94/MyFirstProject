import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import Message from "../Dialogs/Message/Message";



const Sidebar = (props) =>{



	return(
		<div className =  {s.sidebar}>
			<h1>Friends</h1>
			<div className={s.friends}>

			</div>


		</div>
	)};
export default Sidebar;