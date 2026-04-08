const taskService = require('../services/task.service');

const getTasks = (req, res) => {
  const tasks = taskService.getAllTasks();
  res.json(tasks);
};

const createTask = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const newTask = taskService.createTask(title);
  res.status(201).json(newTask);
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const updatedTask = taskService.updateTask(id, req.body);

  if (!updatedTask) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json(updatedTask);
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  const deleted = taskService.deleteTask(id);

  if (!deleted) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json({ message: 'Task deleted successfully' });
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask
};