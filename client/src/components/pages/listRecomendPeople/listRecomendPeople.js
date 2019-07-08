import React from 'react';
import ItemAvatar from "../../itemAvatar";
import './listRecomendPeople.css';

class ListRecomendPeople extends React.Component{
    state = {
        allPeople: [
            {
                avatar: 'https://static.diverseui.com/male-73.png',
                name: 'ssslslkaka',
                nickname: 'ncjfmffkfk'
            },
            {
                avatar: 'https://static.diverseui.com/female-16.jpeg',
                name: 'cmkdk',
                nickname: 'fjgjgkgk'
            },
            {
                avatar: 'https://static.diverseui.com/female-22.jpg',
                name: 'dgfhff',
                nickname: 'uritotot'
            },
        ]
    };
    renderList = (allPeople) => {
        return allPeople.map((person,i) => <ItemAvatar
            key={i}
            avatar={person.avatar}
            name={person.name}
            nickname={person.nickname}
        />)
    };

    render(){
        return(
            <div className="listWrapper">
                <h1>All people</h1>
                {this.renderList(this.state.allPeople)}
            </div>
        )
    }
};

export default ListRecomendPeople;