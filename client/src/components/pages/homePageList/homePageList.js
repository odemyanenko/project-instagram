import React from 'react';

import './homePageList.css';
import HomePage from "../homePage";
import ListRecomendPeople from "../listRecomendPeople/listRecomendPeople";
import ListLikedPeople from "../listLikedPeople/listLikedPeople";

class HomePageList extends React.Component{
    state ={
        personalPage: [
            { postList: {
                    avatar: 'https://envato-shoebox-0.imgix.net/2a41/93b3-6f8b-4f1c-8767-cd9772b4ded7/kave+310.jpg?w=500&h=278&fit=crop&crop=edges&auto=compress%2Cformat&s=fbc0d75299d7cfda0b3c60ea52ba4aaf',
                    nickname: 'Vasa',
                    name: 'Pupkin'},
            imagePost: 'https://envato-shoebox-0.imgix.net/2a41/93b3-6f8b-4f1c-8767-cd9772b4ded7/kave+310.jpg?w=500&h=278&fit=crop&crop=edges&auto=compress%2Cformat&s=fbc0d75299d7cfda0b3c60ea52ba4aaf',
            message: 'hi',
            liked:'3',
            count:'6'},

            { postList: {
                    avatar: 'https://envato-shoebox-0.imgix.net/2a41/93b3-6f8b-4f1c-8767-cd9772b4ded7/kave+310.jpg?w=500&h=278&fit=crop&crop=edges&auto=compress%2Cformat&s=fbc0d75299d7cfda0b3c60ea52ba4aaf',
                    nickname: 'Vasa',
                    name: 'Pupkin'},
                imagePost: 'https://envato-shoebox-0.imgix.net/2a41/93b3-6f8b-4f1c-8767-cd9772b4ded7/kave+310.jpg?w=500&h=278&fit=crop&crop=edges&auto=compress%2Cformat&s=fbc0d75299d7cfda0b3c60ea52ba4aaf',
                message: 'hi',
                liked:'3',
                count:'6'},

            { postList: {
                    avatar: 'https://envato-shoebox-0.imgix.net/2a41/93b3-6f8b-4f1c-8767-cd9772b4ded7/kave+310.jpg?w=500&h=278&fit=crop&crop=edges&auto=compress%2Cformat&s=fbc0d75299d7cfda0b3c60ea52ba4aaf',
                    nickname: 'Vasa',
                    name: 'Pupkin'},
                imagePost: 'https://envato-shoebox-0.imgix.net/2a41/93b3-6f8b-4f1c-8767-cd9772b4ded7/kave+310.jpg?w=500&h=278&fit=crop&crop=edges&auto=compress%2Cformat&s=fbc0d75299d7cfda0b3c60ea52ba4aaf',
                message: 'hi',
                liked:'3',
                count:'6'},
        ]
    };
    renderList = (personalPage)=>{
        return personalPage.map((page, i)=><HomePage
            key={i}
        avatar={page.avatar}
        name={page.nickname}
        nickname={page.nickname}
        imagePost={page.imagePost}
        message={page.message}
        liked={page.liked}
        count={page.count}

        />)
    };
    render(){
        return(
            <div>
                {this.renderList(this.state.personalPage)}

                <ListLikedPeople/>

                <ListRecomendPeople/>
            </div>
        )
    }
};
export default HomePageList;
