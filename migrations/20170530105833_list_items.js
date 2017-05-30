
exports.up = function(knex, Promise) {
  return knex.schema.createTable('list_item', (t)=>{
    t.increments('id');
    t.integer('post_id');
    t.text('item');
    t.integer('quantity');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('list_item');
};
