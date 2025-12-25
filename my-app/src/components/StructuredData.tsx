export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "UpEdge Technologies",
    "alternateName": "upedgetechnologies",
    "url": "https://upedgetechnologies.shop",
    "logo": "https://upedgetechnologies.shop/upedge.png",
    "description": "Premium Security & Surveillance (CCTV), Networking Solutions, and Solar Energy systems in Pakistan",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK",
      "addressLocality": "Pakistan"
    },
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
    "image": "https://upedgetechnologies.shop/upedge.png",
    "description": "Leading provider of Security & Surveillance (CCTV), Networking Solutions, and Solar Energy systems in Pakistan",
    "url": "https://upedgetechnologies.shop",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK"
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
