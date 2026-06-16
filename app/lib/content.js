export const defaultLocale = "en";

export const languageOptions = [
  { code: "en", label: "EN", name: "English", href: "/" },
  { code: "tr", label: "TR", name: "Türkçe", href: "/tr" },
  { code: "ru", label: "RU", name: "Русский", href: "/ru" }
];

const tomnapSlogan = ["See it.", "Tap it.", "Own it."];

const englishRoles = [
  { value: "Seller", label: "Seller" },
  { value: "Creator", label: "Creator" },
  { value: "Partner", label: "Partner" },
  { value: "Investor", label: "Investor" },
  { value: "Other", label: "Other" }
];

export const countryCodes = [
  "AF",
  "AX",
  "AL",
  "DZ",
  "AS",
  "AD",
  "AO",
  "AI",
  "AQ",
  "AG",
  "AR",
  "AM",
  "AW",
  "AU",
  "AT",
  "AZ",
  "BS",
  "BH",
  "BD",
  "BB",
  "BY",
  "BE",
  "BZ",
  "BJ",
  "BM",
  "BT",
  "BO",
  "BQ",
  "BA",
  "BW",
  "BV",
  "BR",
  "IO",
  "BN",
  "BG",
  "BF",
  "BI",
  "KH",
  "CM",
  "CA",
  "CV",
  "KY",
  "CF",
  "TD",
  "CL",
  "CN",
  "CX",
  "CC",
  "CO",
  "KM",
  "CG",
  "CD",
  "CK",
  "CR",
  "CI",
  "HR",
  "CU",
  "CW",
  "CY",
  "CZ",
  "DK",
  "DJ",
  "DM",
  "DO",
  "EC",
  "EG",
  "SV",
  "GQ",
  "ER",
  "EE",
  "SZ",
  "ET",
  "FK",
  "FO",
  "FJ",
  "FI",
  "FR",
  "GF",
  "PF",
  "TF",
  "GA",
  "GM",
  "GE",
  "DE",
  "GH",
  "GI",
  "GR",
  "GL",
  "GD",
  "GP",
  "GU",
  "GT",
  "GG",
  "GN",
  "GW",
  "GY",
  "HT",
  "HM",
  "VA",
  "HN",
  "HK",
  "HU",
  "IS",
  "IN",
  "ID",
  "IR",
  "IQ",
  "IE",
  "IM",
  "IL",
  "IT",
  "JM",
  "JP",
  "JE",
  "JO",
  "KZ",
  "KE",
  "KI",
  "KP",
  "KR",
  "KW",
  "KG",
  "LA",
  "LV",
  "LB",
  "LS",
  "LR",
  "LY",
  "LI",
  "LT",
  "LU",
  "MO",
  "MG",
  "MW",
  "MY",
  "MV",
  "ML",
  "MT",
  "MH",
  "MQ",
  "MR",
  "MU",
  "YT",
  "MX",
  "FM",
  "MD",
  "MC",
  "MN",
  "ME",
  "MS",
  "MA",
  "MZ",
  "MM",
  "NA",
  "NR",
  "NP",
  "NL",
  "NC",
  "NZ",
  "NI",
  "NE",
  "NG",
  "NU",
  "NF",
  "MK",
  "MP",
  "NO",
  "OM",
  "PK",
  "PW",
  "PS",
  "PA",
  "PG",
  "PY",
  "PE",
  "PH",
  "PN",
  "PL",
  "PT",
  "PR",
  "QA",
  "RE",
  "RO",
  "RU",
  "RW",
  "BL",
  "SH",
  "KN",
  "LC",
  "MF",
  "PM",
  "VC",
  "WS",
  "SM",
  "ST",
  "SA",
  "SN",
  "RS",
  "SC",
  "SL",
  "SG",
  "SX",
  "SK",
  "SI",
  "SB",
  "SO",
  "ZA",
  "GS",
  "SS",
  "ES",
  "LK",
  "SD",
  "SR",
  "SJ",
  "SE",
  "CH",
  "SY",
  "TW",
  "TJ",
  "TZ",
  "TH",
  "TL",
  "TG",
  "TK",
  "TO",
  "TT",
  "TN",
  "TR",
  "TM",
  "TC",
  "TV",
  "UG",
  "UA",
  "AE",
  "GB",
  "US",
  "UM",
  "UY",
  "UZ",
  "VU",
  "VE",
  "VN",
  "VG",
  "VI",
  "WF",
  "EH",
  "YE",
  "ZM",
  "ZW"
];

export const contentByLocale = {
  en: {
    navItems: [
      { label: "Vision", href: "#vision" },
      { label: "Post2Cart", href: "#post2cart" },
      { label: "Access", href: "#access" },
      { label: "Contact", href: "#contact" }
    ],
    languageLabel: "Language",
    requestAccess: "Request Access",
    hero: {
      brand: "TOMNAP",
      slogan: tomnapSlogan,
      support: "We build commerce infrastructure for the next generation of social selling.",
      badge: "Private access coming soon.",
      primaryCta: "Request Early Access",
      secondaryCta: "Explore Post2Cart",
      signals: ["Global-first", "Selected merchants", "Availability may vary by market"]
    },
    heroVisualCards: [
      {
        className: "hero-card-social",
        label: "Social moment",
        title: "Live post",
        body: "Purchase intent captured from content.",
        chip: "captured"
      },
      {
        className: "hero-card-checkout",
        label: "Tap",
        title: "Checkout",
        body: "Buyer moves into a fast payment path.",
        chip: "intent"
      },
      {
        className: "hero-card-inventory",
        label: "Inventory",
        title: "Stock locked",
        body: "Reservation reduces overselling during checkout.",
        chip: "reserved"
      },
      {
        className: "hero-card-order",
        label: "Order",
        title: "Paid order",
        body: "Trackable sale record for merchant operations.",
        chip: "confirmed"
      }
    ],
    post2Cart: {
      label: "First product",
      title: "Post2Cart by TOMNAP",
      byline: "by TOMNAP",
      slogan: "Turn social posts into paid orders.",
      description:
        "Create product links, lock stock, accept payments, and track every order from live streams, stories, posts, and creator campaigns."
    },
    flowSteps: [
      {
        title: "Social post / live stream",
        body: "Capture purchase intent from posts, stories, live streams, and creator campaigns."
      },
      {
        title: "Stock locked",
        body: "Reserve stock during checkout to reduce overselling."
      },
      {
        title: "Payment accepted",
        body: "Route buyers into online payment or controlled COD flows."
      },
      {
        title: "Trackable order",
        body: "Turn every social sale into a visible order record."
      }
    ],
    momentTitle: "From social moment to commerce",
    moments: [
      {
        icon: "eye",
        title: "See it.",
        body: "Capture purchase intent from social posts, live streams, stories, and creator campaigns."
      },
      {
        icon: "tap",
        title: "Tap it.",
        body: "Move buyers from content to checkout through fast, mobile-first flows."
      },
      {
        icon: "own",
        title: "Own it.",
        body: "Track the order, payment status, and merchant operations after checkout."
      }
    ],
    infrastructureTitle: "Built for social commerce infrastructure",
    features: [
      {
        icon: "flow",
        title: "Social-to-checkout flows",
        body: "Connect social traffic to fast checkout paths."
      },
      {
        icon: "payment",
        title: "Payment-ready architecture",
        body: "Connect local payment methods market by market."
      },
      {
        icon: "lock",
        title: "Inventory reservation",
        body: "Lock stock during checkout to reduce overselling."
      },
      {
        icon: "merchant",
        title: "Merchant access",
        body: "Review and onboard selected sellers."
      },
      {
        icon: "market",
        title: "Multi-market configuration",
        body: "Prepare country, currency, and language settings without overpromising availability."
      }
    ],
    earlyAccess: {
      label: "Request Early Access",
      title: "Request Early Access",
      subtitle: "Private access is opening for selected merchants, creators, and partners.",
      legal: "Checkout, payment, and delivery availability may vary by market.",
      success: "Thank you. We’ll review your request and contact selected applicants."
    },
    form: {
      hiddenCompanyWebsite: "Company website",
      labels: {
        name: "Name",
        workEmail: "Work email",
        companyName: "Company / Store name",
        country: "Country",
        socialProfileUrl: "Website or social profile",
        role: "I am a",
        message: "Message"
      },
      placeholders: {
        name: "Your name",
        workEmail: "you@company.com",
        companyName: "Company or store",
        country: "Select country",
        socialProfileUrl: "https:// or @profile",
        role: "Seller / Creator / Partner / Investor / Other",
        message: "Tell us what you want to build or sell..."
      },
      roles: englishRoles,
      submitting: "Sending...",
      submit: "Request Access",
      errors: {
        generic: "Please check the form and try again."
      }
    },
    footer: {
      slogan: "See it. Tap it. Own it.",
      copy: "Commerce infrastructure for social selling.",
      productHeading: "Product",
      contactHeading: "Contact",
      product: "Post2Cart",
      contact: "hello@tomnap.com",
      legal: "Checkout, payment, and delivery availability may vary by market.",
      copyright: "© 2026 TOMNAP. All rights reserved."
    }
  },
  tr: {
    navItems: [
      { label: "Vizyon", href: "#vision" },
      { label: "Post2Cart", href: "#post2cart" },
      { label: "Erişim", href: "#access" },
      { label: "İletişim", href: "#contact" }
    ],
    languageLabel: "Dil",
    requestAccess: "Erişim Talep Et",
    hero: {
      brand: "TOMNAP",
      slogan: tomnapSlogan,
      support: "Sosyal satışın yeni nesil ticaret altyapısını inşa ediyoruz.",
      badge: "Özel erişim yakında.",
      primaryCta: "Erken Erişim Talep Et",
      secondaryCta: "Post2Cart’ı Keşfet",
      signals: ["Global-first", "Seçili satıcılar", "Erişim pazara göre değişebilir"]
    },
    heroVisualCards: [
      {
        className: "hero-card-social",
        label: "Sosyal an",
        title: "Canlı post",
        body: "Satın alma niyeti içerikten yakalanır.",
        chip: "yakalandı"
      },
      {
        className: "hero-card-checkout",
        label: "Tap",
        title: "Checkout",
        body: "Alıcı hızlı ödeme akışına yönlenir.",
        chip: "niyet"
      },
      {
        className: "hero-card-inventory",
        label: "Stok",
        title: "Stok kilitlendi",
        body: "Rezervasyon checkout sırasında aşırı satışı azaltır.",
        chip: "rezerve"
      },
      {
        className: "hero-card-order",
        label: "Sipariş",
        title: "Ödenmiş sipariş",
        body: "Satış, operasyonlar için takip edilebilir kayda dönüşür.",
        chip: "onaylandı"
      }
    ],
    post2Cart: {
      label: "İlk ürün",
      title: "Post2Cart by TOMNAP",
      byline: "by TOMNAP",
      slogan: "Sosyal paylaşımları ödenmiş siparişlere dönüştür.",
      description:
        "Canlı yayınlardan, story’lerden, postlardan ve creator kampanyalarından gelen satışları ürün linki, stok kilidi, ödeme ve takip edilebilir sipariş akışına çevirin."
    },
    flowSteps: [
      {
        title: "Sosyal post / canlı yayın",
        body: "Post, story, canlı yayın ve creator kampanyalarından satın alma niyetini yakalayın."
      },
      {
        title: "Stok kilitlendi",
        body: "Checkout sırasında stoku rezerve ederek aşırı satış riskini azaltın."
      },
      {
        title: "Ödeme alındı",
        body: "Alıcıları online ödeme veya kontrollü COD akışlarına yönlendirin."
      },
      {
        title: "Takip edilebilir sipariş",
        body: "Her sosyal satışı görünür bir sipariş kaydına dönüştürün."
      }
    ],
    momentTitle: "Sosyal andan ticarete",
    moments: [
      {
        icon: "eye",
        title: "See it.",
        body: "Sosyal postlar, canlı yayınlar, story’ler ve creator kampanyalarından satın alma niyetini yakalayın."
      },
      {
        icon: "tap",
        title: "Tap it.",
        body: "Alıcıları içerikten hızlı, mobil öncelikli checkout akışlarına taşıyın."
      },
      {
        icon: "own",
        title: "Own it.",
        body: "Checkout sonrasında siparişi, ödeme durumunu ve satıcı operasyonlarını takip edin."
      }
    ],
    infrastructureTitle: "Sosyal ticaret altyapısı için tasarlandı",
    features: [
      {
        icon: "flow",
        title: "Sosyalden checkout’a akışlar",
        body: "Sosyal trafiği hızlı checkout yollarına bağlayın."
      },
      {
        icon: "payment",
        title: "Ödemeye hazır mimari",
        body: "Yerel ödeme yöntemlerini pazar bazında bağlayın."
      },
      {
        icon: "lock",
        title: "Stok rezervasyonu",
        body: "Checkout sırasında stoku kilitleyerek aşırı satışı azaltın."
      },
      {
        icon: "merchant",
        title: "Satıcı erişimi",
        body: "Seçili satıcıları değerlendirin ve onboard edin."
      },
      {
        icon: "market",
        title: "Çok pazar yapılandırması",
        body: "Ülke, para birimi ve dil ayarlarını erişim vaadini abartmadan hazırlayın."
      }
    ],
    earlyAccess: {
      label: "Erken Erişim",
      title: "Erken Erişim Talep Et",
      subtitle: "Özel erişim seçili satıcılar, creator’lar ve partnerler için açılıyor.",
      legal: "Checkout, ödeme ve teslimat özellikleri pazara göre değişebilir.",
      success: "Teşekkürler. Talebinizi inceleyip seçilen başvuru sahipleriyle iletişime geçeceğiz."
    },
    form: {
      hiddenCompanyWebsite: "Şirket web sitesi",
      labels: {
        name: "Ad",
        workEmail: "İş e-postası",
        companyName: "Şirket / Mağaza adı",
        country: "Ülke",
        socialProfileUrl: "Web sitesi veya sosyal profil",
        role: "Ben bir",
        message: "Mesaj"
      },
      placeholders: {
        name: "Adınız",
        workEmail: "ad@şirket.com",
        companyName: "Şirket veya mağaza",
        country: "Ülke seçin",
        socialProfileUrl: "https:// veya @profil",
        role: "Satıcı / Creator / Partner / Yatırımcı / Diğer",
        message: "Ne inşa etmek veya satmak istediğinizi anlatın..."
      },
      roles: [
        { value: "Seller", label: "Satıcı" },
        { value: "Creator", label: "Creator" },
        { value: "Partner", label: "Partner" },
        { value: "Investor", label: "Yatırımcı" },
        { value: "Other", label: "Diğer" }
      ],
      submitting: "Gönderiliyor...",
      submit: "Erişim Talep Et",
      errors: {
        generic: "Lütfen formu kontrol edip tekrar deneyin."
      }
    },
    footer: {
      slogan: "See it. Tap it. Own it.",
      copy: "Sosyal satış için ticaret altyapısı.",
      productHeading: "Ürün",
      contactHeading: "İletişim",
      product: "Post2Cart",
      contact: "hello@tomnap.com",
      legal: "Checkout, ödeme ve teslimat özellikleri pazara göre değişebilir.",
      copyright: "© 2026 TOMNAP. Tüm hakları saklıdır."
    }
  },
  ru: {
    navItems: [
      { label: "Видение", href: "#vision" },
      { label: "Post2Cart", href: "#post2cart" },
      { label: "Доступ", href: "#access" },
      { label: "Контакты", href: "#contact" }
    ],
    languageLabel: "Язык",
    requestAccess: "Запросить доступ",
    hero: {
      brand: "TOMNAP",
      slogan: tomnapSlogan,
      support: "Мы создаём коммерческую инфраструктуру для нового поколения социальных продаж.",
      badge: "Скоро откроется частный доступ.",
      primaryCta: "Запросить ранний доступ",
      secondaryCta: "Изучить Post2Cart",
      signals: ["Global-first", "Отобранные продавцы", "Доступность зависит от рынка"]
    },
    heroVisualCards: [
      {
        className: "hero-card-social",
        label: "Социальный момент",
        title: "Live-пост",
        body: "Покупательский интерес фиксируется из контента.",
        chip: "зафиксировано"
      },
      {
        className: "hero-card-checkout",
        label: "Tap",
        title: "Checkout",
        body: "Покупатель переходит в быстрый платёжный путь.",
        chip: "интерес"
      },
      {
        className: "hero-card-inventory",
        label: "Остатки",
        title: "Остаток зафиксирован",
        body: "Резерв снижает риск перепродажи во время checkout.",
        chip: "резерв"
      },
      {
        className: "hero-card-order",
        label: "Заказ",
        title: "Оплаченный заказ",
        body: "Продажа превращается в отслеживаемую запись.",
        chip: "подтверждено"
      }
    ],
    post2Cart: {
      label: "Первый продукт",
      title: "Post2Cart by TOMNAP",
      byline: "by TOMNAP",
      slogan: "Превращайте социальные публикации в оплаченные заказы.",
      description:
        "Создавайте ссылки на товары, фиксируйте остатки, принимайте платежи и отслеживайте заказы из live-трансляций, stories, постов и creator-кампаний."
    },
    flowSteps: [
      {
        title: "Социальный пост / live",
        body: "Фиксируйте покупательский интерес из постов, stories, live-трансляций и creator-кампаний."
      },
      {
        title: "Остаток зафиксирован",
        body: "Резервируйте остаток во время checkout, чтобы снизить риск перепродажи."
      },
      {
        title: "Платёж принят",
        body: "Направляйте покупателей в онлайн-оплату или контролируемые COD-потоки."
      },
      {
        title: "Отслеживаемый заказ",
        body: "Превращайте каждую социальную продажу в видимую запись заказа."
      }
    ],
    momentTitle: "От социального момента к коммерции",
    moments: [
      {
        icon: "eye",
        title: "See it.",
        body: "Фиксируйте покупательский интерес из социальных постов, live-трансляций, stories и creator-кампаний."
      },
      {
        icon: "tap",
        title: "Tap it.",
        body: "Переводите покупателей из контента в быстрые mobile-first checkout-потоки."
      },
      {
        icon: "own",
        title: "Own it.",
        body: "Отслеживайте заказ, статус оплаты и операции продавца после checkout."
      }
    ],
    infrastructureTitle: "Создано для инфраструктуры social commerce",
    features: [
      {
        icon: "flow",
        title: "Потоки social-to-checkout",
        body: "Подключайте социальный трафик к быстрым checkout-путям."
      },
      {
        icon: "payment",
        title: "Архитектура, готовая к платежам",
        body: "Подключайте локальные способы оплаты рынок за рынком."
      },
      {
        icon: "lock",
        title: "Резервирование остатков",
        body: "Фиксируйте остатки во время checkout, чтобы снизить перепродажи."
      },
      {
        icon: "merchant",
        title: "Доступ продавцов",
        body: "Проверяйте и подключайте отобранных продавцов."
      },
      {
        icon: "market",
        title: "Мульти-рыночная настройка",
        body: "Готовьте настройки страны, валюты и языка без завышенных обещаний доступности."
      }
    ],
    earlyAccess: {
      label: "Ранний доступ",
      title: "Запросить ранний доступ",
      subtitle: "Частный доступ открывается для отобранных продавцов, creator’ов и партнёров.",
      legal: "Доступность checkout, платежей и доставки может отличаться в зависимости от рынка.",
      success: "Спасибо. Мы рассмотрим заявку и свяжемся с отобранными заявителями."
    },
    form: {
      hiddenCompanyWebsite: "Сайт компании",
      labels: {
        name: "Имя",
        workEmail: "Рабочая почта",
        companyName: "Компания / магазин",
        country: "Страна",
        socialProfileUrl: "Сайт или социальный профиль",
        role: "Я",
        message: "Сообщение"
      },
      placeholders: {
        name: "Ваше имя",
        workEmail: "you@company.com",
        companyName: "Компания или магазин",
        country: "Выберите страну",
        socialProfileUrl: "https:// или @profile",
        role: "Продавец / Creator / Партнёр / Инвестор / Другое",
        message: "Расскажите, что хотите создать или продавать..."
      },
      roles: [
        { value: "Seller", label: "Продавец" },
        { value: "Creator", label: "Creator" },
        { value: "Partner", label: "Партнёр" },
        { value: "Investor", label: "Инвестор" },
        { value: "Other", label: "Другое" }
      ],
      submitting: "Отправка...",
      submit: "Запросить доступ",
      errors: {
        generic: "Проверьте форму и попробуйте ещё раз."
      }
    },
    footer: {
      slogan: "See it. Tap it. Own it.",
      copy: "Коммерческая инфраструктура для социальных продаж.",
      productHeading: "Продукт",
      contactHeading: "Контакты",
      product: "Post2Cart",
      contact: "hello@tomnap.com",
      legal: "Доступность checkout, платежей и доставки может отличаться в зависимости от рынка.",
      copyright: "© 2026 TOMNAP. Все права защищены."
    }
  }
};

export function getContent(locale = defaultLocale) {
  return contentByLocale[locale] || contentByLocale[defaultLocale];
}
