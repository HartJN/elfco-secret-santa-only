import jest from 'jest'
import request from 'supertest'
import { vi } from 'vitest'

import connection from '../../db/connection.js'
import server from '../../server.js'

beforeEach(() => {
  vi.resetAllMocks()
})

beforeAll(() => connection.migrate.latest())
beforeEach(() => connection.seed.run())
afterAll(() => connection.destroy())

describe('GET/dashboard', () => {
  it.skip('Gets all of the events', () => {
    return request(server)
      .get('/api/v1/event/dashboard')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toContainEqual({
          event_id: 1,
          host_id: 1,
          invite_id: '57D6F81',
          event_name: 'Trade Me Christmas Party',
          budget: 30,
          date: '19-12-2022',
          status: 0,
        })
      })
  })
})

describe('POST/', () => {
  it.skip('Adds an event to the db', () => {
    const mockData = {
      name: 'Xmas party',
      date: '12-12-2022',
      budget: 20,
      host_id: 12345,
    }
    return request(server)
      .post('/api/v1/event/')
      .send(mockData)
      .then((res) => {
        expect(res.status).toBe(201)
        return request(server)
          .get('/api/v1/event/dashboard')
          .then((res) => {
            expect(res.status).toBe(200)
            expect(res.body).toContainEqual({
              event_name: 'Xmas party',
              date: '12-12-2022',
              budget: 20,
              host_id: 12345,
              invite_id: expect.any(String),
              event_id: expect.any(Number),
              status: 0,
            })
          })
      })
  })
})

describe('GET/dashboard/:event_id', () => {
  it.skip('Gets event by event_id', () => {
    const mockData = {
      event_id: 1,
      host_id: 1,
      invite_id: '57D6F81',
      event_name: 'Trade Me Christmas Party',
      budget: 30,
      date: '19-12-2022',
      status: 0,
    }

    return request(server)
      .get('/api/v1/event/dashboard/57D6F81')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toStrictEqual(mockData)
      })
  })
})
