const moment = require('moment/moment');
const connection = require('../config/databaseConnection');

const getDateNow = () => {
    return moment().format('DD-MM-YYYYTHH:mm:ss');
}

const createTask = async (task) => {
    const [createdTask] = await connection.then(estableConnection => 
        estableConnection.execute(
            'INSERT INTO tasks(title, description, created_at, update_date, done) VALUES (?, ?, ?, ?, ?)', 
            [task.title, task.description, getDateNow(), getDateNow(), task.done]
        )
    );

    return createdTask.insertId;
};

const getAllTasks = async () => {
    return await connection.then(estableConnection =>
        estableConnection.execute('SELECT * FROM tasks'));
};

const getTaskById = async (id) => {
    return await connection.then(estableConnection =>
        estableConnection.execute('SELECT * FROM tasks WHERE id = ?', [id]));
};

const updateTask = async (id, task) => {
    const [updatedTask] = await connection.then(estableConnection => 
        estableConnection.execute(
            'UPDATE tasks SET title = ?, description = ?, update_date = ?, done = ? WHERE id = ?', 
            [task.title, task.description, getDateNow(), task.done, id]
        )
    );

    return updatedTask;
};

const deleteTask = async (id) => {
    return await connection.then(estableConnection =>
        estableConnection.execute('DELETE FROM tasks WHERE id = ?', [id]));
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    deleteTask,
    updateTask
}