import React, { useState } from 'react'
import '../styles/navbar.css'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { Avatar } from '@material-ui/core';
import profilePic from '../images/profile.PNG'
import Paragraph from './Paragraph';
import { auth } from '../firebase'

function Navbar() {

    const [name, setName] = useState("")
    const [profileURL, setProfileURL] = useState("")


    auth.onAuthStateChanged(function (user) {
        if (user) {
            setName(user.displayName);
            setProfileURL(user.photoURL)
        } else {
            setName("Guest")
            console.log('User not found');
        }
    });
    const greeting = "Hi, " + name;

    return (
        <>
            <div className="navbar__wrapper">
                <div className="navbar">
                    <div className="navber__menu__wrapper">
                        <MenuRoundedIcon
                            className="navbar__menu"
                        />
                        <Paragraph
                            text={greeting}
                            style="navbar__greeting"
                        />
                    </div>
                    <Avatar
                        src={profileURL}
                        className="navbar__avatar"
                    />
                </div>
            </div>
            <div className="navbar__desc">
                <Paragraph
                    text="Are you ready to create Batch & Assignments ?"
                    style="navbar__p1"
                />
            </div>
        </>
    )
}

export default Navbar
