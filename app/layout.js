import "./globals.css";

const title = "TOMNAP — See it. Tap it. Own it.";
const description =
  "TOMNAP is the commerce layer between social discovery and ownership, building infrastructure for social selling, creator commerce, and future social shopping experiences.";

export const metadata = {
  metadataBase: new URL("https://tomnap.com"),
  applicationName: "TOMNAP",
  title,
  description,
  keywords: [
    "TOMNAP",
    "social commerce infrastructure",
    "creator commerce",
    "social selling",
    "Post2Cart"
  ],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      tr: "/tr",
      ru: "/ru"
    }
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "TOMNAP",
    locale: "en_US",
    alternateLocale: ["tr_TR", "ru_RU"],
    images: [
      {
        url: "/brand/tomnap-og.png",
        width: 1200,
        height: 630,
        alt: "TOMNAP"
      }
    ],
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/brand/tomnap-og.png"]
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/symbols/tomnap-symbol-primary.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#00D4FF" }]
  },
  manifest: "/site.webmanifest"
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1320"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
