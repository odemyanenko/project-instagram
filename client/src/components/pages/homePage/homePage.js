import React from 'react';
import './homePage.css';
import Item from "../../item";
import Avatar from "../../avatar";
import PlaceInput from "../../placeInput"
import PostList from "../../postList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PhotoList from "../personalPage/photoList/photoList";

class HomePage extends React.Component {
    state = {
        text: []
    };
    textAddedHandler = (post) => {
        this.setState(prevState => {
            return {
                text: prevState.text.concat(post)

            }
        })
    };

    render() {
        const posts = this.state.text.map((post, i) => (
            <PostList
                key={i} post={post}/>
        ));
        return (
            <div className="homePage">
                <Item/>
                <Avatar/>
                <a className="text-dark mx-2" href=""><FontAwesomeIcon icon={['fas', 'heart']} size="1x"/></a>

                <PostList>{posts}</PostList>
                <PlaceInput onTextAdded={this.textAddedHandler}/>

            </div>
        )
    }
};

export default HomePage;