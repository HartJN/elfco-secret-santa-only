import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import styles from './Navbar.module.scss'

export default function Navbar() {
  const { logout, loginWithRedirect, user } = useAuth0()

  const handleLogOff = (e) => {
    e.preventDefault()
    logout()
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <nav className={styles.navbar}>
      <Link to='/'>
        <div className={styles.title}>elf.co</div>
      </Link>
      <div className={styles.links}>
        <Link className={styles.signup} to='/'>
          home
        </Link>

        <IfAuthenticated>
          <Link className={styles.login} to='/dashboard'>
            dashboard
          </Link>
          {/* <div>Hello {user?.nickname}</div> */}

          <Link to='/' onClick={handleLogOff} className={styles.auth}>
            Sign out
          </Link>
        </IfAuthenticated>

        <IfNotAuthenticated>
          <Link className={styles.login} to='/' onClick={handleSignIn}>
            Register | Login
          </Link>
        </IfNotAuthenticated>
      </div>
    </nav>
  )
}
