import '../styles/globals.css';
import {Analytics} from '@vercel/analytics/react';
import type {AppProps} from 'next/app';
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
            <link href='https://use.typekit.net/tlo2hmw.css' rel='stylesheet'/>
            <Component {...pageProps} />
            <Analytics/>
        </>
    );
}
