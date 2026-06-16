import { EarlyAccessForm } from "./EarlyAccessForm";

export function EarlyAccessSection({ content, locale }) {
  const { earlyAccess } = content;

  return (
    <section id="access" className="section access-section" aria-labelledby="access-title">
      <div className="container access-grid">
        <div className="access-copy">
          <p className="section-label">{earlyAccess.label}</p>
          <h2 id="access-title">{earlyAccess.title}</h2>
          <p>{earlyAccess.subtitle}</p>
          <p className="legal-copy">{earlyAccess.legal}</p>
        </div>
        <EarlyAccessForm content={content} locale={locale} />
      </div>
    </section>
  );
}
