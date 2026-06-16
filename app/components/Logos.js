export function LogoTomnap({ className = "", priority = false }) {
  return (
    <img
      className={`tomnap-logo ${className}`}
      src="/brand/tomnap-logo.svg"
      alt="TOMNAP"
      loading={priority ? "eager" : "lazy"}
    />
  );
}

export function LogoPost2Cart({ className = "" }) {
  return (
    <img
      className={`post2cart-logo ${className}`}
      src="/brand/post2cart-logo.svg"
      alt="Post2Cart by TOMNAP"
      loading="lazy"
    />
  );
}

export function LogoPost2CartLockup({ byline = "by TOMNAP" }) {
  return (
    <div className="post2cart-lockup" aria-label="Post2Cart by TOMNAP">
      <img className="post2cart-symbol" src="/brand/post2cart-icon.svg" alt="" aria-hidden="true" loading="lazy" />
      <div className="post2cart-wordmark-stack">
        <img className="post2cart-wordmark" src="/brand/post2cart-wordmark.svg" alt="Post2Cart" loading="lazy" />
        <span>{byline}</span>
      </div>
    </div>
  );
}
