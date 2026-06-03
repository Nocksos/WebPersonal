import { useState, useEffect, useRef } from 'react'
import { DownloadService } from '@/infrastructure/services/DownloadService'

export const CVDownload: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleDownload = (format: 'pdf' | 'html' | 'open-html') => {
    if (format === 'pdf') {
      DownloadService.downloadPDF()
    } else if (format === 'html') {
      DownloadService.downloadHTML()
    } else if (format === 'open-html') {
      DownloadService.openHTML()
    }
    setIsOpen(false)
  }

  return (
    <section id="cv" className="py-20 md:py-32 px-5 md:px-16 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Benefits & Button */}
        <div className="lg:col-span-7">
          <span className="font-mono text-xs text-secondary block mb-2 tracking-widest">
            {'// CURRICULUM_VITAE'}
          </span>
          <h2 className="font-grotesk font-semibold text-3xl md:text-4xl text-on-surface mb-6">
            15+ años de trayectoria en mi CV
          </h2>
          <p className="font-geist text-base text-on-surface-variant mb-6 leading-relaxed">
            Descarga mi CV completo en PDF o HTML. Contiene detalles completos de experiencia,
            tecnologías, certificaciones y logros cuantificables en gestión documental, cloud y
            seguridad.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4cd7f6"
                  strokeWidth="2"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="12" y1="13" x2="12" y2="19" />
                  <line x1="9" y1="16" x2="15" y2="16" />
                </svg>
              </div>
              <div>
                <div className="font-grotesk font-semibold text-on-surface mb-1">
                  Formato PDF optimizado
                </div>
                <div className="font-geist text-sm text-on-surface-variant">
                  Listo para imprimir o enviar a reclutadores
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-secondary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#94de2d"
                  strokeWidth="2"
                >
                  <path d="M9 11l3 3L22 4" />
                  <path d="M20 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h11" />
                </svg>
              </div>
              <div>
                <div className="font-grotesk font-semibold text-on-surface mb-1">
                  Contenido verificado
                </div>
                <div className="font-geist text-sm text-on-surface-variant">
                  Experiencia real, tecnologías concretas, métricas de impacto
                </div>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-3">
            <div className="relative inline-block" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="grad-btn text-on-primary px-5 py-3 font-mono text-sm font-bold rounded-sm flex items-center gap-2 glow-btn hover:brightness-110 transition-all"
              >
                DESCARGAR CV
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute left-0 mt-2 w-44 bg-surface-container rounded-sm border border-outline-variant p-2 shadow-lg z-10">
                  <button
                    onClick={() => handleDownload('pdf')}
                    className="w-full text-left px-3 py-2 font-mono text-xs text-on-surface hover:bg-surface/20 rounded-sm transition-colors"
                  >
                    Descargar PDF
                  </button>
                  <button
                    onClick={() => handleDownload('html')}
                    className="w-full text-left px-3 py-2 font-mono text-xs text-on-surface hover:bg-surface/20 rounded-sm transition-colors"
                  >
                    Descargar HTML
                  </button>
                  <button
                    onClick={() => handleDownload('open-html')}
                    className="w-full text-left px-3 py-2 font-mono text-xs text-on-surface hover:bg-surface/20 rounded-sm transition-colors"
                  >
                    Abrir HTML
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Summary & Contact Info */}
        <div className="lg:col-span-5">
          <div className="bg-surface-container-low border border-outline-variant rounded-sm p-8 space-y-6">
            <div className="border-b border-outline-variant pb-4">
              <div className="font-mono text-xs text-secondary tracking-widest mb-2">
                CONTENIDO DEL CV
              </div>
              <div className="space-y-2 font-geist text-sm text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span> 3 empresas principales (ENCAMINA, AVANTIA,
                  BITWARE)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Proyectos destacados (GADA-i, Bergé,
                  bitDoc)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span> 18+ tecnologías principales
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Certificaciones clave
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Logros cuantificables
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Idiomas (ES/EN)
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-mono text-xs text-on-surface-variant tracking-widest">
                CONTACTO
              </div>
              <a
                href="mailto:alvarohernandezgil@gmail.com"
                className="flex items-center gap-2 font-mono text-xs text-primary hover:text-secondary transition-colors"
              >
                → alvarohernandezgil@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/alvarohernandezgil/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-xs text-primary hover:text-secondary transition-colors"
              >
                → linkedin.com/in/alvarohernandezgil
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CVDownload
