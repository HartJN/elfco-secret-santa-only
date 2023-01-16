import {
  findGifter,
  shuffleAndAssignGuests,
} from '../../utils/finaliseEvent.js'
import connection from '../connection.js'

export function createEvent(event, db = connection) {
  const { host_id, invite_id, name, budget, date } = event

  return db('event').insert({
    host_id,
    invite_id,
    event_name: name,
    budget,
    date,
  })
}

export function getEvents(host_id, db = connection) {
  return db('event').select().where({ host_id })
}

export function getEventByInviteId(invite_id, db = connection) {
  return db('event').where({ invite_id }).first()
}

export function handleDelete(guest_id, db = connection) {
  return db('guest').where({ id: guest_id }).del().returning('*')
}

export function getEventById(event_id, db = connection) {
  return db('event').where({ event_id }).first()
}

export async function finaliseEvent(event_id, db = connection) {
  const guests = await db('guest').where({ event_id }).select()
  const assignments = shuffleAndAssignGuests(guests)
  await updateAssignments(assignments, db, guests)
  const event = await db('event')
    .where({ invite_id: event_id })
    .update({ status: true })

  return {
    participants: assignments,
    status: event,
  }
}

async function updateAssignments(assignments, db, guests) {
  const updates = assignments.map((assignment) => {
    return db('guest')
      .where({ id: assignment.id })
      .update({
        gifter_id: findGifter(assignment.gifter_id, guests),
      })
  })
  await Promise.all(updates)
}
