import { useAuth0 } from '@auth0/auth0-react'
import { Link, useNavigate } from 'react-router-dom'

import styles from './Home.module.scss'

const HomePage = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  const content = {
    heading: 'Welcome to Elfco Secret Santa!',
    intro:
      'This app is perfect for organizing a Secret Santa event with friends, family, or colleagues. With our easy-to-use platform, you can create an event and invite your friends or family members to participate in the gift exchange.',
    howItWorks: [
      'Sign up and create an event.',
      'Share the event link with your friends and family.',
      'Each participant can create their own wish list, which will be visible only to the person who draws their name.',
      "Once everyone has submitted their wish list, you can click 'draw' on your dashboard to assign a gifter to each participant.",
    ],
    details: [
      "It's that easy! Our app takes care of all the details, so you can focus on enjoying the holiday season.",
      "Don't worry about manually drawing names out of a hat or keeping track of who is gifting whom. Our Secret Santa app is here to make your life easier.",
      'So what are you waiting for? Sign up and start organizing your Secret Santa event today!',
    ],
  }

  const handleSignIn = async (e) => {
    e.preventDefault()
    if (!isAuthenticated) {
      console.log('not authenticated')
      await loginWithRedirect({
        redirectUri: window.location.origin + '/event',
      })
    } else {
      console.log('authenticated')

      navigate('/event')
    }
  }

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeWrapper}>
        <h1>{content.heading}</h1>
        <p>{content.intro}</p>
        <h2>Login to get started!</h2>
        <Link to='/event' onClick={handleSignIn}>
          <img
            src='/assets/Secret-Santa-.png'
            alt='secret santa'
            className={styles.image}
          />
        </Link>
        <Link className={styles.links} to='/event' onClick={handleSignIn}>
          Register | Login
        </Link>
        <h2>How does it work?</h2>
        <ol>
          {content.howItWorks.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default HomePage
