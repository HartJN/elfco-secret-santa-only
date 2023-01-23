import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'

import { createEvent } from '../../apiClient/event.js'
import styles from './CreateEvent.module.scss'
import CreateEventForm from './CreateEventForm.jsx'
import EventCreated from './EventCreated.jsx'

export default function Event() {
  const { getAccessTokenSilently, isAuthenticated, loginWithRedirect } =
    useAuth0()

  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [budget, setBudget] = useState('')
  const [eventCreated, setEventCreated] = useState(false)
  const [link, setLink] = useState(null)

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect()
    }
  }, [isAuthenticated])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const token = await getAccessTokenSilently()

    const event = { name, date, budget }

    const newEvent = await createEvent(event, token)

    setLink(newEvent.invite_id)
    setEventCreated(true)
  }

  const copyLink = () => {
    navigator.clipboard.writeText(
      `https://elfco-secret-santa.herokuapp.com/invite/${link}`
    )
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
