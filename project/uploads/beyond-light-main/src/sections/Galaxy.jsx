import SectionReveal from '../components/SectionReveal'

export default function Galaxy() {
  return (
    <section className="scene-section" id="s2">
      <SectionReveal>
        <p className="label">Chapter 02 &mdash; Galaxies</p>
        <h2>Spiral<br /><span className="dim">Galaxy</span></h2>
        <p>
          A galaxy is a gravitationally bound system of stars, gas, dust, and dark matter.
          The Milky Way contains 200&ndash;400 billion stars arranged in elegant spiral arms.
        </p>
        <p>
          There are over 2 trillion galaxies in the observable universe. They come in spirals,
          ellipticals, and irregular shapes &mdash; cosmic cities of stars.
        </p>
        <ul className="detail-list">
          <li><strong>Milky Way:</strong> 100,000 light-years across, ~200B stars</li>
          <li><strong>Andromeda:</strong> Our nearest large neighbor, 2.5M light-years away</li>
          <li><strong>Dark Matter:</strong> 85% of galactic mass is invisible</li>
        </ul>
      </SectionReveal>
    </section>
  )
}
