# Post2Cart Logo & Icon Production Pack

Generated from the supplied Post2Cart logo board.

## Core colors

- Primary Orange: `#FF6A00`
- Deep Navy: `#0D1321`
- Slate Gray: `#2B2F3A`
- Light Gray: `#F2F4F7`
- White: `#FFFFFF`

## Typography note

The board specifies Inter:

- Heading 1: Inter Bold
- Heading 2: Inter SemiBold
- Body: Inter Regular

The Post2Cart wordmark itself behaves like a customized bold Inter/geometric sans lockup. Use the exported wordmark artwork rather than rebuilding the logo as live text.

## Recommended usage

### Website header / light background
Use:

- `01-logos-wordmarks/post2cart-logo-primary-horizontal.png`
- `01-logos-wordmarks/post2cart-wordmark-primary.png` when you only need the text mark
- `02-symbols/post2cart-symbol-primary.svg` for icon-only usage

### Dark background
Use:

- `01-logos-wordmarks/post2cart-logo-reversed-horizontal.png`
- `02-symbols/post2cart-symbol-for-dark.svg`

### Browser favicon / PWA
Use files from `03-web-favicon-pwa/` in your public root.

```html
<!-- Post2Cart favicons + PWA -->
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/svg+xml" href="/post2cart-symbol-primary.svg">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FF6A00">
<meta name="msapplication-TileColor" content="#0D1321">
<meta name="msapplication-config" content="/browserconfig.xml">
<meta name="theme-color" content="#0D1321">
```

### iOS app icon
Use:

`04-ios-appiconset/Assets.xcassets/AppIcon.appiconset/`

This default set uses the high-contrast dark app icon. A light alternative is also included:

`04-ios-appiconset/Assets.xcassets/AppIconPrimaryLight.appiconset/`

### Android app icon
Merge:

`05-android-adaptive-icon/app/src/main/res/`

into your Android project under:

`app/src/main/res/`

Default adaptive icon uses the dark/navy icon. A primary-light alternative layer/XML is included for manual swap.

## Production note

The icon/symbol has been rebuilt as scalable SVG. The wordmark has been extracted from the raster board and packaged as high-quality PNG/WebP plus SVG wrappers. For a future perfect master brand system, request the original vector source from the designer; do not recreate the wordmark with typed text unless you intentionally redesign it.
