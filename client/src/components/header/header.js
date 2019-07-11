import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './header.css';
import SearchPanel from "../searchPanel";

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
            <Icon icon={['fab', 'instagram']}/>
            <InstagramHeader/>
            <SearchPanel/>
            <Icon icon={['fas', 'caret-down']}/>
            <Icon icon={['far', 'compass']}/>
            <Icon icon={['far', 'heart']}/>
            <Icon icon={['fas', 'heart']}/>
            <Icon icon={['far', 'user']}/>
            <Icon icon={['far', 'comment']}/>

            <Icon icon={['far', 'share-square']}/>
            <Icon icon={['far', 'bookmark']}/>
            <Icon icon={['fas', 'user-tag']}/>
            <Icon icon={['fas', 'th-list']}/>
            <Icon icon={['fas', 'ellipsis-h']}/>
        </div>
    )
}
export default Header;