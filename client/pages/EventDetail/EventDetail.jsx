import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import {
  deleteGuest,
  finalizeEvent,
  getAllParticipants,
  getEvent,
} from '../../apiClient/event.js'
import Spinner from '../../components/Spinner'
import AssignedParticipantList from './AssignedParticipantList'
import styles from './EventDetail.module.scss'
import ParticipantList from './ParticipantList'

export default function EventDetail() {
  const { getAccessTokenSilently } = useAuth0()
  const { isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  const { event_id } = useParams()

  const [guestList, setGuestList] = useState([])

  const [assigned, setAssigned] = useState([])

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])

  const handleDelete = async (id, event_id) => {
    const participants = await deleteGuest(id, event_id)

    setGuestList(participants)
  }

  const handleFinalize = async () => {
    const token = await getAccessTokenSilently()
    const finalization = await finalizeEvent(event_id, token)

    setGuestList(finalization.participants)

    setAssigned(finalization.status)
  }

  useEffect(() => {
    const fetchData = async () => {
      const token = await getAccessTokenSilently()
      const participants = await getAllParticipants(event_id, token)
      const event = await getEvent(event_id, token)
      setGuestList(participants)

      setAssigned(event.status)
    }
    fetchData()
  }, [assigned])

  if (guestList === undefined) {
    return <Spinner />
  }

  return (
    <div className={styles.guestContainer}>
      <h1 className={styles.header}>Secret Santa</h1>
      <h2 className={styles.secondaryHeading}>Participants</h2>
      {assigned ? (
        <AssignedParticipantList
          guestList={guestList}
          handleDelete={handleDelete}
        />
      ) : (
        <ParticipantList
          guestList={guestList}
          handleDelete={handleDelete}
          handleFinalize={handleFinalize}
        />
      )}
      <img
        src='/client/public/assets/tree.PNG'
        alt='a cartoon of a person dressed as a christmas tree'
        draggable='false'
        className={styles.treeImg}
      />
    </div>
  )
}
