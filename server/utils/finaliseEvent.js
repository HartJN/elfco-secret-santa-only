export function shuffleAndAssignGuests(guests) {
  shuffle(guests)
  const assignments = []
  for (let i = 0; i < guests.length; i++) {
    assignments.push({
      ...guests[i],
      id: guests[i].id,
      gifter_id: guests[(i + 1) % guests.length].id,
      guest_code: guests[i].guest_code,
    })
  }
  return assignments
}

export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

export function filterParticipants(participants, event_id) {
  return participants.filter((participant) => participant.event_id == event_id)
}

export function findGifter(gifter_id, participants) {
  const gifter = participants.find(
    (participant) => participant.id === gifter_id
  )
  const name = gifter.name
  return name
}
