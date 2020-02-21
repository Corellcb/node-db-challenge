const express = require('express');
const projectRouter = require('./routes/project-router.js');
const resourceRouter = require('./routes/resource-router.js');
const taskRouter = require('./routes/task-router.js');
const server = express();

server.use(express.json());
server.use('/api/project', projectRouter);
server.use('/api/resource', resourceRouter);
server.use('/api/task', taskRouter);

module.exports = server;