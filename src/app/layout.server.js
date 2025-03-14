
export const metadata = {
  title: "4Print",
  description: "Stand out on the road with 4Print! We specialize in high-quality commercial vehicle wraps, fleet branding, and custom printing in Maryland, Virginia, and DC.",
  openGraph: {
    title: "4Print",
    description: "Stand out on the road with 4Print! We specialize in high-quality commercial vehicle wraps, fleet branding, and custom printing in Maryland, Virginia, and DC.",
    url: "https://www.4printus.com",
    siteName: "4 Print",
    images: [
      {
        url: "https://www.4printus.com/imagen-og.jpg",
        width: 1200,
        height: 630,
        alt: "Car and Fleet Wraps",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager - Head */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PWNCFBPN');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}