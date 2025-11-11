import React from "react";

const LocalBusinessSchema = () => {
  const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "4 Print Commercial Car Wraps Maryland",
  "image": "https://4printus.com/images/Logo-no-lined.svg",
  "url": "https://4printus.com/",
  "telephone": "+14439981717",
  "email": "sales@4printus.com",
  "priceRange": "$$",
  "description": "4 Print Commercial Car Wraps Maryland specializes in high-quality vehicle wraps, wall graphics, and commercial printing services. We help businesses across Maryland stand out through expert design, certified installation, and premium materials — all backed by our 4Print Promise of complete customer satisfaction and a 1-year labor warranty.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "512 Crain Hwy N Unit 6",
    "addressLocality": "Glen Burnie",
    "addressRegion": "MD",
    "postalCode": "21061",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.1728599,
    "longitude": -76.6217046
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "areaServed": [
    "Anne Arundel County, Maryland",
    "Baltimore County, Maryland",
    "Baltimore City, Maryland",
    "Carroll County, Maryland",
    "Cecil County, Maryland",
    "Charles County, Maryland",
    "Frederick County, Maryland",
    "Harford County, Maryland",
    "Howard County, Maryland",
    "Montgomery County, Maryland",
    "Prince George’s County, Maryland",
    "Queen Anne’s County, Maryland",
    "St. Mary’s County, Maryland",
    "Jessup, Maryland",
    "Glen Burnie, Maryland"
  ],
  "sameAs": [
    "https://www.google.com/maps/place/4+Print+Commercial+Wraps+Maryland/",
    "https://www.facebook.com/4printus",
    "https://www.instagram.com/4printus/"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "4 Print Services",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Commercial Vehicle Wraps in Maryland",
        "itemListElement": [
          { "@type": "Service", "name": "Fleet Wraps & Graphics" },
          { "@type": "Service", "name": "Food Truck Wraps & Graphics" },
          { "@type": "Service", "name": "Van Wraps & Graphics" },
          { "@type": "Service", "name": "Trailer Wraps & Graphics" },
          { "@type": "Service", "name": "Truck Wraps & Graphics" },
          { "@type": "Service", "name": "Partial Vehicle Wraps for Commercial Vehicles" },
          { "@type": "Service", "name": "Vehicle Lettering & Decals" },
          { "@type": "Service", "name": "Perforated Window Graphics for Vehicles" },
          { "@type": "Service", "name": "Car Wrap Removal & Replacement" }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Wall Wraps & Storefront Graphics in Maryland",
        "itemListElement": [
          { "@type": "Service", "name": "Wall Murals" },
          { "@type": "Service", "name": "Wall Decals" },
          { "@type": "Service", "name": "Wallpaper Installation" },
          { "@type": "Service", "name": "Window Vinyls & Decals for Storefronts" },
          { "@type": "Service", "name": "Wall Wrap Removal" },
          { "@type": "Service", "name": "Wall Wrap Replacement or Repair" },
          { "@type": "Service", "name": "Custom Wall Design Consultation" },
          { "@type": "Service", "name": "Aluminum Signs" }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Custom Car Wraps in Maryland",
        "itemListElement": [
          { "@type": "Service", "name": "Full Color Change Car Wraps" },
          { "@type": "Service", "name": "Partial Car Wraps & Accents" },
          { "@type": "Service", "name": "Custom Car Wrap Graphics & Designs" }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Commercial Printing Services in Maryland",
        "itemListElement": [
          { "@type": "Service", "name": "Business Cards" },
          { "@type": "Service", "name": "Door Hangers" },
          { "@type": "Service", "name": "Apparel" },
          { "@type": "Service", "name": "Flyers" },
          { "@type": "Service", "name": "Banners" },
          { "@type": "Service", "name": "Stickers" },
          { "@type": "Service", "name": "Car Magnets" },
          { "@type": "Service", "name": "Yard Signs" },
          { "@type": "Service", "name": "See all printing services" }
        ]
      }
    ]
  }
  };

  return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
  );
};

export default LocalBusinessSchema;
