import {
    createUser as createUserDAO,
    getUserById as getUserByIdDAO,
    getUserByEmail as getUserByEmailDAO
} from "../dao/UserDAO";

export function createUser(data, callback) {
    createUserDAO(data, callback);
}

export function loginUser(data, callback) {
    const email = data.email;
    const password = data.password;
    getUserByEmailDAO(email, callback);
}

export function getUserById(id, callback) {
    getUserByIdDAO(id, callback);
}
