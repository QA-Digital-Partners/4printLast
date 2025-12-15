'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function RecaptchaProviderClient({ children }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LfAh_orAAAAAHMSC7XO874uFMvtd7aLI37mXfVB"
      scriptProps={{ async: true, defer: true, appendTo: 'head' }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
