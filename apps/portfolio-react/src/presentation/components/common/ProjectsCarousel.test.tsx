import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { screen, render, act } from '@testing-library/react'
import ProjectsCarousel from './ProjectsCarousel'

describe('ProjectsCarousel component', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders section title and project cards', () => {
    render(<ProjectsCarousel />)

    // Advance timers so the dimension-calculating useEffect runs
    act(() => {
      vi.advanceTimersByTime(150)
    })

    // Check section title
    expect(screen.getByText('Proyectos Destacados')).toBeInTheDocument()

    // Check project titles from PROJECTS_DATA
    expect(screen.getByText('GADA-i')).toBeInTheDocument()
    expect(screen.getByText('Bergé API')).toBeInTheDocument()
    expect(screen.getByText('bitDoc')).toBeInTheDocument()

    // Check "Próximamente" card
    expect(screen.getByText('PRÓXIMAMENTE')).toBeInTheDocument()
  })

  it('navigates next and previous on button click', () => {
    render(<ProjectsCarousel />)

    // Advance timers so the dimension-calculating useEffect runs
    act(() => {
      vi.advanceTimersByTime(150)
    })

    // Find next and prev buttons (desktop version is first)
    const nextButtons = screen.getAllByLabelText('Siguiente')
    const prevButtons = screen.getAllByLabelText('Anterior')

    // Initially, prev button should be disabled
    expect(prevButtons[0]).toBeDisabled()
    expect(nextButtons[0]).not.toBeDisabled()

    // Click next button
    act(() => {
      nextButtons[0].click()
    })

    // Now prev button should be enabled
    expect(prevButtons[0]).not.toBeDisabled()
  })
})
