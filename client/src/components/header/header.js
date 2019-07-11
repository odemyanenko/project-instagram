import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './header.module.scss';
import SearchPanel from "../searchPanel";
import cx from 'classnames';
import globalStyles from './../../assets/global-styles/bootstrap.module.css';

const Icon = (props) => {
    return (
        <a className={cx(globalStyles["text-dark"], globalStyles["mx-2"])} href="">
            <FontAwesomeIcon icon={props.icon} size="2x"/>
        </a>
    )
};

const InstagramHeader = () => {
    return (
        <h1 className={cx(styles.title, globalStyles["mr-3"], globalStyles["ml-3"])}> Instagram </h1>
    )
};

const Header = () => {
    return (
        <div className={cx(styles.header, globalStyles["d-flex"])}>
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
};

export default Header;