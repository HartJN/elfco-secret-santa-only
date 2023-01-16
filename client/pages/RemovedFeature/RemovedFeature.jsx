import './RemovedFeature.scss'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function RemovedFeature() {
  const [countdown, setCountdown] = useState(5)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (countdown === 0) {
      navigate('/secretsanta')
    }
  }, [countdown, history])

  return (
    <div className='removed-feature'>
      <div className='removed-feature__message'>
        This feature has been removed in this build. Redirecting to{' '}
        <span className='removed-feature__route'>/secretsanta</span> in{' '}
        {countdown} seconds.
      </div>
      <img
        src='/client/public/assets/Secret-Santa-.png'
        alt='Feature removed'
        className='removed-feature__image'
      />
    </div>
  )
}
