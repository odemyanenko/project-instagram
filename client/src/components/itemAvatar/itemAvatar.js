import React from 'react';
import './itemAvatar.css';
import Button from "../button/button";

export default class ItemAvatar extends React.Component{
render(){
    const content = <ItemView avatar={this.props}/>;
    const className = "personal-container";
    return(
        <div className={className}>
            {content}
        </div>
    )
}
}
const ItemView =(props)=> {
    return (
    <React.Fragment>
        <img className="avatarImg"
            src={props.avatar}/>
        <div className="wrapper">
        <h2 className="title">{props.name}</h2>
        <p className="nickname">{props.nickname}</p>
            <Button/>
        </div>
    </React.Fragment>
    )
}