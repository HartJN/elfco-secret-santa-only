import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { getEvents } from '../../apiClient/event.js'
import styles from './Dashboard.module.scss'

export default function Dashboard() {
  const { getAccessTokenSilently } = useAuth0()
  const { isAuthenticated } = useAuth0()
  const navigate = useNavigate()
  const [events, setEvents] = useState([])

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])

  useEffect(() => {
    const fetchEvents = async () => {
      const token = await getAccessTokenSilently()
      const events = await getEvents(token)
      setEvents(events)
    }
    fetchEvents()
  }, [])

  return (
    <div className={styles.dashboard}>
      <h1>Secret Santa</h1>
      <hr />
      <h2>Your events</h2>
      <div className={styles.events}>
        {events.map((event) => (
          <div className={styles.event} key={event.id}>
            <a href={`/dashboard/${event.invite_id}`}>
              <h2 className={styles.title}>{event.event_name}</h2>
            </a>
            <p>
              {' '}
              Event Date: {event.date} | Guest{' '}
              {event.status === 0 ? 'Submissions Open' : 'Submissions Closed'}
            </p>
            <div>
              <Link
                className={styles.link}
                to={`/dashboard/${event.invite_id}`}
              >
                View Event
              </Link>

              <img
                src='/client/public/assets/tree.PNG'
                alt='christmas tree'
                width='40'
                className={styles.treeImage}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
