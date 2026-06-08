export default function SectionDots({ sections, activeSection }) {
  return (
    <div className="dots">
      {sections.map(s => (
        <button
          key={s.id}
          className={`dot ${activeSection === s.id ? 'active' : ''}`}
          onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
          title={s.label}
        />
      ))}
    </div>
  )
}
