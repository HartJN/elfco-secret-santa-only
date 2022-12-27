import { useState } from 'react'

import { createEvent } from '../../apiClient/event.js'
import styles from './CreateEvent.module.scss'
import CreateEventForm from './CreateEventForm.jsx'
import EventCreated from './EventCreated.jsx'

export default function Event() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [budget, setBudget] = useState('')
  const [eventCreated, setEventCreated] = useState(false)
  const [link, setLink] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const host_id = 69

    const event = { name, date, budget, host_id }

    const newEvent = await createEvent(event)

    setLink(newEvent.invite_id)
    setEventCreated(true)
  }

  const copyLink = () => {
    navigator.clipboard.writeText(`localhost:5173/invite/${link}`)
  }

  return (
    <div className={styles.eventContainer}>
      <h1 className={styles.header}>Secret Santa</h1>
      {!eventCreated ? (
        <CreateEventForm
          name={name}
          setName={setName}
          date={date}
          setDate={setDate}
          budget={budget}
          setBudget={setBudget}
          handleSubmit={handleSubmit}
        />
      ) : (
        <EventCreated name={name} date={date} link={link} copyLink={copyLink} />
      )}
    </div>
  )
}
