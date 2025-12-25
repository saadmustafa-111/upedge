export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "UpEdge Technologies",
    "alternateName": "upedgetechnologies",
    "url": "https://upedgetechnologies.shop",
    "logo": "https://upedgetechnologies.shop/favicon.png",
    "description": "Professional security cameras installer in Abbottabad, Islamabad, Lahore and across Pakistan. Premium Security & Surveillance (CCTV), Networking Solutions, and Solar Energy systems.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK",
      "addressLocality": "Abbottabad",
      "addressRegion": "Khyber Pakhtunkhwa"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Abbottabad"
      },
      {
        "@type": "City",
        "name": "Islamabad"
      },
      {
        "@type": "City",
        "name": "Rawalpindi"
      },
      {
        "@type": "City",
        "name": "Lahore"
      },
      {
        "@type": "City",
        "name": "Karachi"
      },
      {
        "@type": "City",
        "name": "Peshawar"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Urdu"]
    },
    "sameAs": [
      "https://www.facebook.com/upedgetechnologies",
      "https://www.instagram.com/upedgetechnologies"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "UpEdge Technologies",
    "image": "https://upedgetechnologies.shop/favicon.png",
    "description": "Leading security cameras installer in Abbottabad and provider of Security & Surveillance (CCTV), Networking Solutions, and Solar Energy systems across Pakistan",
    "url": "https://upedgetechnologies.shop",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK",
      "addressLocality": "Abbottabad",
      "addressRegion": "Khyber Pakhtunkhwa"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Pakistan"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "UpEdge Technologies",
    "url": "https://upedgetechnologies.shop",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://upedgetechnologies.shop/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Security & Surveillance Solutions",
    "provider": {
      "@type": "Organization",
      "name": "UpEdge Technologies"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Pakistan"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Security & Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CCTV & Surveillance Systems",
            "description": "Professional CCTV installation, IP cameras, and surveillance solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Networking Solutions",
            "description": "Structured cabling, network design, and IT infrastructure"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Solar Energy Systems",
            "description": "Solar panel installation, inverters, and renewable energy solutions"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
