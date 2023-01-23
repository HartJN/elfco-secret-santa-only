import styles from './Wishlist.module.scss'

export default function EventLink({ id }) {
  const copyLink = () => {
    navigator.clipboard.writeText(
      `https://elfco-secret-santa.herokuapp.com/wishlist/${id}`
    )
  }

  return (
    <div className={styles.eventLinkContainer}>
      <div className={styles.linkContainer}>
        <p>Your Event Link:</p>
        <a href={`https://elfco-secret-santa.herokuapp.com/wishlist/${id}`}>
          http://elf.co/wishlist/{id}
        </a>
        <div className={styles.copyLinkContainer}>
          <p>Save this link to come back to your wishlist</p>
          <img
            src='/assets/Secret-Santa-.png'
            alt='santa hushing'
            className={styles.santaCopyLinkImg}
          />
          <button onClick={copyLink}>Copy link</button>
        </div>
      </div>
    </div>
  )
}
