import { Link } from 'react-router-dom'

import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Link to='/secretsanta' className={styles.links}>
            <img
              src='/assets/Secret-Santa-.png'
              alt='secret santa'
              className={styles.image}
            />
            secret santa
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <Link to='/removedfeature' className={styles.links}>
            <img
              src='/assets/Only-Peets-.png'
              alt='Santa with Animals'
              className={styles.image}
            />
            onlypeets
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <Link to='/removedfeature' className={styles.links}>
            <img
              src='/assets/Drunk-Santa-.png'
              alt='Drunk Santa'
              className={styles.image}
            />
            drunk santa
          </Link>
        </div>
      </div>
    </div>
  )
}
