
exports.up = function(knex) {
  return knex.schema.createTable('accounts',function(table){
      table.inscrements();
      table.string('key').primary();
      table.string('platform').notNullable();
      table.string('recover_email').notNullable();

    //   table.string('passcode');

      table.string('username');
      table.string('password').notNullable();
      table.string('user_id').notNullable();
      
      table.foreign('user_id').references('id').inTable('user');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('accounts');
};
