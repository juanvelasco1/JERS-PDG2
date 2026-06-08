import { useRef, useEffect, useState } from 'react'

export default function AnimatedNumber({ target, className }) {
  const ref = useRef()
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const isFloat = target % 1 !== 0
        const dur = 1500
        const start = performance.now()
        function tick(now) {
          const p = Math.min((now - start) / dur, 1)
          const ease = 1 - Math.pow(1 - p, 3)
          setValue(isFloat ? (ease * target).toFixed(1) : Math.round(ease * target))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return <div ref={ref} className={className}>{value}</div>
}
