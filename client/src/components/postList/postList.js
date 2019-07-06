import React from 'react';

import './postList.css';
import PlaceInput from "../placeInput";

const PostList=props=> {
   /* */
        return (
            <div className="list">{props.post}</div>
        )
};
export default PostList;