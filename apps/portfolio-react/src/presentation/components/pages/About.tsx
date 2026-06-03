export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-5 md:px-16 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Bio terminal */}
        <div className="lg:col-span-5">
          <div className="bg-surface-container rounded-lg border border-outline-variant overflow-hidden">
            <div className="bg-surface-container-high px-4 py-3 flex items-center gap-2 border-b border-outline-variant">
              <div className="terminal-dot bg-[#FF5F56]" />
              <div className="terminal-dot bg-[#FFBD2E]" />
              <div className="terminal-dot bg-[#27C93F]" />
              <span className="font-mono text-[11px] text-on-surface-variant ml-2">
                about_me.md
              </span>
            </div>
            <div className="p-6 space-y-3 font-mono text-[13px]">
              <div>
                <span className="text-secondary"># </span>
                <span className="text-on-surface font-bold">Álvaro Hernández Gil</span>
              </div>
              <div className="text-on-surface-variant leading-relaxed text-[12px]">
                Senior Developer | Document Management Architect | Cloud Security
              </div>
              <div className="h-px bg-outline-variant my-3" />
              <div className="space-y-2 text-[12px]">
                <div>
                  <span className="text-primary">→ </span>
                  <span className="text-on-surface-variant">Localización: </span>
                  <span className="text-on-surface">España</span>
                </div>
                <div>
                  <span className="text-primary">→ </span>
                  <span className="text-on-surface-variant">Disponibilidad: </span>
                  <span className="text-secondary">ABIERTO_A_OPORTUNIDADES</span>
                </div>
                <div>
                  <span className="text-primary">→ </span>
                  <span className="text-on-surface-variant">Especialidad: </span>
                  <span className="text-on-surface">Azure / IA / Scrum</span>
                </div>
                <div>
                  <span className="text-primary">→ </span>
                  <span className="text-on-surface-variant">Email: </span>
                  <a
                    href="mailto:alvarohernandezgil@gmail.com"
                    className="text-primary hover:underline"
                  >
                    alvarohernandezgil@gmail.com
                  </a>
                </div>
              </div>
              <div className="h-px bg-outline-variant my-3" />
              <div className="text-[11px] text-on-surface-variant leading-relaxed">
                <span className="text-secondary">{'// '}</span>
                15 años en sistemas de gestión documental con IA. Especialista en Azure, RAG,
                seguridad (ISO 27001/ENS) y transformación digital. Construyendo soluciones que
                generan valor e impacto medible.
              </div>
            </div>
          </div>
        </div>

        {/* Text and Soft Skills */}
        <div className="lg:col-span-7">
          <span className="font-mono text-xs text-secondary block mb-2 tracking-widest">
            {'// SOBRE_MÍ'}
          </span>
          <h2 className="font-grotesk font-semibold text-3xl md:text-4xl text-on-surface mb-6">
            Arquitecto de soluciones
            <br />
            con mentalidad de ingeniero.
          </h2>
          <div className="space-y-4 font-geist text-base text-on-surface-variant leading-relaxed">
            <p>
              Mi carrera se ha construido en torno a la ingeniería de sistemas documentales
              complejos. Especialista en diseño e implantación de plataformas seguras y escalables
              con IA: clasificación automática, RAG sobre Azure AI Search, trazabilidad y
              cumplimiento normativo.
            </p>
            <p>
              Combino expertise técnica profunda en C#/.NET, Azure, Terraform e infraestructura
              cloud con gobernanza empresarial (ISO 27001, ENS, ISO 25000). Lideré equipos que
              transformaron procesos manuales en pipelines automatizados con IA — reduciendo carga
              operativa ~80% en gestión documental.
            </p>
          </div>

          {/* Soft skills cards */}
          <div className="grid grid-cols-2 gap-3 mt-8">
            <div className="bg-surface-container p-4 rounded-sm border border-outline-variant">
              <div className="text-primary mb-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <div className="font-mono text-xs text-on-surface font-bold mb-1">ARQUITECTURA</div>
              <div className="font-geist text-xs text-on-surface-variant">
                Diseño escalable desde el primer commit.
              </div>
            </div>

            <div className="bg-surface-container p-4 rounded-sm border border-outline-variant">
              <div className="text-secondary mb-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
                </svg>
              </div>
              <div className="font-mono text-xs text-on-surface font-bold mb-1">
                INFRAESTRUCTURA
              </div>
              <div className="font-geist text-xs text-on-surface-variant">
                IaC, cloud-native, resiliente.
              </div>
            </div>

            <div className="bg-surface-container p-4 rounded-sm border border-outline-variant">
              <div className="text-tertiary mb-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <div className="font-mono text-xs text-on-surface font-bold mb-1">LIDERAZGO ÁGIL</div>
              <div className="font-geist text-xs text-on-surface-variant">
                Scrum Master certificado, equipos de alto rendimiento.
              </div>
            </div>

            <div className="bg-surface-container p-4 rounded-sm border border-outline-variant">
              <div className="text-primary mb-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="font-mono text-xs text-on-surface font-bold mb-1">TRANSFORMACIÓN</div>
              <div className="font-geist text-xs text-on-surface-variant">
                Impulso de cambio digital en organizaciones.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
