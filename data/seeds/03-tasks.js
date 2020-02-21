
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          task_description: 'task description',
          notes: 'the task notes',
          completed: false, // or true
          project_id: 1
        },
        {
          task_description: 'another task description',
          notes: 'the task notes',
          completed: false, // or true
          project_id: 2
        }
      ]);
    });
};
