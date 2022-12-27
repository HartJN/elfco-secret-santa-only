import express from 'express'

import eventController from '../controllers/event.js'

const router = express.Router()

router.get('/dashboard', eventController.getEvents)
router.post('/', eventController.createEvent)
router.get('/dashboard/:event_id', eventController.getEvent)
router.patch('/dashboard/:event_id', eventController.finaliseEvent)

export default router
