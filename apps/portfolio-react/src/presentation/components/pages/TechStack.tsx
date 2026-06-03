import { useState, useEffect, useRef } from 'react'

interface ProgressBarProps {
  label: string
  percentage: number
  colorClass?: string
  trackPercentageColorClass?: string
}

const ProgressBar = ({
  label,
  percentage,
  colorClass,
  trackPercentageColorClass,
}: ProgressBarProps) => {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setWidth(percentage)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [percentage])

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1">
        <span className="font-geist text-sm text-on-surface">{label}</span>
        <span className={`font-mono text-xs ${trackPercentageColorClass || 'text-primary'}`}>
          {percentage}%
        </span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${width}%`,
            background: colorClass || undefined,
          }}
        />
      </div>
    </div>
  )
}

export const TechStack = () => {
  const CLOUD_BADGES = [
    'AZURE',
    'TERRAFORM',
    'DOCKER',
    'SHAREPOINT',
    'AZURE AI',
    'AZURE SEARCH',
    'VIAFIRMA',
    'NINTEX',
    'KQL',
    'ISO/ENS',
  ]

  return (
    <section id="stack" className="py-20 md:py-32 bg-surface-container-lowest">
      <div className="px-5 md:px-16 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-secondary block mb-2 tracking-widest">
            {'// TECH_STACK'}
          </span>
          <h2 className="font-grotesk font-semibold text-3xl md:text-4xl text-on-surface">
            Herramientas del oficio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Frontend */}
          <div className="bg-surface-container p-6 rounded-sm border border-outline-variant">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4cd7f6"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18" />
                </svg>
              </div>
              <span className="font-mono text-xs text-primary font-bold tracking-widest">
                FRONTEND
              </span>
            </div>
            <div className="space-y-3">
              <ProgressBar label="Angular / SPFX" percentage={85} />
              <ProgressBar label="HTML5 / CSS3" percentage={95} />
              <ProgressBar label="JavaScript / jQuery" percentage={90} />
              <ProgressBar label="UX / Diseño" percentage={80} />
            </div>
          </div>

          {/* Backend */}
          <div className="bg-surface-container p-6 rounded-sm border border-outline-variant">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-secondary/10 border border-secondary/20 rounded-sm flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#94de2d"
                  strokeWidth="1.5"
                >
                  <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
                  <line x1="8" y1="16" x2="8.01" y2="16" />
                  <line x1="8" y1="20" x2="8.01" y2="20" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                  <line x1="12" y1="22" x2="12.01" y2="22" />
                  <line x1="16" y1="16" x2="16.01" y2="16" />
                  <line x1="16" y1="20" x2="16.01" y2="20" />
                </svg>
              </div>
              <span className="font-mono text-xs text-secondary font-bold tracking-widest">
                BACKEND
              </span>
            </div>
            <div className="space-y-3">
              <ProgressBar
                label="C# / .NET Core"
                percentage={98}
                colorClass="linear-gradient(90deg, #94de2d, #4cd7f6)"
                trackPercentageColorClass="text-secondary"
              />
              <ProgressBar
                label="SQL Server / MySQL"
                percentage={95}
                colorClass="linear-gradient(90deg, #94de2d, #4cd7f6)"
                trackPercentageColorClass="text-secondary"
              />
              <ProgressBar
                label="CosmosDB / NoSQL"
                percentage={90}
                colorClass="linear-gradient(90deg, #94de2d, #4cd7f6)"
                trackPercentageColorClass="text-secondary"
              />
              <ProgressBar
                label="REST APIs / LINQ"
                percentage={92}
                colorClass="linear-gradient(90deg, #94de2d, #4cd7f6)"
                trackPercentageColorClass="text-secondary"
              />
            </div>
          </div>

          {/* Cloud & Infrastructure */}
          <div className="bg-surface-container p-6 rounded-sm border border-outline-variant">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-tertiary/10 border border-tertiary/20 rounded-sm flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c0c1ff"
                  strokeWidth="1.5"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <span className="font-mono text-xs text-tertiary font-bold tracking-widest">
                CLOUD & INFRA
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {CLOUD_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="skill-badge bg-tertiary/10 text-tertiary border-tertiary/20"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
