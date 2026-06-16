import { Icon } from "./Icons";

export function FeatureCard({ feature }) {
  return (
    <article className="feature-card">
      <div className="feature-icon">
        <Icon name={feature.icon} />
      </div>
      <h3>{feature.title}</h3>
      <p>{feature.body}</p>
    </article>
  );
}

export function InfrastructureSection({ content }) {
  return (
    <section className="section infrastructure-section" aria-labelledby="infrastructure-title">
      <div className="container">
        <div className="section-heading">
          <h2 id="infrastructure-title">{content.infrastructureTitle}</h2>
        </div>
        <div className="feature-grid">
          {content.features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
