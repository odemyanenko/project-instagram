import React from 'react';
import './personalPage.css';
import PhotoList from "./photoList/photoList";
import ItemAvatar from "../../itemAvatar";

export default class PersonalPage extends React.Component{
    render(){
        const className = "personalItem"
        return(
            <div className="personalPage">
                <ItemAvatar className={className}/>
            <PhotoList/>
            </div>
        )
    }
}