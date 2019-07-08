import React from 'react';

import './postList.css';
import PostItem from '../postItem';

const PostList = ({postList}) => {
    const elements = postList.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <div key={id}>
                <PostItem {...itemProps}/>
            </div>
        );
    });
    return (
        <ul>{elements}</ul>
    )
};
export default PostList;