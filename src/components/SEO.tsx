import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO: React.FC = () => {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rivtor AB",
    "url": "https://rivtorab.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Sweden"
    },
    "email": "Konwar@domain",
    "creator": {
      "@type": "Organization",
      "name": "Devlofox",
      "url": "https://devlofox.com"
    }
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Rivtor AB provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in enterprise software development, cloud engineering, digital architecture, technical consulting, and infrastructure modernization."
        }
      },
      {
        "@type": "Question",
        "name": "Can you work with our existing development team?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We frequently collaborate with internal engineering teams, providing architecture guidance and technical leadership."
        }
      },
      {
        "@type": "Question",
        "name": "Do you build cloud-native applications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Cloud-first engineering is one of our core areas of expertise."
        }
      },
      {
        "@type": "Question",
        "name": "Can you modernize legacy software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We help businesses upgrade existing systems while minimizing operational disruption."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support startups, enterprise organizations, SaaS companies, manufacturing, healthcare, logistics, finance, and many other sectors."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ongoing support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We build long-term partnerships that include optimization, maintenance, and strategic technical consulting."
        }
      }
    ]
  };

  const schemaBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rivtorab.com"
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Rivtor AB | Cloud Engineering & Enterprise Software Solutions</title>
      <meta name="description" content="Rivtor AB delivers cloud engineering, enterprise software development, digital architecture, and technical consulting services for modern businesses." />
      <meta name="keywords" content="Cloud Engineering, Enterprise Software Development, Software Consulting, Technology Consulting, Sweden IT Company, Digital Architecture" />
      <meta name="author" content="Devlofox" />
      <meta name="robots" content="index, follow" />
      <meta name="geo.region" content="SE" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Rivtor AB | Cloud Engineering, Enterprise Software Development & Technology Consulting" />
      <meta property="og:description" content="Engineering scalable digital products and enterprise software solutions." />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Rivtor AB" />
      <meta property="og:url" content="https://rivtorab.com" />
      <meta property="og:locale" content="en_SE" />
      <meta property="og:image" content="https://rivtorab.com/logo.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Rivtor AB | Cloud Engineering & Enterprise Software Solutions" />
      <meta name="twitter:description" content="Engineering scalable digital products and enterprise software solutions." />
      <meta name="twitter:image" content="https://rivtorab.com/logo.png" />

      {/* Canonical Link */}
      <link rel="canonical" href="https://rivtorab.com" />

      {/* Schema.org Declarations */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrg)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(schemaFAQ)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(schemaBreadcrumbs)}
      </script>
    </Helmet>
  );
};
