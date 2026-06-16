import { LogoTomnap } from "./Logos";

export function Footer({ content }) {
  const { footer } = content;

  return (
    <footer id="contact" className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" aria-label="TOMNAP home">
              <LogoTomnap />
            </a>
            <p>{footer.slogan}</p>
            <p>{footer.copy}</p>
          </div>
          <div>
            <h2>{footer.productHeading}</h2>
            <a href="#post2cart">{footer.product}</a>
          </div>
          <div>
            <h2>{footer.contactHeading}</h2>
            <a href={`mailto:${footer.contact}`}>{footer.contact}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{footer.legal}</span>
          <span>{footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
