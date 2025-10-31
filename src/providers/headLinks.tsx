import Script from "next/script"

export const SiteHead = () => {

    return <head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="BBS.Tallinn" />
        <link rel="manifest" href="/favicon/site.webmanifest" />




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