import { useState } from 'react'
import Header from './presentation/components/layout/Header'
import MobileMenu from './presentation/components/layout/MobileMenu'
import Hero from './presentation/components/pages/Hero'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-on-surface scanlines">
      <Header onMenuOpen={() => setIsMenuOpen(true)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
