import { Icon } from "./Icons";

export function PlatformVisionSection({ content }) {
  const { platformVision } = content;

  return (
    <section id="platform" className="section platform-section" aria-labelledby="platform-title">
      <div className="container platform-shell">
        <div className="platform-copy">
          <p className="section-label">{platformVision.label}</p>
          <h2 id="platform-title">{platformVision.title}</h2>
          <p>{platformVision.copy}</p>
        </div>
        <div className="platform-grid">
          {platformVision.cards.map((card) => (
            <article className="platform-card" key={card.title}>
              <div className="icon-tile">
                <Icon name={card.icon} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
