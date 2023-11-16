const loginService = require('../services/loginService.js');
const authJWT = require('../services/authJWT');

const login = async (req, res) => {
    const resultLogin = await loginService.validateLogin(req.body);

    if (resultLogin.result) {
        return res.status(resultLogin.result.code).json({ message: resultLogin.result.message });
    }
    return res.status(200).json({ token: authJWT.createToken(req.body)});
};

module.exports = {
    login
};