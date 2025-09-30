export default function sitemap() {
    const SITE_URL = "https://4printus.com"; // Reemplaza con tu dominio real
  
    const cities = ["glen-burnie","severna-park", "commercial" ];
    const commercial = ["fleet", "food-trucks", "glen-burnie", "baltimore", "vans", "trailers" ];
    const foodTrucksCities = ["glen-burnie", "baltimore" ];
    const fleetCities = ["glen-burnie", "baltimore" ];
    const wallcities = ["glen-burnie", ];
    const staticPages = [
      "", 
      "about", 
      "services", 
      "custom-car-wraps", 
      "car-wraps-maryland", 
      "commercial-vehicle-wrapping-lettering",
      "commercial-printing",
      "wall-wraps-maryland",
    ];
  
    const urls = [
      ...staticPages.map((page) => ({
        url: `${SITE_URL}/${page}`,
        lastModified: new Date().toISOString(),
      })),
      ...cities.map((city) => ({
        url: `${SITE_URL}/car-wraps-maryland/${city}`,
        lastModified: new Date().toISOString(),
      })),
      ...commercial.map((service) => ({
        url: `${SITE_URL}/car-wraps-maryland/commercial/${service}`,
        lastModified: new Date().toISOString(),
      })),
      ...foodTrucksCities.map((service) => ({
        url: `${SITE_URL}/car-wraps-maryland/commercial/food-trucks/${service}`,
        lastModified: new Date().toISOString(),
      })),
      ...fleetCities.map((service) => ({
        url: `${SITE_URL}/car-wraps-maryland/commercial/fleet/${service}`,
        lastModified: new Date().toISOString(),
      })),
      ...wallcities.map((city) => ({
        url: `${SITE_URL}/wall-wraps-maryland/${city}`,
        lastModified: new Date().toISOString(),
      }))

    ];
  
    return urls; // ✅ Ahora Next.js lo interpretará correctamente
  }
  