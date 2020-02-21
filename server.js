const express = require('express');
const projectRouter = require('./routes/project-router.js');
const resourceRouter = require('./routes/resource-router.js');
const taskRouter = require('./routes/task-router.js');
const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

module.exports = server;