import SectionReveal from '../components/SectionReveal'

export default function BlackHole() {
  return (
    <section className="scene-section" id="s7">
      <SectionReveal>
        <p className="label">Chapter 07 &mdash; Black Holes</p>
        <h2>Event<br /><span className="dim">Horizon</span></h2>
        <p>
          When matter is compressed beyond a critical density, spacetime curves so extremely
          that nothing &mdash; not even light &mdash; can escape. The boundary is the event horizon.
        </p>
        <p>
          At the center lies a singularity: a point of theoretically infinite density where
          the known laws of physics break down entirely.
        </p>
        <ul className="detail-list">
          <li><strong>Sagittarius A*:</strong> 4 million solar masses at the Milky Way's center</li>
          <li><strong>M87*:</strong> First photographed black hole, 6.5 billion solar masses</li>
          <li><strong>Hawking radiation:</strong> Black holes slowly evaporate over eons</li>
        </ul>
      </SectionReveal>
    </section>
  )
}
