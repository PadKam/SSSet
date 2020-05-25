import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = (props) => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={`${s.findusers}`}>
                <NavLink to='/findusers' a>Find users</NavLink>
            </div>
            <div className={s.games}>
                <NavLink to={'/games'}>Games</NavLink>
            </div>
            <div className={`${s.setting}`}>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
            <div className={`${s.setting}`}>
                <NavLink to='/friends'>Friends</NavLink>
                <div>
                    <img src={props.friendsDate[0].imgAvatarUrl}></img>
                    <img src={props.friendsDate[1].imgAvatarUrl}></img>
                    <img src={props.friendsDate[2].imgAvatarUrl}></img>
                </div>
            </div>
        </nav>
    );
}

export default Nav;