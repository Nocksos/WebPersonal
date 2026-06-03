import { useState } from 'react'
import Header from './presentation/components/layout/Header'
import MobileMenu from './presentation/components/layout/MobileMenu'
import Hero from './presentation/components/pages/Hero'
import ProjectsCarousel from './presentation/components/common/ProjectsCarousel'
import About from './presentation/components/pages/About'
import TechStack from './presentation/components/pages/TechStack'
import Experience from './presentation/components/pages/Experience'
import CVDownload from './presentation/components/pages/CVDownload'
import ContactForm from './presentation/components/common/ContactForm'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-on-surface scanlines">
      <Header onMenuOpen={() => setIsMenuOpen(true)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main>
        <Hero />
        <ProjectsCarousel />
        <About />
        <TechStack />
        <Experience />
        <CVDownload />
        <ContactForm />
      </main>
    </div>
  )
}

export default App
