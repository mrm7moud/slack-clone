import React from 'react'
import './Header.css'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <div className="header">
            <div className='header__left'>
                {/*Avatars for logged in user alt={user?.displayName} src={user?.photoURL} */}
                <Avatar className="header__avatar">

                </Avatar>
                {/*Time icon */}
                <AccessTimeIcon />    
            </div>
            <div className='header__search'>
                {/*Search icon */}
                <SearchIcon />
                {/*input */}
                <input placeholder="Search on Slack" />
            </div>
            <div className='header__right'>
                {/*help icon */}
                <HelpOutlineIcon />
            </div>         
        </div>
    )
}

export default Header
