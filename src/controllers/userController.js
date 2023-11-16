const userModel = require('../models/userModel');
const userService = require('../services/userService');

const getAllUsers = async (_req, res) => {
    const [user] = await userModel.getAllUsers();
    return res.status(200).json(user);
};

const createUser = async (req, res) => {
    return res.status(201).json(await userModel.createUser(req.body));
};

const getUserById = async (req, res) => {
    const [user] = await userModel.getUserById(req.params.id);
    return await userService.validateNotExistsUser(user) ? 
        res.status(404).json({ message: "nenhum usuário foi encontrado!"}) :
        res.status(200).json(user[0]);
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById
}