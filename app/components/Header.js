import { languageOptions } from "../lib/content";
import { LogoTomnap } from "./Logos";

function LanguageSwitcher({ locale, compact = false }) {
  return (
    <div className={`language-switcher ${compact ? "language-switcher-compact" : ""}`} aria-label="Language options">
      {languageOptions.map((language) => (
        <a
          key={language.code}
          className={language.code === locale ? "is-active" : ""}
          href={language.href}
          hrefLang={language.code}
          aria-current={language.code === locale ? "page" : undefined}
          title={language.name}
        >
          {language.label}
        </a>
      ))}
    </div>
  );
}

export function Header({ content, locale }) {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a href="#" className="brand-link" aria-label="TOMNAP home">
          <LogoTomnap priority />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {content.navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <LanguageSwitcher locale={locale} />
          <a className="button button-light button-compact" href="#access">
            {content.requestAccess}
          </a>
        </nav>
        <div className="mobile-nav-actions">
          <LanguageSwitcher locale={locale} compact />
          <a className="button button-light mobile-request" href="#access">
            {content.requestAccess}
          </a>
        </div>
      </div>
    </header>
  );
}
