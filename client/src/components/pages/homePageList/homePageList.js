import React from 'react';

import './homePageList.css';
import HomePage from "../homePage";
import Photo from "../personalPage/photoList/photoList";

class HomePageList extends React.Component{
    state ={
        personalPage: [
            {postList:{

                }}
        ]
    };
    renderList = (personalPage)=>{
        return personalPage.map(page=><HomePage />)
    };
    render(){
        return(
            <div>
                {this.renderList(this.state.personalPage)}
            </div>
        )
    }
};
export default HomePageList;
