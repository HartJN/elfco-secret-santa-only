import knex from 'knex'

import config from '../../knexfile.js'
import {
  createEvent,
  getEventById,
  getEvents,
  getGuestsByEventId,
} from '../events.js'
const testDb = knex(config.test)

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())
afterAll(() => testDb.destroy())

describe('createEvent', () => {
  test('adds an event to the db', () => {
    const event = {
      host_id: 4,
      invite_id: '57D6F99',
      event_name: 'Dev Academy Christmas Party',
      budget: 150,
    }
    return createEvent(event, testDb).then((newEvent) => {
      expect(newEvent[0]).toBe(4)
    })
  })
})

describe('getEvents', () => {
  test('gets the events from db', () => {
    return getEvents(testDb).then((events) => {
      expect(events).toHaveLength(3)
    })
  })
})

describe('getEventById', () => {
  it('gets the event by the id', () => {
    return getEventById(2, testDb).then((events) => {
      expect(events.budget).toBe(50)
    })
  })
})

describe('getGuestsByEventId', () => {
  it.skip('gets the guests by the event id', () => {
    return getGuestsByEventId(1, testDb).then((guest) => {
      expect(guest.name).toContain('Bruno')
    })
  })
})

describe('getEventById', () => {
  it('update events status', () => {
    return getEventById('1', testDb).then((event) => {
      expect(event.event_name).toContain('Trade Me Christmas Party')
    })
  })
})
