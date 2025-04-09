export default function sitemap() {
    const SITE_URL = "https://4printus.com"; // Reemplaza con tu dominio real
  
    const cities = ["glen-burnie","severna-park","fleet" ];
    const staticPages = [
      "", 
      "about", 
      "services", 
      "custom-car-wraps", 
      "car-wraps-maryland", 
      "commercial-vehicle-wrapping-lettering",
      "commercial-printing"
    ];
  
    const urls = [
      ...staticPages.map((page) => ({
        url: `${SITE_URL}/${page}`,
        lastModified: new Date().toISOString(),
      })),
      ...cities.map((city) => ({
        url: `${SITE_URL}/car-wraps-maryland/${city}`,
        lastModified: new Date().toISOString(),
      }))
    ];
  
    return urls; // ✅ Ahora Next.js lo interpretará correctamente
  }
  