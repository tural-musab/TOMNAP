import { LogoTomnap } from "./Logos";

function HeroVisualCard({ card }) {
  return (
    <article className={`hero-visual-card ${card.className}`}>
      <span>{card.label}</span>
      <strong>{card.title}</strong>
      <p>{card.body}</p>
      <em>{card.chip}</em>
    </article>
  );
}

export function HeroSection({ content }) {
  const { hero, heroVisualCards } = content;

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="access-badge">
            <span aria-hidden="true" />
            {hero.badge}
          </span>
          <h1 id="hero-title" className="hero-brand-title">
            <span className="sr-only">{hero.brand}</span>
            <LogoTomnap className="hero-logo" priority />
          </h1>
          <p className="hero-slogan" aria-label={hero.slogan.join(" ")}>
            <span>{hero.slogan[0]}</span>
            <span className="cyan-word">{hero.slogan[1]}</span>
            <span>{hero.slogan[2]}</span>
          </p>
          <p className="hero-lead">{hero.support}</p>
          <div className="hero-actions">
            <a className="button button-cyan" href="#access">
              {hero.primaryCta}
            </a>
            <a className="button button-ghost" href="#post2cart">
              {hero.secondaryCta}
            </a>
          </div>
          <div className="hero-signals" aria-label="TOMNAP access notes">
            {hero.signals.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>
        </div>
        <div className="commerce-visual" aria-label="Generic social moment to checkout flow">
          <div className="visual-line line-one" />
          <div className="visual-line line-two" />
          <div className="visual-line line-three" />
          <div className="visual-line line-four" />
          <div className="tap-ring" aria-hidden="true" />
          {heroVisualCards.map((card) => (
            <HeroVisualCard key={card.label} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
