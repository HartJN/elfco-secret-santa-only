import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

import SSHome from '../SecretSantaHome/SSHome'

vi.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    isAuthenticated: true,
    getAccessTokenSilently: () => 'fake token',
  }),
}))

describe('CreateEvent component test', async () => {
  it('renders', () => {
    render(<SSHome />, { wrapper: MemoryRouter })
    expect(screen.getByText(/Secret Santa/i)).toBeInTheDocument()
  })
  it('has an image', () => {
    render(<SSHome />, { wrapper: MemoryRouter })
    expect(screen.getByAltText(/secret santa/i))
  })
  it('has an link', async () => {
    render(<SSHome />, { wrapper: MemoryRouter })
    const link = await screen.findByRole('link', {
      name: /Register | Login/i,
    })
    expect(link.href).toContain('event')
  })
})
