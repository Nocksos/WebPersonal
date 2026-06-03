import { useState, useEffect, useRef } from 'react'

interface Project {
  id: string
  number: string
  title: string
  description: string
  tags: string[]
  isCaseStudy: boolean
  footerNote: string
}

const PROJECTS_DATA: Project[] = [
  {
    id: 'gada-i',
    number: '01',
    title: 'GADA-i',
    description:
      'Plataforma inteligente de gestión documental impulsada por IA. Clasificación automática, extracción de metadatos y procesamiento de contenido con Azure AI Search y RAG.',
    tags: ['AZURE AI', 'C#', 'COSMOSDB'],
    isCaseStudy: true,
    footerNote: 'Proyecto empresarial · Sin código disponible',
  },
  {
    id: 'berge-api',
    number: '02',
    title: 'Bergé API',
    description:
      'API inteligente basada en IA (Azure AI Foundry) para procesamiento automático de comunicaciones marítimas. Extrae metadatos estructurados de documentos no estructurados en tiempo real. Infraestructura IaC con Terraform.',
    tags: ['AZURE AI', 'TERRAFORM', 'REST API'],
    isCaseStudy: true,
    footerNote: 'Proyecto empresarial · Sin código disponible',
  },
  {
    id: 'bitdoc',
    number: '03',
    title: 'bitDoc',
    description:
      'Primer software en España en obtener ISO/IEC 25000 Nivel 5. Plataforma de auditoría, trazabilidad y certificación de procesos de calidad. Estándares: ISO 15504 SPICE Nivel 3, firmezas con Viafirma.',
    tags: ['.NET', 'ISO 25000 L5', 'VIAFIRMA'],
    isCaseStudy: true,
    footerNote: 'Proyecto empresarial · Sin código disponible',
  },
]

export const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)
  const [cardWidth, setCardWidth] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const totalCards = PROJECTS_DATA.length + 1 // +1 for the "Próximamente" card
  const maxIndex = Math.max(0, totalCards - visibleCount)

  const updateDimensions = () => {
    if (window.innerWidth >= 1024) {
      setVisibleCount(3)
    } else if (window.innerWidth >= 640) {
      setVisibleCount(2)
    } else {
      setVisibleCount(1)
    }

    if (trackRef.current) {
      const cardEl = trackRef.current.querySelector('.carousel-card')
      if (cardEl) {
        setCardWidth(cardEl.getBoundingClientRect().width)
      }
    }
  }

  useEffect(() => {
    updateDimensions()
    // Small delay to ensure browser layout is done
    const timer = setTimeout(updateDimensions, 100)

    window.addEventListener('resize', updateDimensions)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  // Recalculate card width whenever visibleCount or children render changes
  useEffect(() => {
    updateDimensions()
  }, [visibleCount])

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  const handleGoTo = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext()
      } else {
        handlePrev()
      }
    }
  }

  // Offset shifts by card width plus the gap (24px)
  const transformX = currentIndex * (cardWidth + 24)

  return (
    <section id="projects" className="py-20 md:py-32 bg-surface-container-lowest">
      <div className="px-5 md:px-16 max-w-[1200px] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="font-mono text-xs text-secondary block mb-2 tracking-widest">
              {'// SELECTED_WORKS'}
            </span>
            <h2 className="font-grotesk font-semibold text-3xl md:text-4xl text-on-surface">
              Proyectos Destacados
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-10 h-10 border border-outline-variant rounded-sm flex items-center justify-center transition-all ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed'
                  : 'text-on-surface-variant hover:border-primary hover:text-primary'
              }`}
              aria-label="Anterior"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className={`w-10 h-10 border border-outline-variant rounded-sm flex items-center justify-center transition-all ${
                currentIndex === maxIndex
                  ? 'opacity-40 cursor-not-allowed'
                  : 'text-on-surface-variant hover:border-primary hover:text-primary'
              }`}
              aria-label="Siguiente"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Wrapper */}
        <div className="overflow-hidden" id="carousel-wrapper">
          <div
            ref={trackRef}
            className="carousel-track"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ transform: `translateX(-${transformX}px)` }}
          >
            {/* Project Cards */}
            {PROJECTS_DATA.map((project) => (
              <div key={project.id} className="carousel-card group">
                <div className="bg-surface-container border border-outline-variant rounded-sm overflow-hidden transition-all duration-300 hover:border-primary hover:glow-cyan h-full flex flex-col">
                  <div className="aspect-video overflow-hidden relative bg-surface-container-high flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-tertiary/10" />
                    <div className="font-mono text-5xl font-bold text-primary/20 select-none">
                      {project.number}
                    </div>
                    <div className="absolute top-3 left-3 font-mono text-[10px] bg-surface-container-lowest/80 backdrop-blur-md px-2 py-1 border border-outline-variant text-on-surface">
                      {project.number}
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="demo-badge">CASO DE ESTUDIO</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-grotesk font-semibold text-xl text-on-surface mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-geist text-sm text-on-surface-variant mb-5 flex-grow leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="skill-badge bg-primary/10 text-primary border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 pt-4 border-t border-outline-variant">
                      <span className="font-mono text-xs text-on-surface-variant italic">
                        {project.footerNote}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Upcoming Card (Próximamente) */}
            <div className="carousel-card group">
              <div className="bg-surface-container border border-outline-variant border-dashed rounded-sm overflow-hidden transition-all duration-300 hover:border-primary/50 h-full flex flex-col items-center justify-center py-16 px-8 text-center">
                <div className="w-14 h-14 border border-dashed border-outline-variant rounded-sm flex items-center justify-center mb-5">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-on-surface-variant"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
                <p className="font-mono text-xs text-on-surface-variant mb-2 tracking-wider">
                  PRÓXIMAMENTE
                </p>
                <p className="font-geist text-sm text-on-surface-variant/60">
                  Añade tu próximo proyecto aquí
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Indicators (Dots) */}
        <div className="flex justify-center gap-2 mt-8" id="carousel-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => handleGoTo(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === currentIndex ? 'bg-primary w-4' : 'bg-outline-variant'
              }`}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-6 md:hidden">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`w-10 h-10 border border-outline-variant rounded-sm flex items-center justify-center transition-all ${
              currentIndex === 0 ? 'opacity-40' : 'text-on-surface-variant active:text-primary'
            }`}
            aria-label="Anterior"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className={`w-10 h-10 border border-outline-variant rounded-sm flex items-center justify-center transition-all ${
              currentIndex === maxIndex
                ? 'opacity-40'
                : 'text-on-surface-variant active:text-primary'
            }`}
            aria-label="Siguiente"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProjectsCarousel
