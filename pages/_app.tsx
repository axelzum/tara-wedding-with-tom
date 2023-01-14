import '../styles/globals.css';
import {Analytics} from '@vercel/analytics/react';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

export default function App({Component, pageProps}: AppProps): React.ReactElement {
    return (
        <>
            <Script src='https://www.googletagmanager.com/gtag/js?id=G-FDQ4F9SQGS' strategy='afterInteractive'/>
            <Script
                dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-FDQ4F9SQGS', {
                            page_path: window.location.pathname,
                    });`
                }}
                id='google-analytics'
                strategy='afterInteractive'
            />
            <Analytics/>
            <meta content='width=device-width, initial-scale=1' name='viewport'/>
            <link href='https://use.typekit.net/tlo2hmw.css' rel='stylesheet'/>
            <Component {...pageProps} />
        </>
    );
}
