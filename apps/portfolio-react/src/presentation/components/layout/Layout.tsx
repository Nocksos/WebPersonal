import Header from './Header'
import MobileMenu from './MobileMenu'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-on-surface scanlines">
      <Header />
      <MobileMenu />

      <main>{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
