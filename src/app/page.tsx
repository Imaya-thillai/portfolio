import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import CursorGlow from '@/components/CursorGlow'

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider max-w-[1440px] w-full mx-auto" />
        <About />
        <div className="section-divider max-w-[1440px] w-full mx-auto" />
        <Skills />
        <div className="section-divider max-w-[1440px] w-full mx-auto" />
        <Projects />
        <div className="section-divider max-w-[1440px] w-full mx-auto" />
        <Experience />
        <div className="section-divider max-w-[1440px] w-full mx-auto" />
        <Education />
        <div className="section-divider max-w-[1440px] w-full mx-auto" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
