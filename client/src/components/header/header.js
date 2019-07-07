import React from 'react';
import './header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons/faInfoCircle";
import {faHeart} from "@fortawesome/free-solid-svg-icons/faHeart";

const Icon = (props) => {
    return (
        <a className="text-dark mx-2" href=""><FontAwesomeIcon icon={props.icon} size="1x"/></a>
    )
}
const Header =()=>{
    return (
        <div className="header-container">
        <Icon icon={faInfoCircle}/>
        <h1>Instagram</h1>
            <Icon icon={faHeart}/>
            <Icon icon="adjust"/>
            <Icon icon="circle"/>
            </div>
    )
}
export default Header;