import { formatDate } from '../../utils/helpers'
import EventLink from './EventLink'
import styles from './Wishlist.module.scss'

export default function AssignedWishlist({ event, assignedWishlist, id }) {
  return (
    <>
      <div className={styles.createEventContainer}>
        <h2 className={styles.secondaryHeading}>Your Buddy</h2>
        <p>
          For the {"'"}
          {event[0].event_name}
          {"'"} event, your buddy is:
        </p>
        <div className={styles.assignedName}>
          {assignedWishlist?.name}
          <img
            src='/client/public/assets/candyCane.png'
            className={styles.candyCaneImg}
            alt='candy cane'
            draggable='false'
          />
        </div>

        <div className={styles.assignedWishlist}>
          <p>Their wish list: {assignedWishlist?.wishlist}.</p>
          <p>
            Make sure you have your gift sorted by {formatDate(event[0].date)},
            the budget is ${event[0].budget}{' '}
          </p>
          <img
            src='/client/public/assets/tree.PNG'
            alt='cartoon drawing of christmas tree person'
            className={styles.treeImAssigned}
            draggable='false'
          />
        </div>
      </div>
      <EventLink id={id} />
    </>
  )
}
