const { v4: uuidv4 } = require('uuid');
const Task = require('../models/task.model');
const db = require('../data/db');

const getAllTasks = () => db.tasks;

const createTask = (title) => {
  const newTask = new Task(uuidv4(), title);
  db.tasks.push(newTask);
  return newTask;
};

const updateTask = (id, data) => {
  const task = db.tasks.find(t => t.id === id);
  if (!task) return null;

  if (data.title !== undefined) task.title = data.title;
  if (data.completed !== undefined) task.completed = data.completed;

  return task;
};

const deleteTask = (id) => {
  const index = db.tasks.findIndex(t => t.id === id);
  if (index === -1) return false;

  db.tasks.splice(index, 1);
  return true;
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask
};