import SectionReveal from '../components/SectionReveal'

export default function Beyond() {
  return (
    <section className="scene-section" id="s8">
      <SectionReveal>
        <p className="label">Chapter 08 &mdash; Beyond</p>
        <h2>What Lies<br /><span className="dim">Beyond</span></h2>
        <p>
          Our universe may be one of infinitely many. String theory suggests up to
          10<sup>500</sup> possible universes, each with different physical constants.
        </p>
        <p>
          In ~10<sup>100</sup> years, the universe may reach maximum entropy &mdash; heat
          death. No energy gradients, no processes, no life. The ultimate fate of everything.
        </p>
        <ul className="detail-list">
          <li><strong>Multiverse:</strong> Infinite parallel realities with different physics</li>
          <li><strong>Quantum Gravity:</strong> The missing theory unifying GR and QM</li>
          <li><strong>Simulation?:</strong> Statistically, we may be inside one</li>
        </ul>
      </SectionReveal>
    </section>
  )
}
