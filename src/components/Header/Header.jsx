import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const Header = (props) =>{
	return <header className = {s.header}>
			<img src = 'https://static.rfstat.com/renderforest/images/v2/landing-pics/logo_landing/ma5.png'/>
			<div className={s.loginBlock}>
				{props.isAuth
					? <div>{props.login} - <Button onClick={props.logout}  variant="contained" color="primary">
						Log out
					</Button></div>
					: <NavLink to = {'/login'}>Login</NavLink>}
			</div>
	</header>

	
};


export default Header;