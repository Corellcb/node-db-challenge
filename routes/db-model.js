const db = require('../data/db-config');

module.exports = {
    getProjects,
    addProject,
    addResource,
    getResources,
    getTasks,
    addTask
};

/* GET list of projects */
function getProjects() {
    return db('projects');
}

/* POST to create a new project */
function addProject(project) {
    return db('projects').insert(project, 'id');
}

// POST to add a new resource
function addResource(resource) {
    return db('resources').insert(resource, 'id');
}

function getResources() {
    return db('resources');
}

/* GET list of tasks */
function getTasks() {
    return db('tasks')
        .join('projects', 'tasks.project_id', 'projects.id')
        .select('tasks.*', 'projects.project_name', 'projects.project_description')
}

/* POST to create a new task */
function addTask(task) {
    return db('tasks').insert(task, 'id');
}