"use client";

import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-EQ4RKE6SN7`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-EQ4RKE6SN7');
                    `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;