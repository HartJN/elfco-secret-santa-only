import EventLink from './EventLink'
import styles from './Wishlist.module.scss'

export default function WishlistForm({
  newWish,
  handleChange,
  handleSubmit,
  showForm,
  submitted,
  handleEdit,
  event,
  handleDate,
  id,
}) {
  return (
    <>
      {showForm && (
        <div className={styles.createEventContainer}>
          <h2 className={styles.secondaryHeading}>Your Wishlist</h2>
          <p>Add to your wishlist! The budget is ${event[0].budget}</p>
          <form className={styles.eventForm} onSubmit={handleSubmit}>
            <textarea
              type='text'
              name='wishlist'
              id='wishlist'
              value={newWish.wishlist}
              onChange={handleChange}
              placeholder='Type your wishlist here'
              maxLength={100}
            />
            <button type='submit'>Submit</button>
          </form>
          <img
            src='/server/public/assets/xmas-cat.PNG'
            alt='cat'
            className={styles.catImg}
            draggable='false'
          />
        </div>
      )}
      {submitted && (
        <>
          <div className={styles.createEventContainer}>
            <h2 className={styles.secondaryHeading}>Your Wishlist</h2>

            <h3 className={styles.wishlistItem}>
              {/* handleText */ newWish.wishlist}
            </h3>

            <button className={styles.editBtn} onClick={handleEdit}>
              Edit Wishlist
            </button>

            <p className={styles.days}> {handleDate(event[0].date)}</p>

            <img
              src='/server/public/assets/tree.PNG'
              alt='tree'
              className={styles.treeImg}
              draggable='false'
            />
          </div>
          <EventLink id={id} />
        </>
      )}
    </>
  )
}
