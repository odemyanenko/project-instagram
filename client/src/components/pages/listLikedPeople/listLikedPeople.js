import React from 'react';
import ItemAvatar from "../../itemAvatar";


class ListLikedPeople extends React.Component {
    state = {
        likedPeople: [
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
    renderList = (likedPeople) => {
        return likedPeople.map(person => <ItemAvatar
            avatar={person.avatar}
            name={person.name}
            nickname={person.nickname}/>)
    };

    render() {
        return (
            <div>
                <h1>Liked People</h1>
                {this.renderList(this.state.likedPeople)}
            </div>
        )
    }
};
export default ListLikedPeople;