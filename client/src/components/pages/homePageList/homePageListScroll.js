import React from 'react';

import './homePageList.css';
import HomePage from "../homePage";
import ListRecomendPeople from "../listRecomendPeople";
import ListLikedPeople from "../listLikedPeople";
import InfiniteScroll from 'react-simple-infinite-scroll';

class HomePageListScroll extends React.Component {
    state = {
        personalPage: [
            {
                postList: {
                    avatar: 'https://envato-shoebox-0.imgix.net/2a41/93b3-6f8b-4f1c-8767-cd9772b4ded7/kave+310.jpg?w=500&h=278&fit=crop&crop=edges&auto=compress%2Cformat&s=fbc0d75299d7cfda0b3c60ea52ba4aaf',
                    nickname: 'Vasa',
                    name: 'Pupkin'
                },
                imagePost: 'https://envato-shoebox-0.imgix.net/2a41/93b3-6f8b-4f1c-8767-cd9772b4ded7/kave+310.jpg?w=500&h=278&fit=crop&crop=edges&auto=compress%2Cformat&s=fbc0d75299d7cfda0b3c60ea52ba4aaf',
                message: 'hi',
                liked: '3',
                count: '6'
            },

            {
                postList: {
                    avatar: 'https://envato-shoebox-0.imgix.net/2a41/93b3-6f8b-4f1c-8767-cd9772b4ded7/kave+310.jpg?w=500&h=278&fit=crop&crop=edges&auto=compress%2Cformat&s=fbc0d75299d7cfda0b3c60ea52ba4aaf',
                    nickname: 'Vasa',
                    name: 'Pupkin'
                },
                imagePost: 'https://envato-shoebox-0.imgix.net/2a41/93b3-6f8b-4f1c-8767-cd9772b4ded7/kave+310.jpg?w=500&h=278&fit=crop&crop=edges&auto=compress%2Cformat&s=fbc0d75299d7cfda0b3c60ea52ba4aaf',
                message: 'hi',
                liked: '3',
                count: '6'
            },

            {
                postList: {
                    avatar: 'https://envato-shoebox-0.imgix.net/2a41/93b3-6f8b-4f1c-8767-cd9772b4ded7/kave+310.jpg?w=500&h=278&fit=crop&crop=edges&auto=compress%2Cformat&s=fbc0d75299d7cfda0b3c60ea52ba4aaf',
                    nickname: 'Vasa',
                    name: 'Pupkin'
                },
                imagePost: 'https://envato-shoebox-0.imgix.net/2a41/93b3-6f8b-4f1c-8767-cd9772b4ded7/kave+310.jpg?w=500&h=278&fit=crop&crop=edges&auto=compress%2Cformat&s=fbc0d75299d7cfda0b3c60ea52ba4aaf',
                message: 'hi',
                liked: '3',
                count: '6'
            },
        ],
        isLoading: true,
        cursor: 0
    };
    componentDidMount() {
        // do some paginated fetch
        this.loadMore()
    };
    loadMore = () => {
        this.setState({ isLoading: true, error: undefined })
        fetch(`https://api.example.com/v1/items?from=${this.state.cursor}`)
            .then(res => res.json())
            .then(
                res => {
                    this.setState(state => ({
                        items: [...state.items, ...res.items],
                        cursor: res.cursor,
                        isLoading: false
                    }))
                },
                error => {
                    this.setState({ isLoading: false, error })
                }
            )
    }
    render() {
        return (
            <div>
               <InfiniteScroll
                    throttle={100}
                    threshold={300}
                    isLoading={this.state.isLoading}
                    hasMore={!!this.state.cursor}
                    onLoadMore={this.loadMore}
                >
                    {this.state.personalPage.length > 0
                        ? this.state.personalPage.map((person,i) =>
                            <HomePage
                                key={i}
                                avatar={person.avatar}
                                name={person.nickname}
                                nickname={person.nickname}
                                imagePost={person.imagePost}
                                message={person.message}
                                liked={person.liked}
                                count={person.count}
                            />)
                        : null}
                </InfiniteScroll>
                {/*{this.state.isLoading && (
                    <MyLoadingState />
                )}*/}

                <ListLikedPeople/>

                <ListRecomendPeople/>
            </div>
        )
    }
};
export default HomePageListScroll;
