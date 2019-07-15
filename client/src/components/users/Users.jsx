import React from 'react';
import classes from './Users.module.scss';

let Users = (props) => {
    console.log(props.users);
    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoUrl} className={classes.userPhoto} alt=""/>
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
                    <div>{user.firstName} {user.lastName}</div>
                    <div>{user.status}</div>
                </span>
                    <span>
                    <div>{user.location.country}</div>
                    <div>{user.location.city}</div>
                </span>
                </span>
                </div>)
            }

        </div>);

};

export default Users;