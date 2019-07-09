import React from 'react';
import './itemAvatar.css';
import Button from "../button/button";
import ItemName from "../itemName/itemName";
import ItemNickname from "../itemNickname/itemNickname";
import Avatar from "../avatar/avatar";


const ItemAvatar = (props) => {
    return (
        <div className="personal-container">
            <Avatar avatar={props.avatar}/>
            <div className="wrapper">
            <ItemName name={props.name}/>
            <ItemNickname nickname={props.nickname}/>
            <Button/>
            </div>
        </div>
    )
};
export default ItemAvatar;
/*
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
}*/


