const common = {
  width: 30,
  height: 30,
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": "true"
};

export function Icon({ name }) {
  if (name === "eye") {
    return (
      <svg {...common}>
        <path
          d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (name === "tap") {
    return (
      <svg {...common}>
        <path
          d="M12 3v8m0 0 3-3m-3 3-3-3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M7 13v3a5 5 0 0 0 10 0v-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "own" || name === "lock") {
    return (
      <svg {...common}>
        <path d="M7 10V8a5 5 0 0 1 10 0v2" stroke="currentColor" strokeWidth="1.8" />
        <rect x="5" y="10" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
        {name === "own" ? (
          <path
            d="m9 16 2 2 4-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : null}
      </svg>
    );
  }

  if (name === "payment") {
    return (
      <svg {...common}>
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 10h18" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "merchant") {
    return (
      <svg {...common}>
        <path d="M4 18c2-4 14-4 16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="9" r="4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (name === "market") {
    return (
      <svg {...common}>
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="4" y="6" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 10h8M8 13h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
