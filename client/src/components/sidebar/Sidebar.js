import React from 'react';
import classes from './Sidebar.module.scss';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className={classes.sideBar}>

            <NavLink to="/" className={classes.navLink}>Back to home</NavLink>
            <NavLink to="/home" className={classes.navLink}>Home Page</NavLink>
            <NavLink to="/personal" className={classes.navLink}>Personal Page</NavLink>
            <NavLink to="/users" className={classes.navLink}>Users</NavLink>

        </div>
    )
};

export default Sidebar;