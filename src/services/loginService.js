const userController = require('../controllers/userController');
const userModel = require('../models/userModel');

const validateLogin = async (user) => {

    const [findUser] = await userModel.getUserById(user.id);


    return !user || user.password !== findUser[0].password ?
        { result: { code: 400, message: 'ID ou senha estao incorretos' } } :
        true;
};

module.exports = {
    validateLogin
};