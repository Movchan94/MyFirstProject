import React from 'react';
import s from './Navbar.module.css';
import {Link, NavLink} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import {Menu} from "semantic-ui-react";


export default class Navbar extends React.Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu inverted pointing vertical>
                <Menu.Item
                    name='Profile'
                    onClick={this.handleItemClick}
                    as = {NavLink}
                    to='/profile'
                    color = 'olive'
                    icon = 'home'
                />

                <Menu.Item
                    name='Messages'
                    onClick={this.handleItemClick}
                    as = {NavLink}
                    to='/dialogs'
                    color = 'olive'
                    icon = 'envelope'
                />
                <Menu.Item
                    name='Users'
                    onClick={this.handleItemClick}
                    as = {NavLink}
                    to='/users'
                    color = 'olive'
                    icon = 'user'
                />
                <Menu.Item
                    name='News'
                    onClick={this.handleItemClick}
                    as = {NavLink}
                    to='/news'
                    color = 'olive'
                    icon = 'bell'
                />
                <Menu.Item
                    name='Music'
                    onClick={this.handleItemClick}
                    as = {NavLink}
                    to='/music'
                    color = 'olive'
                    icon = 'music'
                />
                <Menu.Item
                    name='Settings'
                    onClick={this.handleItemClick}
                    as = {NavLink}
                    to='/Settings'
                    color = 'olive'
                    icon = 'setting'
                />
            </Menu>
        )

    }
}


