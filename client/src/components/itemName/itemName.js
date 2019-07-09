import React from 'react';

const ItemName=(props)=>{
    const style = {
        fontSize:'20px',
        color: '#3c4560',
        margin: 0
    };
    return(
        <h1 style={style}>{props.name}</h1>
    )
};
export default ItemName;