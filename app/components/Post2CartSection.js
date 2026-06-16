import { LogoPost2CartLockup } from "./Logos";

export function FlowStep({ step, index }) {
  return (
    <article className="flow-step">
      <span className="flow-number">{index + 1}</span>
      <h3>{step.title}</h3>
      <p>{step.body}</p>
    </article>
  );
}

export function Post2CartSection({ content }) {
  const { flowSteps, post2Cart } = content;

  return (
    <section id="post2cart" className="section product-section" aria-labelledby="post2cart-title">
      <div className="container product-card">
        <div className="product-copy">
          <p className="section-label">{post2Cart.label}</p>
          <LogoPost2CartLockup byline={post2Cart.byline} />
          <h2 id="post2cart-title" className="sr-only">
            {post2Cart.title}
          </h2>
          <h3>{post2Cart.slogan}</h3>
          <p>{post2Cart.description}</p>
        </div>
        <div className="flow-grid" aria-label="Post2Cart flow">
          {flowSteps.map((step, index) => (
            <FlowStep key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
