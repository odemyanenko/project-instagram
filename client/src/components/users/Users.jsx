import React from 'react';
import classes from './Users.module.scss';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user-icon-small.png';

let Users = (props) => {
    if (props.users.length === 0) {

        axios.get("http://localhost:8000/api/users")
            .then(response => {
                props.setUsers(response.data.users);
            });
    }

    return (
        <div>
            {

                props.users.map(user =>
                    <div key={user.id}>
                         <span>
                            <div>
                                <img src={ user.photoUrls.small != null ? user.photoUrls.small : userPhoto } className={classes.userPhoto} alt=""/>
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