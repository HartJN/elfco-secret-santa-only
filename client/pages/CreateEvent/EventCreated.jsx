import { Link } from 'react-router-dom'

import { formatDate } from '../../utils/helpers'
import styles from './CreateEvent.module.scss'

export default function EventCreated({ name, date, link, copyLink }) {
  return (
    <div className={styles.createEventContainer}>
      <h2 className={styles.secondaryHeading}>Your event:</h2>
      <h3>{name}</h3>
      <div className={styles.linkContainer}>
        <p>Your Event Link:</p>
        <a href={`http://localhost:5173/invite/${link}`}>
          http://elf.co/invite/{link}
        </a>
      </div>
      <div className={styles.copyLinkContainer}>
        <p>Copy and Paste this link to your friends</p>
        <img
          src='/server/public/assets/Secret-Santa-.png'
          alt='santa hushing'
          className={styles.santaCopyLinkImg}
        />
        <button onClick={copyLink} type='button'>
          Copy Link
        </button>
      </div>
      <img
        src='/server/public/assets/rudolph-v2.png'
        alt='santa hushing'
        className={styles.rudolphImg}
      />
      <h4>Event date: {formatDate(date)}</h4>
      <Link to='/dashboard' className={styles.eventLink}>
        view my events
      </Link>
    </div>
  )
}
