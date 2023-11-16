const express = require('express');
const tasksController = require('../controllers/taskController');
const taskMiddleware = require('../middlewares/taskMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/task', authMiddleware.validateToken, taskMiddleware.validateTaskFields, tasksController.createTask);
router.get('/task', tasksController.getAllTasks);
router.get('/task/:id', tasksController.getTaskById);
router.put('/task/:id', authMiddleware.validateToken, taskMiddleware.validateTaskFields, tasksController.updateTask);
router.delete('/task/:id', authMiddleware.validateToken, tasksController.deleteTask);

module.exports = router;