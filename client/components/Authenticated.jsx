import { useAuth0 } from '@auth0/auth0-react'

const useIsAuthenticated = () => {
  let { isAuthenticated } = useAuth0()
  return isAuthenticated
}

export function IfAuthenticated({ children }) {
  console.log('hit if authenticated')
  return useIsAuthenticated() ? <>{children}</> : null
}

export function IfNotAuthenticated({ children }) {
  console.log('hit if not authenticated')
  return !useIsAuthenticated() ? <>{children}</> : null
}
