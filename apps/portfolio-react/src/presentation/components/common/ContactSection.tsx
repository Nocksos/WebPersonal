import React, { useState } from 'react'

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('alvarohernandezgil@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-5 md:px-16 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column - Text Details */}
        <div className="lg:col-span-5">
          <span className="font-mono text-xs text-secondary block mb-2 tracking-widest">
            {'// CONTACTO'}
          </span>
          <h2 className="font-grotesk font-semibold text-3xl md:text-4xl text-on-surface mb-6">
            Hablemos de tu próximo proyecto.
          </h2>
          <p className="font-geist text-sm text-on-surface-variant leading-relaxed mb-6">
            Para garantizar la seguridad y evitar correos maliciosos o spam, he centralizado mis
            comunicaciones profesionales a través de **LinkedIn**. Es la forma más rápida y directa
            de contactar conmigo.
          </p>
          <p className="font-geist text-sm text-on-surface-variant leading-relaxed mb-8">
            Si representas a una empresa, tienes una propuesta de colaboración, o simplemente
            quieres intercambiar ideas técnicas, escríbeme y te responderé en menos de 24 horas.
          </p>

          <div className="hidden lg:flex flex-col gap-4">
            <div className="flex items-center gap-3 font-mono text-xs text-outline">
              <span
                className="w-2 h-2 rounded-full bg-secondary animate-pulse"
                aria-hidden="true"
              />
              CANAL DE COMUNICACIÓN SEGURO Y FILTRADO
            </div>
          </div>
        </div>

        {/* Right Column - Premium Action Cards */}
        <div className="lg:col-span-7 space-y-6">
          {/* LinkedIn Featured Card */}
          <div className="bg-surface-container border border-primary/30 p-8 rounded-sm glow-cyan flex flex-col justify-between min-h-[240px] transition-all hover:scale-[1.01] hover:border-primary duration-300 relative overflow-hidden group">
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-primary"
                    aria-hidden="true"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="font-mono text-xs text-primary font-bold tracking-widest">
                    LINKEDIN (RECOMENDADO)
                  </span>
                </div>
                <span className="font-mono text-[9px] bg-secondary/15 text-secondary border border-secondary/35 px-2 py-0.5 rounded-sm">
                  ACTIVO
                </span>
              </div>
              <h3 className="font-grotesk font-semibold text-xl text-on-surface mb-2">
                Conectar & Enviar Mensaje
              </h3>
              <p className="font-geist text-xs text-on-surface-variant leading-relaxed mb-6">
                Filtro activamente mis mensajes en LinkedIn. Perfecto para propuestas de empleo,
                proyectos freelance o networking directo.
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/alvarohernandezgil/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full grad-btn text-on-primary py-3 font-mono text-xs font-bold rounded-sm glow-btn hover:brightness-110 focus-visible:ring-2 focus-visible:ring-primary focus:outline-none transition-all text-center block"
            >
              INICIAR CHAT EN LINKEDIN →
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-surface-container-low border border-outline-variant p-6 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all hover:border-outline duration-300 group">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-surface-container-high rounded-sm flex items-center justify-center flex-shrink-0 border border-outline-variant group-hover:border-primary/50 transition-colors">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-on-surface-variant group-hover:text-primary transition-colors"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <h4 className="font-grotesk font-semibold text-sm text-on-surface mb-0.5">
                  Correo Electrónico
                </h4>
                <p className="font-mono text-xs text-on-surface-variant">
                  alvarohernandezgil@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <button
                onClick={handleCopyEmail}
                className="flex-1 md:flex-none border border-outline-variant hover:border-secondary hover:text-secondary text-on-surface-variant px-4 py-2 font-mono text-[10px] font-semibold rounded-sm transition-all text-center focus-visible:ring-1 focus-visible:ring-secondary focus:outline-none"
              >
                {copied ? '¡COPIADO! ✓' : 'COPIAR DIRECCIÓN'}
              </button>
              <a
                href="mailto:alvarohernandezgil@gmail.com"
                className="flex-1 md:flex-none bg-surface-container-high hover:bg-primary/15 border border-outline-variant hover:border-primary text-on-surface hover:text-primary px-4 py-2 font-mono text-[10px] font-semibold rounded-sm transition-all text-center focus-visible:ring-1 focus-visible:ring-primary focus:outline-none"
              >
                ENVIAR EMAIL
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="bg-surface-container-low border border-outline-variant p-6 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all hover:border-outline duration-300 group">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-surface-container-high rounded-sm flex items-center justify-center flex-shrink-0 border border-outline-variant group-hover:border-primary/50 transition-colors">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-on-surface-variant group-hover:text-primary transition-colors"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <div>
                <h4 className="font-grotesk font-semibold text-sm text-on-surface mb-0.5">
                  Repositorios de Código
                </h4>
                <p className="font-mono text-xs text-on-surface-variant">
                  github.com/alvarohernandezgil
                </p>
              </div>
            </div>

            <a
              href="https://github.com/alvarohernandezgil"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-surface-container-high hover:bg-primary/15 border border-outline-variant hover:border-primary text-on-surface hover:text-primary px-5 py-2 font-mono text-[10px] font-semibold rounded-sm transition-all text-center focus-visible:ring-1 focus-visible:ring-primary focus:outline-none"
            >
              VER PERFIL →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
