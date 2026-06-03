import { useState } from 'react'
import { Experience as DomainExperience, Education as DomainEducation } from '@/domain/types'

const WORK_DATA: DomainExperience[] = [
  {
    id: 'encamina',
    position: 'Cloud Solutions Developer / Team Leader',
    company: 'ENCAMINA',
    dates: '2018 – Presente',
    isCurrent: true,
    description:
      'Lideré arquitectura de extremo a extremo de GADA-i: plataforma de gestión documental con IA en Azure. Implementé clasificación inteligente y RAG sobre AI Search, reduciendo tratamiento manual ~80%. API inteligente para documentación marítima (Bergé) con Azure AI Foundry + Terraform. Framework de observabilidad con Application Insights (reducción de tiempo detección incidentes ~60%).',
    technologies: ['AZURE AI', 'RAG', 'TERRAFORM', 'ISO 27001'],
  },
  {
    id: 'avantia',
    position: 'Técnico SharePoint',
    company: 'AVANTIA',
    dates: '2016 – 2018',
    description:
      'Plataforma integral de gestión de documentación jurídica sobre SharePoint Online con Angular JS y SPFX. Implementé flujos documentales estructurados, control de acceso granular y seguimiento de expedientes. Integración con sistemas Infolex.',
    technologies: ['SHAREPOINT ONLINE', 'ANGULAR JS', 'SPFX'],
  },
  {
    id: 'bitware',
    position: 'Desarrollador y Analista Senior',
    company: 'BITWARE S.L.',
    dates: '2008 – 2016',
    description:
      'Desarrollador clave de bitDoc: primer software en España en obtener ISO/IEC 25000 Nivel 5 + ISO 15504 SPICE Nivel 3. Ciberseguridad para Administración Pública con Viafirma (firma digital). Optimicé procesamiento de datos de 18h → 8h (55% mejora throughput).',
  },
]

const EDUCATION_DATA: DomainEducation[] = [
  {
    id: 'fp',
    degree: 'Técnico Superior en Desarrollo de Aplicaciones (FP II)',
    institution: 'Salamanca · Formación Profesional',
    dates: 'Formación Profesional',
    description:
      'Especialización: Programador Especialista C#.NET (425 horas). Formación complementaria en UX para Devs, Arquitectura de Software y Gestión de Equipos.',
  },
  {
    id: 'certs',
    degree: 'Certificaciones Profesionales',
    institution: 'Scrum / Cloud / Seguridad',
    dates: 'Varios',
    tags: ['AZ-900 AZURE', 'SCRUM MASTER', 'ISO 27001', 'ISO 25000', 'ISO 15504 SPICE'],
  },
]

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'edu'>('work')

  const opacities = ['opacity-100', 'opacity-60', 'opacity-40']

  return (
    <section id="experience" className="py-20 md:py-32 px-5 md:px-16 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column */}
        <div className="lg:col-span-4">
          <span className="font-mono text-xs text-secondary block mb-2 tracking-widest">
            {'// TRAYECTORIA'}
          </span>
          <h2 className="font-grotesk font-semibold text-3xl md:text-4xl text-on-surface mb-6">
            Experiencia
            <br />& Formación
          </h2>
          <p className="font-geist text-sm text-on-surface-variant leading-relaxed">
            Un historial de trabajo en entornos de alto impacto, construyendo productos que importan
            con equipos que exigen excelencia.
          </p>
        </div>

        {/* Timeline Column */}
        <div className="lg:col-span-8">
          {/* Tabs Selector */}
          <div className="flex gap-1 mb-8 border-b border-outline-variant">
            <button
              onClick={() => setActiveTab('work')}
              className={`font-mono text-xs px-4 py-3 border-b-2 transition-colors ${
                activeTab === 'work'
                  ? 'text-primary border-primary'
                  : 'text-on-surface-variant border-transparent hover:text-primary'
              }`}
            >
              TRABAJO
            </button>
            <button
              onClick={() => setActiveTab('edu')}
              className={`font-mono text-xs px-4 py-3 border-b-2 transition-colors ${
                activeTab === 'edu'
                  ? 'text-primary border-primary'
                  : 'text-on-surface-variant border-transparent hover:text-primary'
              }`}
            >
              EDUCACIÓN
            </button>
          </div>

          {/* Work Timeline */}
          {activeTab === 'work' && (
            <div className="space-y-8">
              {WORK_DATA.map((item, index) => {
                const opacityClass = opacities[index] || 'opacity-40'
                const isLast = index === WORK_DATA.length - 1
                return (
                  <div key={item.id} className={`flex gap-5 relative ${opacityClass}`}>
                    <div className="flex flex-col items-center">
                      <div className="timeline-dot mt-1" />
                      {!isLast && <div className="w-px flex-grow bg-outline-variant mt-2" />}
                    </div>
                    <div className={!isLast ? 'pb-8' : ''}>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="font-grotesk font-semibold text-lg text-on-surface">
                          {item.position}
                        </h3>
                        {item.isCurrent && (
                          <span className="font-mono text-[10px] text-primary bg-primary/10 border border-primary/20 px-2 py-0.5">
                            ACTUAL
                          </span>
                        )}
                      </div>
                      <div className="font-mono text-xs text-on-surface-variant mb-3">
                        {item.company} · {item.dates}
                      </div>
                      <p className="font-geist text-sm text-on-surface-variant leading-relaxed">
                        {item.description}
                      </p>
                      {item.technologies && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {item.technologies.map((tag) => (
                            <span
                              key={tag}
                              className="skill-badge bg-primary/10 text-primary border-primary/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Education Timeline */}
          {activeTab === 'edu' && (
            <div className="space-y-8">
              {EDUCATION_DATA.map((item, index) => {
                const opacityClass = opacities[index] || 'opacity-40'
                const isLast = index === EDUCATION_DATA.length - 1
                return (
                  <div key={item.id} className={`flex gap-5 relative ${opacityClass}`}>
                    <div className="flex flex-col items-center">
                      <div className="timeline-dot mt-1" />
                      {!isLast && <div className="w-px flex-grow bg-outline-variant mt-2" />}
                    </div>
                    <div className={!isLast ? 'pb-8' : ''}>
                      <h3 className="font-grotesk font-semibold text-lg text-on-surface mb-1">
                        {item.degree}
                      </h3>
                      <div className="font-mono text-xs text-on-surface-variant mb-3">
                        {item.institution}
                      </div>
                      {item.description && (
                        <p className="font-geist text-sm text-on-surface-variant leading-relaxed">
                          {item.description}
                        </p>
                      )}
                      {item.tags && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="skill-badge bg-secondary/10 text-secondary border-secondary/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Experience
