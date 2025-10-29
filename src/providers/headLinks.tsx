import Script from "next/script"

export const SiteHead = () => {

    return <head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="BBS.Tallinn" />
        <link rel="manifest" href="/favicon/site.webmanifest" />


        <link rel="alternate" href="https://www.beautybystiina.ee/en" hrefLang="en" />
        <link rel="alternate" href="https://www.beautybystiina.ee" hrefLang="et" />

        {/* About */}
        <link rel="alternate" href="https://www.beautybystiina.ee/en/about" hrefLang="en" />
        <link rel="alternate" href="https://www.beautybystiina.ee/et/about" hrefLang="et" />

        {/* Services & Prices */}
        <link rel="alternate" href="https://www.beautybystiina.ee/en/services-prices" hrefLang="en" />
        <link rel="alternate" href="https://www.beautybystiina.ee/et/services-prices" hrefLang="et" />

        {/* Reviews */}
        <link rel="alternate" href="https://www.beautybystiina.ee/en/review" hrefLang="en" />
        <link rel="alternate" href="https://www.beautybystiina.ee/et/review" hrefLang="et" />

        {/* Contact */}
        <link rel="alternate" href="https://www.beautybystiina.ee/en/contact" hrefLang="en" />
        <link rel="alternate" href="https://www.beautybystiina.ee/et/contact" hrefLang="et" />

        {/* FAQ */}
        <link rel="alternate" href="https://www.beautybystiina.ee/en/faq" hrefLang="en" />
        <link rel="alternate" href="https://www.beautybystiina.ee/et/faq" hrefLang="et" />



        {/* Google tag (gtag.js) */}
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=AW-17538672523"
            strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17538672523');
          `}
        </Script>
    </ head>
}