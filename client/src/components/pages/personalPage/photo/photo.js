import React from 'react';
import styles from './photo.module.scss';
import cx from 'classnames';
import globalStyles from './../../../../assets/global-styles/bootstrap.module.css';

const Photo = (props) => {
    return (
        <div className={cx(globalStyles["col-md-10"], globalStyles["col-lg-4"], globalStyles["mb-2"])}>
            <img className={styles["photo-image"]} alt="" src={props.src}/></div>
    )
};

export default Photo;