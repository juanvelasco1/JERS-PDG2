import SectionReveal from '../components/SectionReveal'

export default function Wormhole() {
  return (
    <section className="scene-section" id="s6">
      <SectionReveal>
        <p className="label">Chapter 06 &mdash; Wormholes</p>
        <h2>Tunnels Through<br /><span className="dim">Spacetime</span></h2>
        <p>
          Einstein-Rosen bridges could theoretically connect distant points in spacetime,
          creating shortcuts across millions of light-years.
        </p>
        <p>
          An Alcubierre warp drive compresses space ahead and expands it behind, moving
          a bubble of flat spacetime faster than light &mdash; without violating relativity.
        </p>
        <ul className="detail-list">
          <li><strong>Chemical rocket to Andromeda:</strong> ~75 billion years</li>
          <li><strong>At light speed:</strong> 2.5 million years</li>
          <li><strong>Wormhole:</strong> Potentially instant</li>
        </ul>
      </SectionReveal>
    </section>
  )
}
