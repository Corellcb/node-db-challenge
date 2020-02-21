
exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('project_name', 128).notNullable();
            tbl.string('project_description');
            tbl.boolean('completed').notNullable().defaultTo(false);
        })

        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('resource_name', 128).notNullable().unique();
            tbl.string('resource_description');
        })

        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.string('task_description').notNullable;
            tbl.string('notes');
            tbl.boolean('completed').notNullable().defaultTo(false);

            // set up foreign key
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects'); // <-- must define what table it refers to
        })

        .createTable('project_details', tbl => {
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects');

            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resources');

            tbl.primary(['project_id', 'resource_id']); // <-- make both columns a primary key
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('project_details')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
