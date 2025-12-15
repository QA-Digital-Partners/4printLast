'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function RecaptchaProviderClient({ children }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LfAh_orAAAAAOw9vg4ucPXfgAzq27z_KxtT8TR5"
      scriptProps={{ async: true, defer: true, appendTo: 'head' }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
