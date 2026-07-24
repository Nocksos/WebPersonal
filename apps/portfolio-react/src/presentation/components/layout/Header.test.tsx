import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithProvider } from '@/test/test-utils'
import Header from './Header'
import { store } from '@/store'
import { setMobileMenuOpen } from '@/store/slices/uiSlice'

describe('Header component', () => {
  it('renders brand logo/text and desktop navigation links', () => {
    renderWithProvider(<Header />)

    // Check brand logo
    expect(screen.getByText('ÁLVARO.DEV')).toBeInTheDocument()

    // Check some navigation links
    expect(screen.getByText('Proyectos')).toBeInTheDocument()
    expect(screen.getByText('Sobre mí')).toBeInTheDocument()
    expect(screen.getByText('Stack')).toBeInTheDocument()
  })

  it('toggles mobile menu state on menu button click', () => {
    // Reset store state
    store.dispatch(setMobileMenuOpen(false))
    expect(store.getState().ui.isMobileMenuOpen).toBe(false)

    renderWithProvider(<Header />)

    // Get mobile menu button
    const menuBtn = screen.getByLabelText('Menu')
    menuBtn.click()

    // Check store state became true
    expect(store.getState().ui.isMobileMenuOpen).toBe(true)
  })
})
