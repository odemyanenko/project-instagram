import React from 'react';
import './header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Icon = () => {
    return (
        <a className="text-dark mx-2" href=""><FontAwesomeIcon icon={['fab', 'instagram']} size="1x"/></a>
    )
}
const Header =()=>{
    return (
        <div className="header-container">
        <Icon/>
        <h1>Instagram</h1>
            <Icon/>
            <Icon/>
            <Icon/>
            </div>
    )
}
export default Header;