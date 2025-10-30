'use client'
import FooterComponent from "./components/Footer";
import HeaderComponent from "./components/Header";
import "./globals.css";
import '../../public/fuentes/fonts.css'; 
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pageview, GA_MEASUREMENT_ID } from "./utils/analitics";
import dynamic from "next/dynamic";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';


// Cargar Script dinámicamente solo en cliente
const Script = dynamic(() => import("next/script"), { ssr: false });

const GTM_ID = "GTM-PWNCFBPN"; // Reemplaza con tu ID de Google Tag Manager

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID_4PRINT, {
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

        {/* Google Tag Manager - Head */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />

        {/****************codigo de 4print ********************/}

        <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-KK0B0NHH1C`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KK0B0NHH1C', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/************************** GTAG ALfonso - 09/05/25 */}

      {/* Script de Google Tag Manager */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11038475601"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11038475601');
          `}
        </Script>

        {/************************ COnversion Wgatsapp - Alfonso - 09/05/25 */}

        {/* Conversión WhatsApp */}
        <Script id="gtag-whatsapp" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof url !== 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                send_to: 'AW-11038475601/iWgWCN6soYQYENGKx48p',
                event_callback: callback
              });
              return false;
            }
          `}
        </Script>

        
      </head>
      <body>
        {/* Google Tag Manager - Body */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <GoogleReCaptchaProvider
          reCaptchaKey="6LfAh_orAAAAAHMSC7XO874uFMvtd7aLI37mXfVB"
          scriptProps={{
            async: true,
            defer: true,
            appendTo: 'head',
          }}
        ></GoogleReCaptchaProvider>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
