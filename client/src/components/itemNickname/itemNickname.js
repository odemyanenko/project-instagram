import React from 'react';

const ItemNickname = (props) => {
    const style = {
        fontSize: '16px',
        color: '#b8bece',
        fontWeight: 500,
    }
    return (
        <p style={style}>{props.nickname}</p>
    )
};

export default ItemNickname;