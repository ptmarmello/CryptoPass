
exports.up = function(knex) {
  return knex.schema.createTable('user',function(table){
      table.inscrements();
      table.string('id').primary();
      table.string('username').notNullable();
      table.string('password').notNullable();
      table.string('passcode').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
