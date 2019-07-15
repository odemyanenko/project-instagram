import React from 'react';
import styles from './itemAddPost.module.scss';

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
            post: ''
        });
    };

    render() {
        return (
            <form className={styles.cover} onSubmit={this.onSubmit}>
                <input className={styles.enter}
                       type="text"
                       value={this.state.post}
                       onChange={this.changeHandler}
                       placeholder="enter more"/>
                <button className={styles.addReview}
                        type="submit"
                >Add Your Post
                </button>
            </form>
        )
    }

}

export default ItemAddPost;