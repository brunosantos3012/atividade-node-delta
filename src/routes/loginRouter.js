const express = require('express');
const loginController = require('../controllers/loginController');
const loginMiddleware = require('../middlewares/loginMiddleware');
const router = express.Router();

router.post('/login', loginMiddleware.validateLoginFields, loginController.login);

module.exports = router;