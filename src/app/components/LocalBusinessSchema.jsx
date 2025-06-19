import Head from 'next/head';

const LocalBusinessSchema = () => {
  const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "4Print",
  "image": "https://4printus.com/images/Logo-no-lined.svg",
  "url": "https://4printus.com/",
  "telephone": "+1-443-998-1717",
  "email": "sales@4printus.com",
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
    "longitude": -76.6242849
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "$$",
  "description": "Since 2021, 4Print has specialized in commercial vehicle wrapping, fleet and custom car wraps, plus commercial printing, apparel & stationery across Maryland, Virginia and DC.",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 39.1728599,
      "longitude": -76.6242849
    },
    "geoRadius": 80000
  },
  "sameAs": [
    "https://www.facebook.com/4printus/",
    "https://www.instagram.com/4printus/"
  ],
  "hasMap": "https://www.google.com/maps?q=39.1728599,-76.6217046",
  "service": [
    {
      "@type": "Service",
      "name": "Fleet Wrap",
      "description": "Custom vehicle wraps for company fleets to enhance brand visibility and protect paint."
    },
    {
      "@type": "Service",
      "name": "Food Truck Wrap",
      "description": "Full-color, high-impact food truck wraps to attract attention and customers."
    },
    {
      "@type": "Service",
      "name": "Graphic Design Wraps",
      "description": "Design and installation of unique vinyl wraps with custom graphics."
    },
    {
      "@type": "Service",
      "name": "Color Change Wraps",
      "description": "Transform your vehicle’s appearance with high-quality vinyl color wraps."
    },
    {
      "@type": "Service",
      "name": "Textured Wraps",
      "description": "Add a distinctive look with specialty vinyl finishes like matte, carbon fiber, or brushed metal."
    },
    {
      "@type": "Service",
      "name": "Wall Wrap Printing",
      "description": "Large-format wall graphics and decals for offices, retail, or event spaces."
    },
    {
      "@type": "Service",
      "name": "Window Vinyl Printing",
      "description": "Custom printed vinyl for business windows, including see-through and opaque styles."
    },
    {
      "@type": "Service",
      "name": "Banner Printing",
      "description": "Durable indoor and outdoor banners for promotions, events, and business signage."
    },
    {
      "@type": "Service",
      "name": "Sticker Printing",
      "description": "High-quality custom stickers in various sizes, shapes, and finishes."
    },
    {
      "@type": "Service",
      "name": "Car Magnets",
      "description": "Removable magnetic signage for vehicles, ideal for mobile advertising."
    },
    {
      "@type": "Service",
      "name": "Stationery Printing",
      "description": "Branded business stationery including letterheads, envelopes, and notepads."
    },
    {
      "@type": "Service",
      "name": "Yard Signs",
      "description": "Custom yard signs for real estate, events, political campaigns, and local promotions."
    }
  ]

  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Head>
  );
};

export default LocalBusinessSchema;
