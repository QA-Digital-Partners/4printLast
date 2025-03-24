const fs = require("fs");
const path = require("path");

const SITE_URL = "https://4printus.com"; // Reemplázalo con tu dominio

const pages = [
  "",
  "about",
  "services",
  "contact",
  "custom-car-wrap",
  "car-wraps-maryland",
  "car-wraps-maryland/glen-burnie",
  "commercial-vehicle-wrapping-lettering",
  "commercial-printing",
]; // Agrega más rutas según tu sitio

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      return `<url>
        <loc>${SITE_URL}/${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>0.8</priority>
      </url>`;
    })
    .join("\n")}
</urlset>`;

fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), sitemap);

console.log("✅ Sitemap generado en /public/sitemap.xml");
