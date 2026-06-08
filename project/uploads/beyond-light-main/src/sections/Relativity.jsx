import SectionReveal from '../components/SectionReveal'

export default function Relativity() {
  return (
    <section className="scene-section" id="s5">
      <SectionReveal>
        <p className="label">Chapter 05 &mdash; Relativity</p>
        <h2>Curved<br /><span className="dim">Spacetime</span></h2>
        <p>
          Gravity is not a force &mdash; it's the curvature of spacetime caused by mass.
          Objects follow curved paths through this warped geometry, which we perceive
          as gravitational attraction.
        </p>
        <div className="formula">
          G<sub>&mu;&nu;</sub> + &Lambda;g<sub>&mu;&nu;</sub> = (8&pi;G/c<sup>4</sup>) T<sub>&mu;&nu;</sub>
        </div>
        <p>
          Einstein's field equations describe how matter tells spacetime how to curve,
          and curved spacetime tells matter how to move.
        </p>
        <div className="formula">E = mc&sup2;</div>
      </SectionReveal>
    </section>
  )
}
