import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Achievements from './sections/Achievements'
import Certificates from './sections/Certificates'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Container from './components/common/Container'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <section id="certificates" className="py-20">
          <Container>
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Certificates />
              </div>
              <div>
                <Education />
              </div>
            </div>
          </Container>
        </section>
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
