import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { getEventByInviteCode } from '../../apiClient/event'
import { createGuestApi } from '../../apiClient/guest'
import { formatDate } from '../../utils/helpers'
import InviteForm from './InviteForm'
import styles from './InvitePage.module.scss'

export default function InvitePage() {
  const initialState = { name: '', guest_code: '', invite_id: '' }
  const [event, setNewEvent] = useState(initialState)
  const [guestName, setGuestName] = useState('')
  const { invite_id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getEvent = async () => {
      try {
        const event = await getEventByInviteCode(invite_id)
        setNewEvent(event)
      } catch (err) {
        console.error(err.message)
      }
    }
    getEvent()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newGuest = {
      name: guestName,
      event_id: invite_id,
    }

    try {
      const guest = await createGuestApi(newGuest)
      const id = guest.guest_code

      navigate(`/wishlist/${id}`)
    } catch (err) {
      console.error(err.message)
    }
  }

  if (event.status === 1) {
    return (
      <div className={styles.inviteContainer}>
        <h1 className={styles.header}>Secret Santa</h1>
        <h2>Sorry, this event is closed.</h2>
      </div>
    )
  }

  return (
    <div className={styles.inviteContainer}>
      <h1 className={styles.header}>Secret Santa</h1>
      <h2>You have been invited to: </h2>
      <h3>{event?.event_name}</h3>
      <p>
        Your budget is ${event?.budget}. Save the date! Have your gift ready by{' '}
        {formatDate(event?.date)}.
      </p>
      <InviteForm
        guestName={guestName}
        setGuestName={setGuestName}
        handleSubmit={handleSubmit}
      />
      <img
        src='/assets/Secret-Santa-.png'
        alt='santa hushing'
        className={styles.santaCopyLinkImg}
      />
    </div>
  )
}
