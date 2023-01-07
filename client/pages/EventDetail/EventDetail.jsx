import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
  const { event_id } = useParams()

  const [guestList, setGuestList] = useState([])

  const [assigned, setAssigned] = useState([])

  const handleDelete = async (id, event_id) => {
    const participants = await deleteGuest(id, event_id)

    setGuestList(participants)
  }

  const handleFinalize = async () => {
    const finalization = await finalizeEvent(event_id)

    setGuestList(finalization.participants)

    setAssigned(finalization.status)
  }

  useEffect(() => {
    const fetchData = async () => {
      const participants = await getAllParticipants(event_id)
      const event = await getEvent(event_id)
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
        src='/server/public/assets/tree.PNG'
        alt='a cartoon of a person dressed as a christmas tree'
        draggable='false'
        className={styles.treeImg}
      />
    </div>
  )
}
