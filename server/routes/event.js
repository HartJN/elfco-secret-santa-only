import express from 'express'

import eventController from '../controllers/event.js'
import { checkJwt } from '../utils/auth0.js'

const router = express.Router()

router.get('/dashboard', checkJwt, eventController.getEvents)
router.post('/', checkJwt, eventController.createEvent)
router.get('/dashboard/:event_id', checkJwt, eventController.getEvent)
router.patch('/dashboard/:event_id', checkJwt, eventController.finaliseEvent)

export default router
