import { v4 as uuidv4 } from 'uuid'

import { createHostId, getHostId } from '../db/functions/host.js'

export const getHost = async (req, res) => {
  const { hostId } = req.params

  const host = await getHostId(hostId)

  res.json(host)
}

export const createHost = async (req, res) => {
  try {
    const hostData = req.body

    hostData.host_id = uuidv4()

    const newHostObj = createHostId(hostData)

    const fullHostInfo = await getHostId(newHostObj)

    res.status(201).json(fullHostInfo)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
