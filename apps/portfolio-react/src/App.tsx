import Layout from './presentation/components/layout/Layout'
import Hero from './presentation/components/pages/Hero'
import ProjectsCarousel from './presentation/components/common/ProjectsCarousel'
import About from './presentation/components/pages/About'
import TechStack from './presentation/components/pages/TechStack'
import Experience from './presentation/components/pages/Experience'
import CVDownload from './presentation/components/pages/CVDownload'
import ContactForm from './presentation/components/common/ContactForm'

function App() {
  return (
    <Layout>
      <Hero />
      <ProjectsCarousel />
      <About />
      <TechStack />
      <Experience />
      <CVDownload />
      <ContactForm />
    </Layout>
  )
}

export default App
