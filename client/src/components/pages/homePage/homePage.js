import React from 'react';
import styles from './homePage.module.scss';
import Item from "../../item";
import Avatar from "../../avatar";
import ItemAddPost from "../../itemAddPost"
import PostList from "../../postList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

class HomePage extends React.Component {
    maxId = 100;
    state = {
        postList: [
            {post: 'Hi, how are you?', id: 1},
            {post: 'HaHaha', id: 2},
            {post: 'Hello!', id: 3},
            {post: 'BlaBla', id: 4},
            {post: 'XeXe', id: 6}
        ]
    };
    addPost = (text) => {
        const newPost = {
            post: text,
            id: this.maxId++
        };
        this.setState(({postList}) => {
            const newArr = [
                ...postList,
                newPost
            ];
            return {
                postList: newArr
            };
        })
    };

    render() {

        return (
            <div className={styles.homePage}>
                <NavLink to="/personal"><Item/></NavLink>
                <Avatar/>
                <FontAwesomeIcon icon={['fas', 'heart']}
                                 size="1x"
                                 style={{marginTop: 10, marginLeft: 40}}/>
                <PostList postList={this.state.postList}/>
                <ItemAddPost onTextAdded={this.addPost}/>
            </div>
        )
    }
}

export default HomePage;