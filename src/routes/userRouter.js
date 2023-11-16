const express = require('express');
const userController = require('../controllers/userController');
const userMiddleware = require('../middlewares/userMiddleware');
const router = express.Router();

router.post('/user', userMiddleware.validateUserFields, userController.createUser);
router.get('/user', userController.getAllUsers);
router.get('/user/:id', userController.getUserById);

module.exports = router;