
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          project_name: 'project name here',
          project_description: 'the project description',
          completed: false
        },
        {
          project_name: 'project name here',
          project_description: 'the project description',
          completed: false
        }
      ]);
    });
};
