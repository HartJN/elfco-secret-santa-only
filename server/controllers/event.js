import { v4 as uuidv4 } from 'uuid'

import {
  createEvent,
  finaliseEvent,
  getEventById,
  getEventByInviteId,
  getEvents,
} from '../db/functions/events.js'

export default {
  getEvents: async (req, res) => {
    const host_id = req.user?.sub

    const events = await getEvents(host_id)

    res.json(events)
  },
  getEvent: async (req, res) => {
    const { event_id } = req.params

    const event = await getEventByInviteId(event_id)
    res.json(event)
  },

  createEvent: async (req, res) => {
    try {
      const eventData = req.body

      eventData.host_id = req.user?.sub

      eventData.invite_id = uuidv4()

      const newEventObj = await createEvent(eventData)

      const fullEventInfo = await getEventById(newEventObj)

      res.status(201).json(fullEventInfo)
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  },

  finaliseEvent: async (req, res) => {
    const { event_id } = req.params
    console.log('🚀 ~ file: event.js:46 ~ finaliseEvent: ~ event_id', event_id)

    const event = await finaliseEvent(event_id)

    res.json(event)
  },
}
