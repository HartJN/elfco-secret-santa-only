import express from 'express'
const router = express.Router()

import { getEventByInviteId } from '../db/functions/events.js'

router.get('/:invite_code', async (req, res) => {
  const { invite_code } = req.params
  const event = await getEventByInviteId(invite_code)

  res.status(200).json(event)
})

export default router
