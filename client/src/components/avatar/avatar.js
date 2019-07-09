import React from 'react';

const Avatar=(props)=>{
    const style ={
        width: '44px',
    height: '44px',
    borderRadius: '22px',
    marginRight: '10px'
    }
    return <img src={props.avatar} style={style}/>
};
export default Avatar;