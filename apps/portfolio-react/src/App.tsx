import { useState } from 'react'
import Header from './presentation/components/layout/Header'
import MobileMenu from './presentation/components/layout/MobileMenu'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-on-surface scanlines">
      <Header onMenuOpen={() => setIsMenuOpen(true)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Main Content Placeholder */}
      <main className="pt-20 px-5 md:px-16 max-w-[1200px] mx-auto">
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-grotesk font-bold mb-4">
            Diseñando <span className="grad-text">soluciones</span> cloud.
          </h1>
          <p className="text-on-surface-variant font-geist max-w-md">
            El entorno React + TypeScript + TailwindCSS está configurado y funcionando.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
