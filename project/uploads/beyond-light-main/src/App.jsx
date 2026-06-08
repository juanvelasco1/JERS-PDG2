import { useState, useEffect, useCallback } from 'react'
import Navbar from './components/Navbar'
import ProgressBar from './components/ProgressBar'
import SectionDots from './components/SectionDots'
import Scene3D from './components/Scene3D'
import Hero from './sections/Hero'
import Stars from './sections/Stars'
import Galaxy from './sections/Galaxy'
import SolarSystem from './sections/SolarSystem'
import Time from './sections/Time'
import Relativity from './sections/Relativity'
import Wormhole from './sections/Wormhole'
import BlackHole from './sections/BlackHole'
import Beyond from './sections/Beyond'

const sections = [
  { id: 's0', label: 'Home' },
  { id: 's1', label: 'Stars' },
  { id: 's2', label: 'Galaxy' },
  { id: 's3', label: 'Solar System' },
  { id: 's4', label: 'Time' },
  { id: 's5', label: 'Relativity' },
  { id: 's6', label: 'Wormhole' },
  { id: 's7', label: 'Black Hole' },
  { id: 's8', label: 'Beyond' },
]

export default function App() {
  const [activeSection, setActiveSection] = useState('s0')

  const handleScroll = useCallback(() => {
    const sectionEls = sections.map(s => document.getElementById(s.id))
    let current = 's0'
    for (const el of sectionEls) {
      if (el && window.scrollY >= el.offsetTop - 300) {
        current = el.id
      }
    }
    setActiveSection(current)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <>
      <ProgressBar />
      <Scene3D />
      <Navbar sections={sections} activeSection={activeSection} />
      <SectionDots sections={sections} activeSection={activeSection} />

      <Hero />
      <Stars />
      <Galaxy />
      <SolarSystem />
      <Time />
      <Relativity />
      <Wormhole />
      <BlackHole />
      <Beyond />

      <footer>
        <p>Beyond Light &mdash; A journey through spacetime.</p>
      </footer>
    </>
  )
}
