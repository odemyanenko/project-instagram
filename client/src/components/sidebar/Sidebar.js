import React from 'react';
import styles from './Sidebar.module.scss';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>

            <NavLink to="/">Back to home</NavLink>
            <NavLink to="/home">Home Page</NavLink>
            <NavLink to="/personal">Personal Page</NavLink>

        </div>
    )
};

export default Sidebar;