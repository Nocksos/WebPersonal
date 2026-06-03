import { lazy, Suspense } from 'react'
import Layout from './presentation/components/layout/Layout'
import Hero from './presentation/components/pages/Hero'

const ProjectsCarousel = lazy(() => import('./presentation/components/common/ProjectsCarousel'))
const About = lazy(() => import('./presentation/components/pages/About'))
const TechStack = lazy(() => import('./presentation/components/pages/TechStack'))
const Experience = lazy(() => import('./presentation/components/pages/Experience'))
const CVDownload = lazy(() => import('./presentation/components/pages/CVDownload'))
const ContactForm = lazy(() => import('./presentation/components/common/ContactForm'))

const SectionSpinner: React.FC = () => (
  <div
    className="flex justify-center items-center py-20 min-h-[200px]"
    data-testid="section-spinner"
  >
    <svg
      className="animate-spin h-8 w-8 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  </div>
)

function App() {
  return (
    <Layout>
      <Hero />
      <Suspense fallback={<SectionSpinner />}>
        <ProjectsCarousel />
        <About />
        <TechStack />
        <Experience />
        <CVDownload />
        <ContactForm />
      </Suspense>
    </Layout>
  )
}

export default App
