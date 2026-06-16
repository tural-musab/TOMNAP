# TOMNAP Logo & Icon System

Generated from the supplied TOMNAP logo board. The icon/symbol SVG files are true vector recreations. The wordmark SVG files are contour-traced approximations from the supplied raster board; for pixel-perfect wordmark usage, prefer the transparent PNG/WebP exports unless the original vector source becomes available.

## Primary palette

- Navy: `#0B1320`
- Cyan: `#00D4FF`
- Teal: `#14E0CB`
- Orange accent: `#FF6A00`
- Surface: `#F2F4F7`
- Gradient blue endpoint: `#0055FF`

## Recommended usage

- Light backgrounds: `tomnap-wordmark-primary.*` or `tomnap-symbol-primary.svg`
- Dark backgrounds: `tomnap-wordmark-white.*` or `tomnap-symbol-white.svg`
- App icons / PWA icons: use the opaque dark-background app icons.
- Browser tab favicon: default `favicon.ico`; use `favicon-app.ico` if you want a stronger app-style tab icon.

## Web install

Place everything in `03-web-favicon-pwa/` into your site's public root and paste the contents of `head-snippet.html` inside `<head>`.

## iOS

Use `04-ios-appiconset/Assets.xcassets/AppIcon.appiconset` in Xcode. Icons are opaque square assets; iOS applies corner radius automatically.

## Android

Merge `05-android-adaptive-icon/app/src/main/res` into your Android project's `app/src/main/res`.
