import request from 'superagent'

const baseUrl = '/api/v1'

export const createEvent = async (event, token) => {
  const res = await request
    .post(`${baseUrl}/event`)
    .set('Authorization', `Bearer ${token}`)
    .send(event)

  return res.body
}

export const getEvent = async (event_id, token) => {
  const response = await request
    .get(`${baseUrl}/event/dashboard/${event_id}`)
    .set('Authorization', `Bearer ${token}`)

  return response.body
}

export async function getEvents(token) {
  const res = await request
    .get(`${baseUrl}/event/dashboard`)
    .set('Authorization', `Bearer ${token}`)
  return res.body
}

export function getAllParticipants(event_id, token) {
  return request
    .get(`/api/v1/wishlist/${event_id}/participants`)
    .set('Authorization', `Bearer ${token}`)
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

export const finalizeEvent = async (event_id, token) => {
  const res = await request
    .patch(`${baseUrl}/event/dashboard/${event_id}`)
    .set('Authorization', `Bearer ${token}`)

  return res.body
}

export const getEventByInviteCode = async (invite_id) => {
  const res = await request(`/api/v1/invite/${invite_id}`)
  return res.body
}

export const getHostId = async (host_id) => {
  const res = await request(`/api/v1/host/${host_id}`)
  return res.body
}

// export const createHost = async () => {
//   const res = await request.post(`${baseUrl}/host`)

//   return res.body
// }

export const createHost = async () => {
  const { body } = await request.post('/api/v1/host').send()
  return body.host_id
}
