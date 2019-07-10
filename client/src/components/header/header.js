//npm i -S @fortawesome/free-solid-svg-icons
//npm i -S @fortawesome/free-light-svg-icons

import React from 'react';
import './header.css';

import SearchPanel from "../searchPanel";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faCompass, faHeart, faUser, faComment, faShareSquare, faBookmark} from '@fortawesome/free-regular-svg-icons';
import {faCaretDown, faUserTag, faThList, faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';

const Icon = (props) => {
    return (
        <a className="text-dark mx-2" href="">
            <FontAwesomeIcon icon={props.icon} size="1x"/>
        </a>
    )
};

const InstagramHeader = () => {
    return (
        <h1 className="title mr-3 ml-3 "> Instagram </h1>
    )
};

const Header = () => {
    return (
        <div className="header d-flex">
            <Icon icon={faInstagram}/>
            <InstagramHeader/>
            <SearchPanel/>
            <Icon icon={faCaretDown}/>
            <Icon icon={faCompass}/>
            <Icon icon={faHeart}/>
            <Icon icon={['fas', 'heart']}/>
            <Icon icon={faUser}/>
            <Icon icon={faComment}/>
            <Icon icon={faShareSquare}/>
            <Icon icon={faBookmark}/>
            <Icon icon={faUserTag}/>
            <Icon icon={faThList}/>
            <Icon icon={faEllipsisH}/>
        </div>
    )
}
export default Header;