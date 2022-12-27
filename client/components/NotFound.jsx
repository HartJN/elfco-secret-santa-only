import styles from '../pages/Wishlist.module.scss'

export default function EventNotFound() {
  return (
    <div className={styles.eventNotFoundContainer}>
      <h2>Event not found</h2>
      <img
        src='/server/public/assets/sad-cat.PNG'
        alt='sad cat'
        className={styles.sadCatImg}
        draggable='false'
      />
    </div>
  )
}
