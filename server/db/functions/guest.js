import connection from '../connection.js'

// TODO: remove most of these functions and replace them with more generic ones
export function getWishlists(db = connection) {
  return db('guest').select()
}

export function getWishlistById(id, db = connection) {
  return db('guest').select().where('guest_code', id).first()
}

export function getGuestByEventId(id, db = connection) {
  return db('guest').select().where('event_id', id)
}

export function getWishListByGuestCode(id, db = connection) {
  return db('guest').where('guest_code', id).select()
}

export function getWishListByEventId(id, db = connection) {
  return db('guest').where('event_id', id).select()
}

export function getNameById(id, db = connection) {
  return db('guest').where('name', id).select('wishlist', 'name').first()
}

export function getGuestByGiftId(gifter_id, db = connection) {
  return db('guest').where('gifter_id', gifter_id).select('wishlist', 'name')
}

export function createWishlist(wish, db = connection) {
  return db('guest').insert(wish).returning('*')
}

export function updatedWishlist(id, wish, db = connection) {
  return db('guest').where('guest_code', id).update(wish)
}

export function updateWishlistGifter(assigned, db = connection) {
  const { gifter_id, guest_code } = assigned
  return db('guest').where('guest_code', guest_code).update({ gifter_id })
}

export function deleteGuest(id, db = connection) {
  return db('guest').del().where('id', id)
}

export function getEventByInviteId(invite_id, db = connection) {
  return db('event').where('invite_id', invite_id).first()
}

export function getEventById(invite_id, db = connection) {
  return db('event').where({ invite_id }).select()
}
