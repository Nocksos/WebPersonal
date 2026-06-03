import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setActiveSection } from '@/store/slices/uiSlice'
import Header from './Header'
import MobileMenu from './MobileMenu'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

const sectionTitles: Record<string, string> = {
  hero: 'Inicio',
  projects: 'Proyectos',
  about: 'Sobre Mí',
  stack: 'Tecnologías',
  experience: 'Experiencia',
  cv: 'Descargar CV',
  contact: 'Contacto',
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch()
  const activeSection = useAppSelector((state) => state.ui.activeSection)

  // Dynamically update document title based on the active section
  useEffect(() => {
    const titleSection = sectionTitles[activeSection]
    if (titleSection) {
      document.title = `${titleSection} | Álvaro Hernández - Portfolio`
    } else {
      document.title = 'Álvaro Hernández - Portfolio'
    }
  }, [activeSection])

  // Track active section using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Trigger when section is in middle part of viewport
      threshold: 0.1,
    }

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          dispatch(setActiveSection(entry.target.id))
        }
      })
    }, observerOptions)

    const observeSections = () => {
      const sectionIds = ['hero', 'projects', 'about', 'stack', 'experience', 'cv', 'contact']
      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el) {
          sectionObserver.observe(el)
        }
      })
    }

    observeSections()

    // Observe changes inside <main> to detect lazy loaded sections when they render
    const mainEl = document.querySelector('main')
    let mutationObserver: MutationObserver | null = null
    if (mainEl) {
      mutationObserver = new MutationObserver(() => {
        observeSections()
      })
      mutationObserver.observe(mainEl, { childList: true, subtree: true })
    }

    return () => {
      sectionObserver.disconnect()
      if (mutationObserver) {
        mutationObserver.disconnect()
      }
    }
  }, [dispatch])

  return (
    <div className="min-h-screen bg-background text-on-surface scanlines">
      <Header />
      <MobileMenu />

      <main>{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
