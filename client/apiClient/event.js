import request from 'superagent'

const baseUrl = '/api/v1'

export const createEvent = async (event) => {
  const res = await request.post(`${baseUrl}/event`).send(event)

  return res.body
}

export const getEvent = async (event_id) => {
  const response = await request.get(`${baseUrl}/event/dashboard/${event_id}`)

  return response.body
}

export async function getEvents() {
  const res = await request.get(`${baseUrl}/event/dashboard`)
  return res.body
}

export function getAllParticipants(event_id) {
  return request
    .get(`/api/v1/wishlist/${event_id}/participants`)
    .then((res) => {
      return res.body
    })
}

export function deleteGuest(id, event_id) {
  return request
    .del(`/api/v1/wishlist/${id}`)
    .send({ event_id })
    .then((res) => {
      return res.body
    })
}

export const finalizeEvent = async (event_id) => {
  const res = await request.patch(`${baseUrl}/event/dashboard/${event_id}`)

  return res.body
}

export const getEventByInviteCode = async (invite_id) => {
  const res = await request(`/api/v1/invite/${invite_id}`)
  return res.body
}
