import SectionReveal from '../components/SectionReveal'

export default function SolarSystem() {
  return (
    <section className="scene-section" id="s3">
      <SectionReveal>
        <p className="label">Chapter 03 &mdash; Solar System</p>
        <h2>Our Cosmic<br /><span className="dim">Neighborhood</span></h2>
        <p>
          A central star with planets orbiting in near-perfect ellipses. Our solar system
          formed 4.6 billion years ago from a collapsing cloud of hydrogen.
        </p>
        <p>
          From rocky inner worlds to gas giants with rings, moons, and asteroid belts &mdash;
          each orbit tells a story of gravitational balance.
        </p>
        <ul className="detail-list">
          <li><strong>Sun:</strong> Contains 99.86% of the system's mass</li>
          <li><strong>Orbital speeds:</strong> Earth moves at 107,000 km/h</li>
          <li><strong>Scale:</strong> Light takes 5.5 hours to cross the system</li>
        </ul>
      </SectionReveal>
    </section>
  )
}
