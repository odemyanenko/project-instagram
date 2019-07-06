import React from 'react';

import './placeInput.css';

class PlaceInput extends React.Component{
    state={
        post:''
    };
    changeHandler=(event)=>{
        this.setState({
            post: event.target.value
        })
    };
    postSubmitHandler=()=>{
        /*e.preventDefault();*/
        /*const {post} = this.state;
        this.setState({post:''});
        const smb = this.props.onTextAdded || (()=>{});
        smb(post);*/
        if(this.state.post.trim()===''){
            return;
        }
        this.props.onTextAdded(this.state.post)
    };
    render(){
        return(
            <div className="cover">
                <input className="enter"
                       type="text"
                       value={this.state.post}
                onChange={this.changeHandler}
                placeholder="enter more"/>
                <button className="addReview"
                        type="submit"
                        /*onClick={this.postSubmitHandler}*/
                    onClick={this.postSubmitHandler}
                >Post</button>
            </div>
        )
    }

}

export default PlaceInput;