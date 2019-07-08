import React from 'react';
import './personalPage.css';
import PhotoList from "./photoList/photoList";
import Item from "../../item";

export default class PersonalPage extends React.Component{
    render(){
        const className = "personalItem"
        return(
            <div className="personalPage">
                <Item className={className}/>
            <PhotoList/>
            </div>
        )
    }
}