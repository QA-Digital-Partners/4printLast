import FooterComponent from "./components/Footer";
import HeaderComponent from "./components/Header";
import "./globals.css";
import '../../public/fuentes/fonts.css'; 


export const metadata = {
  title: "4Print",
  description: "Stand out on the road with 4Print! We specialize in high-quality commercial vehicle wraps, fleet branding, and custom printing in Maryland, Virginia, and DC.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
