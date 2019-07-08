import React from 'react';

import './itemAddPost.css';

class ItemAddPost extends React.Component {
    state = {
        post: ''
    };
    changeHandler = (event) => {
        this.setState({
            post: event.target.value
        })
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onTextAdded(this.state.post);
        this.setState({
            post:''
        });
    };

    render() {
        return (
            <form className="cover" onSubmit={this.onSubmit}>
                <input className="enter"
                       type="text"
                       value={this.state.post}
                       onChange={this.changeHandler}
                       placeholder="enter more"/>
                <button className="addReview"
                        type="submit"
                >Post
                </button>
            </form>
        )
    }

}

export default ItemAddPost;