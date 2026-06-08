import SectionReveal from '../components/SectionReveal'

export default function Time() {
  return (
    <section className="scene-section" id="s4">
      <SectionReveal>
        <p className="label">Chapter 04 &mdash; Time</p>
        <h2>The Fabric of<br /><span className="dim">Time</span></h2>
        <p>
          Time is not a universal constant. It bends, stretches, and flows at different
          rates depending on speed and gravity. Einstein wove time together with space
          into a single fabric: spacetime.
        </p>
        <p>
          Near massive objects, clocks tick slower. At near-light speeds, time dilates.
          GPS satellites must correct for relativity every single day.
        </p>
        <ul className="detail-list">
          <li><strong>Planck Time:</strong> 5.39 &times; 10⁻⁴⁴ s &mdash; smallest meaningful unit</li>
          <li><strong>Arrow of Time:</strong> Entropy always increases, giving time direction</li>
          <li><strong>At 99.9% c:</strong> 1 ship-year = 22 Earth-years</li>
        </ul>
      </SectionReveal>
    </section>
  )
}
