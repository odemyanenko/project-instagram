import React from 'react';
import classes from './Users.module.scss';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user-icon-small.png';

let Users = (props) => {
    if (props.users.length === 0) {

        // props.setUsers([
        //     {
        //         id: 1,
        //         photoUrl: 'http://tomorrowslawyer.org/wp-content/uploads/2017/01/dmytro-kukhnyuk_800x800_acf_cropped.jpg',
        //         followed: false,
        //         firstName: "Dmytro",
        //         lastName: "Sydoriv",
        //         status: "I'm a boss",
        //         location: {city: "Kyiv", country: "Ukraine"}
        //     },
        //     {
        //         id: 2,
        //         photoUrl: 'http://politika-v-rashke.ru/wp-content/uploads/2018/09/vasya-voskres.jpg',
        //         followed: false,
        //         firstName: "Vasia",
        //         lastName: "Pupkin",
        //         status: "I'm available",
        //         location: {city: "Dnipro", country: "Ukraine"}
        //     },
        //     {
        //         id: 3,
        //         photoUrl: 'https://upload.wikimedia.org/wikipedia/uk/6/68/Poddubny.jpg',
        //         followed: true,
        //         firstName: "Ivan",
        //         lastName: "Ivanov",
        //         status: "Hey, hello",
        //         location: {city: "Toronto", country: "Canada"}
        //     },
        //     {
        //         id: 4,
        //         photoUrl: 'https://upload.wikimedia.org/wikipedia/uk/6/68/Poddubny.jpg',
        //         followed: true,
        //         firstName: "Petro",
        //         lastName: "Petrov",
        //         status: "How are you?",
        //         location: {city: "Lviv", country: "Ukraine"}
        //     },
        //     {
        //         id: 5,
        //         photoUrl: 'https://upload.wikimedia.org/wikipedia/uk/6/68/Poddubny.jpg',
        //         followed: false,
        //         firstName: "Sashko",
        //         lastName: "Shushko",
        //         status: "What's your mood?",
        //         location: {city: "Warsaw", country: "Poland"}
        //     },
        //     {
        //         id: 6,
        //         photoUrl: 'https://upload.wikimedia.org/wikipedia/uk/6/68/Poddubny.jpg',
        //         followed: true,
        //         firstName: "Paraska",
        //         lastName: "Paraskiva",
        //         status: "I'm pretty",
        //         location: {city: "Boston", country: "US"}
        //     },
        // ]);

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        // axios.get("http://localhost:8000/api/users")
            .then(response => {
                props.setUsers(response.data.items);
                // props.setUsers(response.data.users);
            });
    }

    return (
        <div>
            {
                props.users.map(user =>
                    <div key={user.id}>
                         <span>
                            <div>
                                {/*<img src={user.photoUrl} className={classes.userPhoto} alt=""/>*/}
                                <img src={ user.photos.small != null ? user.photos.small : userPhoto } className={classes.userPhoto} alt=""/>
                            </div>
                            <div>
                                {
                                    user.followed
                                        ? <button onClick={() => (props.unFollow(user.id))}>Follow</button>
                                        : <button onClick={() => (props.follow(user.id))}>Unfollow</button>
                                }

                            </div>
                        </span>

                        <span>
                             <span>
                                {/*<div>{user.firstName} {user.lastName}</div>*/}
                                <div>{user.name}</div>
                                 <div>{user.status}</div>
                             </span>
                             <span>
                                <div>{"user.location.country"}</div>
                                <div>{"user.location.city"}</div>
                            </span>
                        </span>
                    </div>)
            }

        </div>);

};

export default Users;