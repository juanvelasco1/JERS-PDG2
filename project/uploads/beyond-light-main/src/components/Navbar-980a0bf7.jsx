import { useState, useEffect } from 'react'

export default function Navbar({ sections, activeSection }) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let last = 0
    const onScroll = () => {
      setHidden(window.scrollY > last && window.scrollY > 100)
      last = window.scrollY
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={hidden ? 'hidden' : ''}>
      <div className="nav-logo">BEYOND LIGHT</div>
      <ul className="nav-links">
        {sections.map(s => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={activeSection === s.id ? 'active' : ''}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
