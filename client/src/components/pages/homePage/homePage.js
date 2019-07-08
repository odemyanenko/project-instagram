import React from 'react';
import './homePage.css';
import Item from "../../item";
import Avatar from "../../avatar";
import ItemAddPost from "../../itemAddPost"
import PostList from "../../postList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
    maxId = 100;
    state ={
        postList: [
        {post: '', id: 1}
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
                <Link to="/personal"><Item/></Link>
                <Avatar/>
                <FontAwesomeIcon icon={['fas', 'heart']}
                                 size="1x"
                                 style={{marginTop:10, marginLeft:40}}/>
                <PostList postList={this.state.postList}/>
                <ItemAddPost onTextAdded={this.addPost}/>
            </div>
        )
    }
};

export default HomePage;