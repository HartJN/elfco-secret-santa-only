import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  getAssignedWishlist,
  getEventByGuestCodeApi,
  getWishlistByIdApi,
  updatedWishlistApi,
} from '../../apiClient/guest'
import Spinner from '../../components/Spinner'
import AssignedWishlist from './AssignedWishlist'
import styles from './Wishlist.module.scss'
import WishlistForm from './WishlistForm'

export default function Wishlist() {
  const [newWish, setNewWish] = useState(null)
  const { id } = useParams()

  const [event, setEvent] = useState(null)
  const [eventResult, setEventResult] = useState([])
  const [assignedWishlist, setAssignedWishlist] = useState(null)

  const [showForm, setShowForm] = useState(true)
  const [submitted, setSubmitted] = useState(false)

  async function fetchData() {
    const wishlist = await getWishlistByIdApi(id)

    setNewWish(wishlist[0])
    const event = await getEventByGuestCodeApi(id)

    setEvent(event)
    setEventResult(event[0].status)

    const assigned = await getAssignedWishlist(id)

    setAssignedWishlist(assigned)
  }

  useEffect(() => {
    fetchData()
  }, [id])

  const handleDate = (date) => {
    const today = new Date()
    const eventDate = new Date(date)
    const diffTime = Math.abs(eventDate - today)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays <= 1) {
      return `You have ${diffDays} day left!`
    } else if (diffDays < 14) {
      return `You have ${diffDays} days left`
    } else {
      return `You have ${Math.floor(diffDays / 7)} weeks left`
    }
  }

  const handleEdit = () => {
    setShowForm(!showForm)
    setSubmitted(!submitted)
  }

  function handleChange(event) {
    const { name, value } = event.target
    setNewWish((result) => {
      return { ...result, [name]: value }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    updatedWishlistApi(id, newWish)
      .then(setShowForm(false))
      .then(setSubmitted(true))
  }

  if (!newWish || !event) {
    return <Spinner />
  }

  return (
    <div>
      <div className={styles.eventContainer}>
        <h1 className={styles.header}>Secret Santa</h1>
        {eventResult === 1 ? (
          <AssignedWishlist
            assignedWishlist={assignedWishlist}
            handleDate={handleDate}
            id={id}
            event={event}
          />
        ) : (
          <WishlistForm
            newWish={newWish}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            showForm={showForm}
            submitted={submitted}
            handleEdit={handleEdit}
            event={event}
            handleDate={handleDate}
            id={id}
          />
        )}
      </div>
    </div>
  )
}
