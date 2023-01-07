export const up = async (knex) => {
  await knex.schema.createTable('event', (t) => {
    t.increments('event_id')
    t.integer('host_id')
    t.string('invite_id')
    t.string('event_name')
    t.integer('budget')
    t.date('date')
    t.boolean('status').defaultTo(false)
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable('event')
}
