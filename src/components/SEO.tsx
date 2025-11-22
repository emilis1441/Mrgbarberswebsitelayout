import { useEffect } from "react";
import { useLanguage } from "../utils/LanguageContext";

export function SEO() {
  const { language } = useLanguage();

  useEffect(() => {
    // Update lang attribute
    document.documentElement.lang = language;

    // Add favicons
    updateFavicons();

    // Meta tags based on language
    const metaData = {
      en: {
        title: "Mr.G Barbers & Academy | Premium Barbershop in Vilnius | Gediminas Kuica",
        description: "Experience premium men's grooming at Mr.G Barbers in Vilnius. Founded by award-winning international barber Gediminas Kuica. Professional barbering services and academy.",
        keywords: "barber Vilnius, barbershop Vilnius, men's haircut Vilnius, Gediminas Kuica, premium barbershop, barber academy, Mr.G Barbers",
        ogTitle: "Mr.G Barbers & Academy - Premium Barbershop in Vilnius",
        ogDescription: "Award-winning barbershop by Gediminas Kuica. Expert men's grooming and professional barber training academy in Vilnius.",
      },
      lt: {
        title: "Mr.G Barbers & Academy | Premium kirpykla Vilniuje | Gediminas Kuica",
        description: "Premium vyrų kirpykla Mr.G Barbers Vilniuje. Įkūrė apdovanotas tarptautinis kirpėjas Gediminas Kuica. Profesionalios kirpimo paslaugos ir akademija.",
        keywords: "kirpėjas Vilnius, kirpykla Vilnius, vyrų kirpimas Vilnius, Gediminas Kuica, premium kirpykla, kirpėjų akademija, Mr.G Barbers",
        ogTitle: "Mr.G Barbers & Academy - Premium kirpykla Vilniuje",
        ogDescription: "Apdovanota kirpykla, kurią įkūrė Gediminas Kuica. Ekspertiškas vyrų kirpimas ir profesionali kirpėjų mokymo akademija Vilniuje.",
      },
    };

    const meta = metaData[language];

    // Update title
    document.title = meta.title;

    // Update or create meta tags
    updateMetaTag("description", meta.description);
    updateMetaTag("keywords", meta.keywords);
    
    // Open Graph
    updateMetaTag("og:title", meta.ogTitle, "property");
    updateMetaTag("og:description", meta.ogDescription, "property");
    updateMetaTag("og:type", "business.business", "property");
    updateMetaTag("og:url", "https://www.mrgbarbers.lt", "property");
    updateMetaTag("og:locale", language === "lt" ? "lt_LT" : "en_US", "property");
    updateMetaTag("og:site_name", "Mr.G Barbers & Academy", "property");
    updateMetaTag("og:image", "https://www.mrgbarbers.lt/og-image.jpg", "property");
    updateMetaTag("og:image:width", "1200", "property");
    updateMetaTag("og:image:height", "630", "property");
    updateMetaTag("og:image:alt", meta.ogTitle, "property");
    
    // Twitter Card
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", meta.ogTitle);
    updateMetaTag("twitter:description", meta.ogDescription);
    updateMetaTag("twitter:image", "https://www.mrgbarbers.lt/og-image.jpg");
    
    // Additional meta tags
    updateMetaTag("author", "Gediminas Kuica");
    updateMetaTag("robots", "index, follow");
    updateMetaTag("viewport", "width=device-width, initial-scale=1.0");

    // Structured Data (JSON-LD)
    updateStructuredData(language);
  }, [language]);

  return null;
}

function updateMetaTag(name: string, content: string, attributeName: string = "name") {
  let element = document.querySelector(`meta[${attributeName}="${name}"]`) as HTMLMetaElement;
  
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attributeName, name);
    document.head.appendChild(element);
  }
  
  element.setAttribute("content", content);
}

function updateFavicons() {
  // Remove existing favicon links
  const existingLinks = document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"], link[rel="shortcut icon"]');
  existingLinks.forEach(link => link.remove());

  // Favicon definitions
  const favicons = [
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    { rel: "shortcut icon", href: "/favicon.ico" },
  ];

  // Add favicon links to head
  favicons.forEach(iconConfig => {
    const link = document.createElement("link");
    Object.entries(iconConfig).forEach(([key, value]) => {
      link.setAttribute(key, value);
    });
    document.head.appendChild(link);
  });
}

function updateStructuredData(language: string) {
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }

  const isLithuanian = language === "lt";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.mrgbarbers.lt/#business",
        "name": "Mr.G Barbers & Academy",
        "image": "https://www.mrgbarbers.lt/og-image.jpg",
        "description": isLithuanian 
          ? "Premium vyrų kirpykla ir kirpėjų akademija Vilniuje, įkurta apdovanoto tarptautinio kirpėjo Gedimino Kuicos."
          : "Premium men's barbershop and barber academy in Vilnius, founded by award-winning international barber Gediminas Kuica.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Žalgirio g. 131",
          "addressLocality": "Vilnius",
          "postalCode": "08217",
          "addressCountry": "LT"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "54.6872",
          "longitude": "25.2797"
        },
        "url": "https://www.mrgbarbers.lt",
        "telephone": "+370-xxx-xxxxx",
        "priceRange": "€€€",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "10:00",
            "closes": "20:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "10:00",
            "closes": "18:00"
          }
        ],
        "sameAs": [
          "https://www.instagram.com/mrg.barbers",
          "https://www.facebook.com/mrgbarbers",
          "https://www.fresha.com"
        ],
        "founder": {
          "@type": "Person",
          "name": "Gediminas Kuica",
          "jobTitle": isLithuanian ? "Meistras kirpėjas" : "Master Barber",
          "description": isLithuanian
            ? "Tarptautiniškai pripažintas ir apdovanotas kirpėjas"
            : "Internationally recognized and award-winning barber"
        }
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://www.mrgbarbers.lt/#academy",
        "name": "Mr.G Barbers Academy",
        "description": isLithuanian
          ? "Profesionali kirpėjų mokymo akademija Vilniuje"
          : "Professional barber training academy in Vilnius",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Žalgirio g. 131",
          "addressLocality": "Vilnius",
          "postalCode": "08217",
          "addressCountry": "LT"
        },
        "url": "https://www.mrgbarbers.lt"
      },
      {
        "@type": "WebSite",
        "@id": "https://www.mrgbarbers.lt/#website",
        "url": "https://www.mrgbarbers.lt",
        "name": "Mr.G Barbers & Academy",
        "inLanguage": language === "lt" ? "lt-LT" : "en-US",
        "publisher": {
          "@id": "https://www.mrgbarbers.lt/#business"
        }
      }
    ]
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
}