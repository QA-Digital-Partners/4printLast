'use client'
import FooterComponent from "./components/Footer";
import HeaderComponent from "./components/Header";
import "./globals.css";
import '../../public/fuentes/fonts.css'; 
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pageview, GA_MEASUREMENT_ID } from "./utils/analitics";
import dynamic from "next/dynamic";


// Cargar Script dinámicamente solo en cliente
const Script = dynamic(() => import("next/script"), { ssr: false });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);
  return (
    <html lang="en" >
      <head>
        {/* Google Analytics */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
