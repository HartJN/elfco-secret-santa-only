import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain='aihe-2022-jamesh.au.auth0.com'
    clientId='0SAP96spw5HGTYUoYcRP3C6Fb3cOw6no'
    redirectUri={window.location.origin}
    audience='https://secret-santa/api'
    cacheLocation='localstorage'
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
)
