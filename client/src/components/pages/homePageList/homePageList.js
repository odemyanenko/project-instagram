import React from 'react';
import HomePage from "../homePage";

class HomePageList extends React.Component {
    state = {
        personalPage: [
            {
                postList: {}
            }
        ]
    };
    renderList = (personalPage) => {
        return personalPage.map(page => <HomePage/>)
    };

    render() {
        return (
            <div>
                {this.renderList(this.state.personalPage)}
            </div>
        )
    }
}

export default HomePageList;
