import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import styles from './SSHome.module.scss'

export default function SSHome() {
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/event')
    } else {
      loginWithRedirect()
    }
  }, [isAuthenticated])

  const handleSignIn = async (e) => {
    e.preventDefault()
    await loginWithRedirect({
      redirectUri: window.location.origin + '/event',
    })
  }

  return (
    <div className={styles.SSHomeContainer}>
      <div className={styles.SSHomeWrapper}>
        <h1>secret santa</h1>

        <h2>Login to get started!</h2>
        <a href='/event' onClick={handleSignIn}>
          <img
            src='/assets/Secret-Santa-.png'
            alt='secret santa'
            className={styles.image}
          />
        </a>
        <Link className={styles.links} to='/event' onClick={handleSignIn}>
          Register | Login
        </Link>
      </div>
    </div>
  )
}
