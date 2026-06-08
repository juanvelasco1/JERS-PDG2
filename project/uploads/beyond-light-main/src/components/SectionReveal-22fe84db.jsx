import { useRef, useEffect, useState } from 'react'

export default function SectionReveal({ children }) {
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.18 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={`content ${visible ? 'visible' : ''}`}>
      {children}
    </div>
  )
}
