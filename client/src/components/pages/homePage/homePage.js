import React from 'react';
import './homePage.css';
import Item from "../../item";
import Avatar from "../../avatar";
import ItemAddPost from "../../itemAddPost"
import PostList from "../../postList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PhotoList from "../personalPage/photoList/photoList";

class HomePage extends React.Component {
    maxId = 100;
    state ={
        postList: [
        {post: 'rqqqqaaswesssss', id: 1},
        {post: 'errrrr', id: 2},
        {post: 'sdddff', id: 3},
    ]
};
    addPost = (text) => {
        const newPost = {
            post: text,
            id: this.maxId++
        };
        this.setState(({postList})=>{
            const newArr =[
                ...postList,
                newPost
            ];
            return {
                postList:newArr
            };
        })
    };

    render() {

        return (
            <div className="homePage">
                <Item/>
                <Avatar/>
                <a className="text-dark mx-2" href=""><FontAwesomeIcon icon={['fas', 'heart']} size="1x"/></a>

                <PostList postList={this.state.postList}/>
                <ItemAddPost onTextAdded={this.addPost}/>
            </div>
        )
    }
};

export default HomePage;