import React from 'react';

class PostItem extends React.Component{
    render() {
        const {post} = this.props;
        return (
            <span>{post}
            </span>
        )
    }
}

export default PostItem;