import React from 'react';

import './postList.css';
import PostItem from '../postItem';

const PostList = ({postList}) => {
    const elements = postList.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id}>
                <PostItem {...itemProps}/>
            </li>
        );
    });
    return (
        <ul>{elements}</ul>
    )
};
export default PostList;