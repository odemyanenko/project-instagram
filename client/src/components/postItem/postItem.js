import React from 'react';
import './postItem.css';

class PostItem extends React.Component{
    render() {
        const {post} = this.props;
        return (
            <span>{post}
            </span>
        )
    }
};
export default PostItem;