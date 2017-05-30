
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (t)=>{
    t.increments('id');
    t.text('name');
    t.text('password');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
