const connection = require('../config/databaseConnection');

const getAllUsers = async () => {
    return await connection.then(estableConnection => 
        estableConnection.execute('SELECT * FROM users'));
};

const createUser = async (user) => {
    const [createdUser] = await connection.then(estableConnection => 
        estableConnection.execute(
            'INSERT INTO users(name, password) VALUES (?, ?)',
            [user.name, user.password]));
    return {
        id: createdUser.insertId,
        name: user.name,
        password: user.password
    };
};

const getUserById = async (id) => {
    return await connection.then(estableConnection =>
        estableConnection.execute('SELECT * FROM users WHERE id = ?', [id]));
};

module.exports = {
    getAllUsers,
    createUser,
    getUserById
}