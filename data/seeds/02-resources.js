
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          resource_name: 'Lambda Student',
          resource_description: 'a soon to be hired developer'
        },
        {
          resource_name: 'MacBook Pro #1',
          resource_description: 'an overly expensive laptop computer'
        }
      ]);
    });
};
