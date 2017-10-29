exports.up = function(knex) {
  return knex.schema.createTable('drug', table => {
    table.increments('id').primary();
    table.string('generic').notNullable().defaultTo('');
    table.string('brand').notNullable().defaultTo('');
    table.string('indications').notNullable().defaultTo('');

    table.integer('doctorId').unsigned().notNullable();
    table.foreign('doctorId').references('doctor.id').onDelete('CASCADE');

    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('drug');
};
