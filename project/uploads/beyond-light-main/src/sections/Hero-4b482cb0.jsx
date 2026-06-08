import SectionReveal from '../components/SectionReveal'

export default function Hero() {
  return (
    <section className="scene-section" id="s0">
      <SectionReveal>
        <p className="label">A Journey Through Space &amp; Time</p>
        <h2>Explore The<br /><span className="dim">Universe</span></h2>
        <p>
          From twinkling stars to black holes that devour light itself.
          Scroll to fly through the cosmos and uncover the greatest mysteries of existence.
        </p>
        <a href="#s1" className="hero-btn">Begin Journey &darr;</a>
      </SectionReveal>
      <div className="scroll-hint">
        SCROLL
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
