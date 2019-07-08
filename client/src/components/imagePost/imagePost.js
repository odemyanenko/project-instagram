import React from 'react';
import './imagePost.css';
const ImagePost=(props)=>{
    return(
    <img className="image" src={props.imagePost}/>
    )
};
export default ImagePost;