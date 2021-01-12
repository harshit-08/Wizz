import React from 'react'
import '../styles/navbar.css'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { Avatar } from '@material-ui/core';
import profilePic from '../images/profile.PNG'
import Paragraph from './Paragraph';

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navber__menu__wrapper">
                    <MenuRoundedIcon className="navbar__menu" />
                </div>
                <Paragraph text="Hi, Martin" style="navbar__greeting" />
                <Avatar src={profilePic} className="navbar__avatar" />
            </div>
        </>
    )
}

export default Navbar
