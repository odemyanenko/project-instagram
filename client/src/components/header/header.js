import React from 'react';
import './header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons/faInfoCircle";
import {faHeart} from "@fortawesome/free-solid-svg-icons/faHeart";
import SearchPanel from "../searchPanel";

const Icon = (props) => {
    return (
        <a className="text-dark mx-2" href=""><FontAwesomeIcon icon={props.icon} size="1x"/></a>
    )
};
const InstagramHeader = () => {
    return <h1 className="title mr-3 ml-3 ">Instagram</h1>;
}
const Header = () => {
    return (
        <div className="header d-flex">
            <Icon icon={faInfoCircle}/>
            <InstagramHeader/>
            <SearchPanel/>
            <Icon icon={faHeart}/>
            <Icon icon="adjust"/>
            <Icon icon="circle"/>
        </div>
    )
}
export default Header;