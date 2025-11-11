import FooterComponent from "./components/Footer";
import HeaderComponent from "./components/Header";
import "./globals.css";
import '../../public/fuentes/fonts.css'; 
import ClientScripts from "./components/ClientScripts";


const GTM_ID = "GTM-PWNCFBPN"; 

export default function RootLayout({ children }) {

  return (
    <html lang="en" >
      <head>
        
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
        <ClientScripts />
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
} 
