import { useState, useEffect } from 'react'

interface StatCounterProps {
  target: number
  duration?: number
  suffix?: string
}

const StatCounter: React.FC<StatCounterProps> = ({ target, duration = 1500, suffix = '+' }) => {
  const [count, setCount] = useState(0)
  const [elementRef, setElementRef] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!elementRef) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          let start = 0
          const end = target
          if (start === end) return

          const totalMilliseconds = duration
          const incrementTime = 40
          const totalSteps = totalMilliseconds / incrementTime
          const step = Math.ceil(end / totalSteps)

          const timer = setInterval(() => {
            start = Math.min(start + step, end)
            setCount(start)
            if (start >= end) clearInterval(timer)
          }, incrementTime)

          observer.unobserve(elementRef)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(elementRef)
    return () => {
      if (elementRef) observer.unobserve(elementRef)
    }
  }, [elementRef, target, duration])

  return (
    <div ref={setElementRef} className="stat-number grad-text">
      {count}
      {suffix}
    </div>
  )
}

export const Hero: React.FC = () => {
  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const cvSection = document.querySelector('#cv')
    if (cvSection) {
      cvSection.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => {
        const cvMenu = document.getElementById('cv-format-menu')
        if (cvMenu) {
          cvMenu.classList.remove('hidden')
        }
      }, 600)
    }
  }

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-52 md:pb-36 px-5 md:px-16 max-w-[1200px] mx-auto overflow-hidden hero-grid"
    >
      {/* Ambient glows */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-tertiary/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left column */}
        <div className="lg:col-span-7 z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3 mb-6 bg-secondary/10 border border-secondary/20 rounded-sm">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="font-mono text-xs text-secondary tracking-widest">
              SISTEMA OPERATIVO
            </span>
          </div>

          <h1 className="font-grotesk font-bold text-4xl md:text-5xl lg:text-6xl text-on-surface mb-6 leading-tight">
            Diseñando <span className="grad-text">soluciones</span>
            <br />
            cloud a escala empresarial.
          </h1>

          <p className="font-geist text-base text-on-surface-variant mb-10 max-w-lg leading-relaxed">
            Tech Lead con 15 años de trayectoria en sistemas de gestión documental con IA,
            arquitecturas Azure y seguridad cloud. Experto en clasificación inteligente, RAG,
            Terraform e IaC. Especializado en cumplimiento ISO 27001/ENS, transformación digital y
            liderazgo ágil. Construyendo soluciones empresariales que escalan.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              id="hero-download-btn"
              href="#cv"
              onClick={handleDownloadClick}
              className="grad-btn text-on-primary px-7 py-3.5 font-mono text-xs font-bold rounded-sm flex items-center gap-2 glow-btn hover:brightness-110 transition-all"
            >
              DESCARGAR_CV
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="border border-primary text-primary px-7 py-3.5 font-mono text-xs font-bold rounded-sm hover:bg-primary/8 transition-all"
            >
              CONTACTAR
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14">
            <div>
              <StatCounter target={15} suffix="+" />
              <div className="font-mono text-[10px] text-on-surface-variant mt-1 tracking-widest">
                AÑOS EXP.
              </div>
            </div>
            <div className="w-px bg-outline-variant" />
            <div>
              <StatCounter target={50} suffix="+" />
              <div className="font-mono text-[10px] text-on-surface-variant mt-1 tracking-widest">
                PROYECTOS
              </div>
            </div>
            <div className="w-px bg-outline-variant" />
            <div>
              <StatCounter target={25} suffix="+" />
              <div className="font-mono text-[10px] text-on-surface-variant mt-1 tracking-widest">
                TECNOLOGÍAS
              </div>
            </div>
          </div>
        </div>

        {/* Right column (Terminal) */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0">
          <div className="bg-surface-container rounded-lg border border-outline-variant overflow-hidden glow-cyan">
            <div className="bg-surface-container-high px-4 py-3 flex items-center justify-between border-b border-outline-variant">
              <div className="flex gap-2">
                <div className="terminal-dot bg-[#FF5F56]" />
                <div className="terminal-dot bg-[#FFBD2E]" />
                <div className="terminal-dot bg-[#27C93F]" />
              </div>
              <span className="font-mono text-[11px] text-on-surface-variant">
                bash — portfolio.sh
              </span>
            </div>
            <div className="p-5 font-mono text-[13px] leading-7 space-y-1" id="terminal-content">
              <div className="text-primary-fixed-dim">
                $ <span className="text-on-surface">whoami</span>
              </div>
              <div className="text-secondary pl-2">→ Álvaro Hernández Gil</div>
              <div className="text-primary-fixed-dim mt-2">
                $ <span className="text-on-surface">cat expertise.json</span>
              </div>
              <div className="text-on-surface-variant pl-2 text-[12px] leading-relaxed">
                <span className="text-outline">{'{'}</span>
                <br />
                &nbsp;&nbsp;
                <span className="text-tertiary">{'"documental"'}</span>: [
                <span className="text-secondary">{'"RAG"'}</span>,{' '}
                <span className="text-secondary">{'"IA Search"'}</span>,{' '}
                <span className="text-secondary">{'"SharePoint"'}</span>],
                <br />
                &nbsp;&nbsp;
                <span className="text-tertiary">{'"backend"'}</span>: [
                <span className="text-secondary">{'"C#"'}</span>,{' '}
                <span className="text-secondary">{'".NET Core"'}</span>,{' '}
                <span className="text-secondary">{'"REST APIs"'}</span>],
                <br />
                &nbsp;&nbsp;
                <span className="text-tertiary">{'"cloud"'}</span>: [
                <span className="text-secondary">{'"Azure"'}</span>,{' '}
                <span className="text-secondary">{'"Terraform"'}</span>,{' '}
                <span className="text-secondary">{'"ISO 27001"'}</span>]
                <br />
                <span className="text-outline">{'}'}</span>
              </div>
              <div className="text-primary-fixed-dim mt-2">
                $ <span className="cursor-blink" />
              </div>
            </div>
          </div>
          <div className="absolute -top-8 -right-8 w-56 h-56 bg-primary/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

export default Hero
