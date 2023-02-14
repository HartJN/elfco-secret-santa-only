export const up = async (knex) => {
  await knex.schema.createTable('guest', (table) => {
    table.increments('id')
    table.string('guest_code')
    table.string('event_id')
    table.string('name')
    table.string('wishlist')
    table.string('gifter_id')
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable('guest')
}
