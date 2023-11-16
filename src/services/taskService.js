const taskModel = require('../models/taskModel');

const builderTask = async (id, task, findTask) => {    
    if (findTask) {
        const [completeTask] = await taskModel.getTaskById(id);
        return buildTaskFields(completeTask[0]);
        
    } else if (task[0]) {
        const [uniqueTask] = task[0];
        return buildTaskFields(uniqueTask);
    }
}

const buildTaskFields = async (task) => {
    return {
        id: task.id,
        title: task.title,
        description: task.description,
        createdAt: task.created_at,
        updateDate: task.update_date,
        done: task.done === 0 ? false : true
    }
}

const validateNotExistsTaskById = async (id) => {
    const [task] = await taskModel.getTaskById(id);
    return validateNotExistsTask(task);
}

const validateNotExistsTask = (task) => {
    return !!task && !!task.length == 0;
}

module.exports = {
    builderTask,
    validateNotExistsTask,
    validateNotExistsTaskById
}