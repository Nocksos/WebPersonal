import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setMobileMenuOpen } from '@/store/slices/uiSlice'
import { DownloadService } from '@/infrastructure/services/DownloadService'

export const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const activeSection = useAppSelector((state) => state.ui.activeSection)
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
        <a
          href="#hero"
          className="font-grotesk font-bold tracking-tighter text-primary text-lg focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded-sm px-1"
        >
          ÁLVARO.DEV
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#projects"
            className={`font-geist text-sm hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded-sm px-1 ${
              activeSection === 'projects'
                ? 'text-primary font-semibold'
                : 'text-on-surface-variant'
            }`}
          >
            Proyectos
          </a>
          <a
            href="#about"
            className={`font-geist text-sm hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded-sm px-1 ${
              activeSection === 'about' ? 'text-primary font-semibold' : 'text-on-surface-variant'
            }`}
          >
            Sobre mí
          </a>
          <a
            href="#stack"
            className={`font-geist text-sm hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded-sm px-1 ${
              activeSection === 'stack' ? 'text-primary font-semibold' : 'text-on-surface-variant'
            }`}
          >
            Stack
          </a>
          <a
            href="#experience"
            className={`font-geist text-sm hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded-sm px-1 ${
              activeSection === 'experience'
                ? 'text-primary font-semibold'
                : 'text-on-surface-variant'
            }`}
          >
            Experiencia
          </a>
          <a
            href="#cv"
            className={`font-geist text-sm hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded-sm px-1 ${
              activeSection === 'cv' ? 'text-primary font-semibold' : 'text-on-surface-variant'
            }`}
          >
            CV
          </a>
          <a
            href="#contact"
            className={`font-geist text-sm hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded-sm px-1 ${
              activeSection === 'contact' ? 'text-primary font-semibold' : 'text-on-surface-variant'
            }`}
          >
            Contacto
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            id="resume-btn-desktop"
            href="#"
            onClick={(e) => {
              e.preventDefault()
              DownloadService.downloadPDF()
            }}
            className="hidden md:inline-flex grad-btn text-on-primary px-5 py-2 font-mono text-xs font-bold rounded-sm glow-btn hover:brightness-110 focus-visible:ring-2 focus-visible:ring-primary focus:outline-none transition-all"
          >
            RESUME.PDF
          </a>
          <button
            id="menu-btn"
            onClick={() => dispatch(setMobileMenuOpen(true))}
            className="md:hidden p-2 text-on-surface-variant hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded-sm"
            aria-label="Menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
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
