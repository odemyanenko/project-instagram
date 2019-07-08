import React from 'react';
import './photo.css';

const Photo =(props)=> {
    return (
        <div className="col-md-10 col-lg-4 mb-2">
            <img className="photo-image" src={props.src}/></div>
    )
}
export default Photo;