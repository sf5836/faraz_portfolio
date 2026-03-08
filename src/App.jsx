import { Toaster } from 'react-hot-toast'
import LoadingScreen from './components/ui/LoadingScreen'
import CustomCursor from './components/layout/CustomCursor'
import ScrollProgress from './components/ui/ScrollProgress'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Certifications from './components/sections/Certifications'
import Stats from './components/sections/Stats'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import './styles/globals.css'

export default function App() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Toaster position="bottom-right" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
