

  export default async function sitemap() {
    const SITE_URL = "https://4printus.com"; // 🔹 Reemplaza con tu dominio real
  
    const cities = ["glen-burnie"];
    const staticPages = ["", "about", "services", "custom-car-wraps", "car-wraps-maryland", "commercial-vehicle-wrapping-lettering","commercial-printing"];
  
    const urls = [
      ...staticPages.map((page) => ({
        loc: `${SITE_URL}/${page}`,
        lastmod: new Date().toISOString(),
        priority: "0.8",
      })),
      ...cities.map((city) => ({
        loc: `${SITE_URL}/car-wraps-maryland/${city}`,
        lastmod: new Date().toISOString(),
        priority: "0.7",
      }))
    ];
  
    return urls;
  }