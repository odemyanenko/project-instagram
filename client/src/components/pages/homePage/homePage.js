import React from 'react';
import './homePage.css';
import ItemAvatar from "../../itemAvatar";
import ImagePost from "../../imagePost";
import ItemAddPost from "../../itemAddPost"
import PostList from "../../postList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import ListLikedPeople from "../listLikedPeople/listLikedPeople";
import Avatar from "../../avatar/avatar";
import ItemName from "../../itemName/itemName";
import ItemNickname from "../../itemNickname/itemNickname";

class HomePage extends React.Component {
    maxId = 100;
    state = {
        avatar: 'https://envato-shoebox-0.imgix.net/2a41/93b3-6f8b-4f1c-8767-cd9772b4ded7/kave+310.jpg?w=500&h=278&fit=crop&crop=edges&auto=compress%2Cformat&s=fbc0d75299d7cfda0b3c60ea52ba4aaf',
        name: 'Vaca',
        nickname: 'cvbfhnjmkk',
        imagePost: 'https://envato-shoebox-0.imgix.net/2a41/93b3-6f8b-4f1c-8767-cd9772b4ded7/kave+310.jpg?w=500&h=278&fit=crop&crop=edges&auto=compress%2Cformat&s=fbc0d75299d7cfda0b3c60ea52ba4aaf',
        postList: [
            {post: '', id: 1}
        ],
        flag: true,
        color: 'yellow',
        count: 0
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
    addLike = () => {
        console.log(this.state.flag)
        this.setState({
            flag: !this.state.flag
        })
    }

    render() {
        const {flag} = this.state;
        console.log(flag)
        const color = flag === true ? 'red' : 'yellow';
        return (
            <div className="homePage">
                <div className="wrapperAvatar">
                    <Link to="/personal">{/*<ItemAvatar avatar={avatar}
                                                 name={name}
                                                 nickname={nickname}/>*/}
                        <Avatar avatar={this.state.avatar}/>
                    </Link>
                    <div className="content">
                        <ItemName name={this.state.name}/>
                        <ItemNickname nickname={this.state.nickname}/>
                    </div>
                </div>
                <div onClick={this.addLike}><ImagePost imagePost={this.state.imagePost}/></div>
                <FontAwesomeIcon icon={['fas', 'heart']}
                                 size="1x"
                                 style={{marginTop: 10, marginLeft: 40, color: color}}/>
                <span>{this.state.count} отметок "Нравиться"</span>
                <PostList postList={this.state.postList}/>
                <ItemAddPost onTextAdded={this.addPost}/>

            </div>
        )
    }
};

export default HomePage;