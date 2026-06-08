import SectionReveal from '../components/SectionReveal'
import AnimatedNumber from '../components/AnimatedNumber'

export default function Stars() {
  return (
    <section className="scene-section" id="s1">
      <SectionReveal>
        <p className="label">Chapter 01 &mdash; Stars</p>
        <h2>200 Billion<br /><span className="dim">Trillion Stars</span></h2>
        <p>
          You're flying through a field of thousands of stars. Each point of light is a sun,
          many with their own planets. Our own Sun is an average yellow dwarf &mdash; unremarkable
          among the vastness.
        </p>
        <p>
          Stars are born in clouds of gas and dust, fuse hydrogen into helium for billions of
          years, then die as white dwarfs, neutron stars, or black holes.
        </p>
        <div className="facts">
          <div className="fact-box">
            <AnimatedNumber target={200} className="num" />
            <div className="lbl">Billion Trillion Stars</div>
          </div>
          <div className="fact-box">
            <AnimatedNumber target={93} className="num" />
            <div className="lbl">Billion ly Wide</div>
          </div>
          <div className="fact-box">
            <AnimatedNumber target={13.8} className="num" />
            <div className="lbl">Billion Years Old</div>
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}
