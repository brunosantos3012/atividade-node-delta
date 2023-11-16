const tasksModel = require('../models/taskModel');
const taskService = require('../services/taskService');

const createTask = async (req, res) => {
    return res.status(201).json(await taskService.builderTask(await tasksModel.createTask(req.body), null, true));
};

const getAllTasks = async (_req, res) => {
    const [allTasks] = await tasksModel.getAllTasks();
    return res.status(200).json(allTasks);
}

const getTaskById = async (req, res) => {
    const [task] = await tasksModel.getTaskById(req.params.id);
    return await taskService.validateNotExistsTask(task) ? 
        res.status(404).json({ message: "nenhuma tarefa foi encontrada!"}) :
        res.status(200).json(await taskService.builderTask(null, await tasksModel.getTaskById(req.params.id), false));
}

const updateTask = async (req, res) => {
    return await taskService.validateNotExistsTaskById(req.params.id) ?
        res.status(404).json({ message: "nenhuma tarefa foi encontrada para atualizar!"}) :
        res.status(204).json(await tasksModel.updateTask(req.params.id, req.body));
};

const deleteTask = async (req, res) => {
    return await taskService.validateNotExistsTaskById(req.params.id) ?
        res.status(404).json({ message: "nenhuma tarefa foi encontrada para deletar!"}) :
        res.status(204).json(await tasksModel.deleteTask(req.params.id));
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    deleteTask,
    updateTask
}