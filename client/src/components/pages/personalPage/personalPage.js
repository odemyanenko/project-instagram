import React from 'react';
import styles from './personalPage.module.scss';
import PhotoList from "./photoList/photoList";
import Item from "../../item";

export default class PersonalPage extends React.Component {
    render() {
        return (
            <div className={styles.personalPage}>
                <Item className={styles.personalItem}/>
                <PhotoList/>
            </div>
        )
    }
}