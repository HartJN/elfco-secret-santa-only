import nock from 'nock'

import {
  createEvent,
  deleteGuest,
  getEvent,
  getEventByInviteCode,
  getEvents,
} from '../event'

describe('createEvent', () => {
  it('creates a secret santa event', () => {
    const scope = nock('http://localhost')
      .post('/api/v1/event')
      .reply(200, {
        host_id: 6,
        invite_id: '57D6F99',
        event_name: 'Puppy Christmas Party',
        budget: 65,
        date: 18 - 12 - 2022,
      })

    return createEvent().then((event) => {
      expect(event.event_name).toBe('Puppy Christmas Party')
      expect(event.budget).toBe(65)
      expect(scope.isDone()).toBe(true)
    })
  })
})

describe('getEvent', () => {
  it('gets a secret santa event', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/event/dashboard/6')
      .reply(200, {
        event_id: 6,
        host_id: 6,
        invite_id: '57D6F99',
        event_name: 'Puppy Christmas Party',
        budget: 65,
        date: 18 - 12 - 2022,
      })

    return getEvent(6).then((event) => {
      expect(event.event_name).toBe('Puppy Christmas Party')
      expect(scope.isDone()).toBe(true)
    })
  })
})

describe('getEvents', () => {
  it('gets secret santa events', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/event/dashboard')
      .reply(200, {
        host_id: 6,
        invite_id: '57D6F99',
        event_name: 'Puppy Christmas Party',
        budget: 65,
        date: 18 - 12 - 2022,
      })

    return getEvents().then((event) => {
      expect(event.event_name).toBe('Puppy Christmas Party')
      expect(event.budget).toBe(65)
      expect(scope.isDone()).toBe(true)
    })
  })
})

describe('deleteGuest', () => {
  it('delete a secret santa participants', () => {
    const scope = nock('http://localhost')
      .delete('/api/v1/wishlist/2')
      .reply(200, {
        result: [
          {
            id: 0,
            guest_code: '9ACE6AD157D6F81D9C774D39A287DA10',
            event_id: 1,
            name: 'Bruno',
            wishlist: 'gardening tools and soil',
          },
          {
            id: 1,
            guest_code: '57D6F81289ACE6AD1D9C774D39A7DA10',
            event_id: 1,
            name: 'Bob',
            wishlist: 'BBQ and a new lawnmower',
          },
        ],
      })

    return deleteGuest(2).then((event) => {
      expect(event.result).toHaveLength(2)
      expect(scope.isDone()).toBe(true)
    })
  })
})

describe('getEventByInviteCode', () => {
  it('gets event by invite code', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/invite/57D6F81')
      .reply(200, {
        event_id: 1,
        host_id: 1,
        invite_id: '57D6F81',
        event_name: 'Trade Me Christmas Party',
        budget: 30,
        date: '19-12-2022',
        status: false,
      })

    return getEventByInviteCode('57D6F81').then((event) => {
      expect(event.host_id).toBe(1)
      expect(scope.isDone()).toBe(true)
    })
  })
})
