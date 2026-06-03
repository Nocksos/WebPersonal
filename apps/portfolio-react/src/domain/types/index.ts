export interface Project {
  id: string | number
  title: string
  description: string
  tags: string[]
  category: 'live' | 'progress' | 'enterprise'
  demoUrl?: string
  codeUrl?: string
  image?: string
  number?: string
  isCaseStudy?: boolean
  footerNote?: string
}

export interface Skill {
  name: string
  percentage: number
  category: 'frontend' | 'backend' | 'cloud'
}

export interface Experience {
  company: string
  position: string
  dates: string
  description: string
  technologies?: string[]
  isCurrent?: boolean
}

export interface Education {
  degree: string
  institution: string
  dates: string
  description?: string
  tags?: string[]
}
