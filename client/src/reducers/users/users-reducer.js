const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
        {id: 1, photoUrl: 'http://tomorrowslawyer.org/wp-content/uploads/2017/01/dmytro-kukhnyuk_800x800_acf_cropped.jpg', followed: false, firstName: "Dmytro", lastName: "Sydoriv", status: "I'm a boss", location: { city: "Kyiv", country: "Ukraine"}},
        {id: 2, photoUrl: 'http://politika-v-rashke.ru/wp-content/uploads/2018/09/vasya-voskres.jpg', followed: false, firstName: "Vasia", lastName: "Pupkin", status: "I'm available", location: { city: "Dnipro", country: "Ukraine"}},
        {id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/uk/6/68/Poddubny.jpg', followed: true, firstName: "Ivan", lastName: "Ivanov", status: "Hey, hello", location: { city: "Toronto", country: "Canada"}},
        {id: 4, photoUrl: 'https://upload.wikimedia.org/wikipedia/uk/6/68/Poddubny.jpg', followed: true, firstName: "Petro", lastName: "Petrov", status: "How are you?", location: { city: "Lviv", country: "Ukraine"}},
        {id: 5, photoUrl: 'https://upload.wikimedia.org/wikipedia/uk/6/68/Poddubny.jpg', followed: false,firstName: "Sashko", lastName: "Shushko", status: "What's your mood?", location: { city: "Warsaw", country: "Poland"}},
        {id: 6, photoUrl: 'https://upload.wikimedia.org/wikipedia/uk/6/68/Poddubny.jpg', followed: true,firstName: "Paraska", lastName: "Paraskiva", status: "I'm pretty", location: { city: "Boston", country: "US"}},
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return (
                {
                    ...state,
                    users: state.users.map(user => {
                        if (user.id === action.userId)
                            return {...user, followed: true};
                        return user;

                    })
                }
            );
        }
        case UNFOLLOW: {
            return (
                {
                    ...state,
                    users: state.users.map(user => {
                        if (user.id === action.userId)
                            return {...user, followed: false};
                        return user;

                    })
                }
            );
        }
        case SET_USERS: {
            return (
                {
                    ...state,
                    users: [...state.users, ...action.users]
                }
            );
        }
        default:
            return state;
    }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unFollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });

export default usersReducer;