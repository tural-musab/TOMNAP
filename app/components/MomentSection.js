import { Icon } from "./Icons";

export function MomentSection({ content }) {
  return (
    <section id="vision" className="section moment-section" aria-labelledby="moment-title">
      <div className="container">
        <div className="section-heading">
          <h2 id="moment-title">{content.momentTitle}</h2>
        </div>
        <div className="moment-grid">
          {content.moments.map((moment) => (
            <article className="moment-card" key={moment.title}>
              <div className="icon-tile">
                <Icon name={moment.icon} />
              </div>
              <div>
                <h3>{moment.title}</h3>
                <p>{moment.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
