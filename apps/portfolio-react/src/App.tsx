import { useState } from 'react'
import Header from './presentation/components/layout/Header'
import MobileMenu from './presentation/components/layout/MobileMenu'
import Hero from './presentation/components/pages/Hero'
import ProjectsCarousel from './presentation/components/common/ProjectsCarousel'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-on-surface scanlines">
      <Header onMenuOpen={() => setIsMenuOpen(true)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main>
        <Hero />
        <ProjectsCarousel />
      </main>
    </div>
  )
}

export default App
