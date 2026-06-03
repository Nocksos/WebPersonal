import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { setMobileMenuOpen } from '@/store/slices/uiSlice'
import { DownloadService } from '@/infrastructure/services/DownloadService'

export const MobileMenu: React.FC = () => {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector((state) => state.ui.isMobileMenuOpen)
  const onClose = () => dispatch(setMobileMenuOpen(false))
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-black/60 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-72 z-[60] bg-surface-container-low border-l border-outline-variant flex flex-col p-8 gap-6 transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          id="close-menu"
          onClick={onClose}
          className="self-end text-on-surface-variant hover:text-primary transition-colors"
          aria-label="Close menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="flex flex-col gap-6 mt-4">
          <a
            href="#projects"
            onClick={onClose}
            className="font-mono text-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            {'// PROYECTOS'}
          </a>
          <a
            href="#about"
            onClick={onClose}
            className="font-mono text-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            {'// SOBRE_MÍ'}
          </a>
          <a
            href="#stack"
            onClick={onClose}
            className="font-mono text-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            {'// STACK'}
          </a>
          <a
            href="#experience"
            onClick={onClose}
            className="font-mono text-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            {'// EXPERIENCIA'}
          </a>
          <a
            href="#cv"
            onClick={onClose}
            className="font-mono text-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            {'// CV'}
          </a>
          <a
            href="#contact"
            onClick={onClose}
            className="font-mono text-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            {'// CONTACTO'}
          </a>
        </div>

        <a
          id="resume-btn-mobile"
          href="#"
          onClick={(e) => {
            e.preventDefault()
            onClose()
            DownloadService.downloadPDF()
          }}
          className="mt-auto grad-btn text-center text-on-primary py-3 font-mono text-xs font-bold rounded-sm hover:brightness-110 transition-all"
        >
          RESUME.PDF
        </a>
      </div>
    </>
  )
}

export default MobileMenu
