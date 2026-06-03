import { useState, useEffect } from 'react'
import { useAppDispatch } from '@/store/hooks'
import { setMobileMenuOpen } from '@/store/slices/uiSlice'

export const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 backdrop-blur-[16px] border-b border-outline-variant transition-all duration-300 ${
        isScrolled ? 'bg-surface/85' : 'bg-surface/50'
      }`}
    >
      <div className="flex justify-between items-center h-16 px-5 md:px-16 max-w-[1200px] mx-auto">
        <a href="#hero" className="font-grotesk font-bold tracking-tighter text-primary text-lg">
          ÁLVARO.DEV
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#projects"
            className="text-on-surface-variant font-geist text-sm hover:text-primary transition-colors"
          >
            Proyectos
          </a>
          <a
            href="#about"
            className="text-on-surface-variant font-geist text-sm hover:text-primary transition-colors"
          >
            Sobre mí
          </a>
          <a
            href="#stack"
            className="text-on-surface-variant font-geist text-sm hover:text-primary transition-colors"
          >
            Stack
          </a>
          <a
            href="#experience"
            className="text-on-surface-variant font-geist text-sm hover:text-primary transition-colors"
          >
            Experiencia
          </a>
          <a
            href="#cv"
            className="text-on-surface-variant font-geist text-sm hover:text-primary transition-colors"
          >
            CV
          </a>
          <a
            href="#contact"
            className="text-on-surface-variant font-geist text-sm hover:text-primary transition-colors"
          >
            Contacto
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            id="resume-btn-desktop"
            href="#"
            className="hidden md:inline-flex grad-btn text-on-primary px-5 py-2 font-mono text-xs font-bold rounded-sm glow-btn hover:brightness-110 transition-all"
          >
            RESUME.PDF
          </a>
          <button
            id="menu-btn"
            onClick={() => dispatch(setMobileMenuOpen(true))}
            className="md:hidden p-2 text-on-surface-variant hover:text-primary transition-colors"
            aria-label="Menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
