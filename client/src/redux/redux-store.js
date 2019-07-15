import {combineReducers, createStore} from 'redux';

import usersReducer from './../reducers/users/users-reducer';

let reducers = combineReducers(
    {
        usersPage: usersReducer
    }
);

let store = createStore(reducers);

export default store;
