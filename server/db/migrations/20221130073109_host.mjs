export const up = async (knex) => {
  await knex.schema.createTable('host', (t) => {
    t.increments('host_id')
    t.string('auth0id')
    t.string('name')
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable('host')
}
